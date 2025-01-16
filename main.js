import { open_inventory } from "./src/inventory.js"

import { characters } from "./src/data/characters.js"
import { dialogs, get_dialog } from "./src/data/dialogs.js"
import { landscapes } from "./src/data/landscapes.js"

const TextBox = document.querySelector("#textbox")
const playerDiv = document.querySelector("#character_left")
const pnjDiv = document.querySelector("#character_right")
const landscapeDiv = document.querySelector("#landscape")

let current_dialog = get_dialog(1) // Initialisation avec le premier dialogue
// Pour éviter les appels multiples à get_next_card()
let is_changing_card = false
let previous_dialog

// Fonction pour passer au prochain dialogue
export const get_next_card = () => {
	if (is_changing_card) {
		console.warn("Transition en cours, ignorer cet appel.")
		return
	}
	is_changing_card = true

	previous_dialog = current_dialog

	const next_card_id = current_dialog.next_card()
	console.log("Next card ID:", next_card_id)

	if (!next_card_id) {
		console.error("Prochain ID de carte non défini ou null.")
		is_changing_card = false
		return
	}

	current_dialog = get_dialog(next_card_id)
	if (!current_dialog) {
		console.error("Dialogue introuvable pour l'ID:", next_card_id)
		is_changing_card = false
		return
	}

	open_dialog(current_dialog)

	if (previous_dialog.pnj_id !== current_dialog.pnj_id) {
		// Animation changement de PNJ
		console.log("Animation PNJ.")
	}

	// Transition terminée
	is_changing_card = false
}

// Fonction pour écrire progressivement un texte
function write_text(text, container) {
	let splitted_text = text.split("")
	container.innerText = ""

	splitted_text.forEach((char, index) => {
		setTimeout(() => {
			if (text[index - 1] == " ") {
				container.innerText += " " + char
			} else {
				container.innerText += char
			}
		}, index * 50)
	})
}

// Fonction pour afficher un dialogue
function open_dialog(dialog) {
	TextBox.innerHTML = ""

	//gestion de l'arrière-plan
	if (
		!previous_dialog ||
		previous_dialog?.landscape != current_dialog.landscape
	) {
		landscapeDiv.src = landscapes[current_dialog.landscape].src
			? landscapes[current_dialog.landscape].src
			: landscapes.default.src
		landscapeDiv.srcset = landscapes[current_dialog.landscape].srcset
			? landscapes[current_dialog.landscape].srcset
			: landscapes.default.srcset
	}

	// Gestion de l'image du joueur
	playerDiv.classList.remove("speaking")
	if (
		!previous_dialog ||
		previous_dialog?.player_name != current_dialog.player_name ||
		previous_dialog?.player_img != current_dialog.player_img
	) {
		playerDiv.innerHTML = ""
		let player_img = document.createElement("img")
		if (
			characters[dialog.player_name] &&
			characters[dialog.player_name].emotions[dialog.player_img]
		) {
			player_img.setAttribute(
				"src",
				characters[dialog.player_name].emotions[dialog.player_img]
			)
			playerDiv.appendChild(player_img)
		} else {
			console.error(
				"Image du joueur introuvable:",
				dialog.player_name,
				dialog.player_img
			)
		}
	}

	// Gestion de l'image du pnj
	pnjDiv.classList.remove("speaking")
	if (
		!previous_dialog ||
		previous_dialog?.pnj_id != current_dialog.pnj_id ||
		previous_dialog?.pnj_img != current_dialog.pnj_img
	) {
		pnjDiv.innerHTML = ""
		let pnj_img = document.createElement("img")
		if (
			characters[dialog.pnj_id] &&
			characters[dialog.pnj_id].emotions[dialog.pnj_img]
		) {
			pnj_img.setAttribute(
				"src",
				characters[dialog.pnj_id].emotions[dialog.pnj_img]
			)
			pnjDiv.appendChild(pnj_img)
		} else {
			console.error(
				"Image du pnj introuvable:",
				dialog.pnj_id,
				dialog.pnj_img
			)
		}
	}

	//animation de mouvement du personnage qui parle
	if (dialog.speaking == "player") {
		playerDiv.classList.add("speaking")
	} else if ((dialog.speaking = "pnj")) {
		pnjDiv.classList.add("speaking")
	}

	// Gestion du texte/question
	let text_p = document.createElement("p")
	TextBox.appendChild(text_p)
	write_text(dialog.question, text_p)

	// Gestion des réponses ou transition simple
	if (dialog.answers && dialog.answers.length > 0) {
		let questions_box = document.createElement("div")
		questions_box.setAttribute("id", "answers")
		TextBox.appendChild(questions_box)
		dialog.answers.forEach((element) => {
			let answer = document.createElement("a")
			answer.setAttribute("class", "answer")
			answer.innerText = element.text
			questions_box.appendChild(answer)

			// Gestion du clic sur une réponse
			answer.onclick = (event) => {
				event.stopPropagation() // Empêche le clic de se propager
				dialog.answered = element.id
				get_next_card()
			}
		})
	} else {
		// Si pas de réponses, clic sur la TextBox pour avancer
		TextBox.addEventListener("click", get_next_card, { once: true })

		let arrow_next = document.createElement("img")
		arrow_next.setAttribute("src", "./icons/chevron-right.svg")
		arrow_next.setAttribute("id", "arrow_next")
		TextBox.appendChild(arrow_next)
	}
}

//function open

// Initialisation du premier dialogue
open_dialog(current_dialog)
