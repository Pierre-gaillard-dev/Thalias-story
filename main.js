import { characters } from "./src/data/characters.js"
import { get_dialog } from "./src/data/dialogs.js"
import { loadLandscapes } from "./src/data/landscapes.js"

const TextBox = document.querySelector("#textbox")
const playerDiv = document.querySelector("#character_left")
const pnjDiv = document.querySelector("#character_right")
const landscapeDiv = document.querySelector("#landscape")
const fadeDiv = document.querySelector("#fade")

let current_dialog = get_dialog("R1A1S1T1")
// Pour éviter les appels multiples à get_next_card()
let is_changing_card = false
let previous_dialog

const img_exists = (img) => {
	console.log(img)
	try {
		const xhr = new XMLHttpRequest()
		xhr.open("HEAD", img, false) // false = mode synchrone
		xhr.send()
		return xhr.status >= 200 && xhr.status < 400
	} catch (e) {
		return false
	}
}

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

// Fonction pour afficher le nom du personnage qui perle
function display_name(dialog) {
	let speaking_name = document.createElement("p")
	speaking_name.setAttribute("id", "speaking_name")
	TextBox.appendChild(speaking_name)
	if (dialog.speaking == "player") {
		speaking_name.innerText = `${dialog.player_name}`
		speaking_name.classList.add("left")
	} else if (dialog.speaking == "pnj") {
		speaking_name.innerText = `${dialog.pnj_id}`
		speaking_name.classList.add("right")
	}
}

// Fonction pour écrire progressivement un texte
function write_text(text, container) {
	let splitted_text = text.split("")

	splitted_text.forEach((char, index) => {
		setTimeout(() => {
			if (text[index - 1] == " ") {
				container.innerHTML += " " + char
			} else {
				container.innerHTML += char
			}
		}, index * 50)
	})
}

function reset_dialog() {
	TextBox.innerHTML = ""
	playerDiv.classList.remove("speaking")
	pnjDiv.classList.remove("speaking")
}

// Fonction pour afficher un dialogue
function open_dialog(dialog) {
	//gestion de l'arrière-plan
	if (!previous_dialog) {
		loadLandscapes(landscapeDiv, current_dialog.landscape, () => {
			fadeDiv.classList.remove("active")
		})
	} else if (previous_dialog?.landscape != current_dialog.landscape) {
		fadeDiv.classList.add("active")
		previous_dialog = current_dialog
		setTimeout(() => {
			loadLandscapes(landscapeDiv, current_dialog.landscape, () => {
				reset_dialog()
				display_name(dialog)
				fadeDiv.classList.remove("active")
				setTimeout(() => {
					open_dialog(current_dialog)
				}, 1000)
			})
		}, 1000)
		return
	}
	reset_dialog()

	// Gestion de l'image du joueur
	if (
		!previous_dialog ||
		previous_dialog?.player_name != current_dialog.player_name ||
		previous_dialog?.player_img != current_dialog.player_img
	) {
		playerDiv.innerHTML = ""
		let player_img = document.createElement("img")
		if (
			characters[dialog.player_name] &&
			characters[dialog.player_name].emotions[dialog.player_img] &&
			img_exists(
				characters[dialog.player_name].emotions[dialog.player_img]
			)
		) {
			player_img.setAttribute(
				"src",
				characters[dialog.player_name].emotions[dialog.player_img]
			)
		} else {
			console.error(
				"Image du joueur introuvable:",
				dialog.player_name,
				dialog.player_img,
				characters[dialog.player_name].emotions[dialog.player_img]
			)
			if (
				characters[dialog.player_name] &&
				img_exists(characters[dialog.player_name].emotions["default"])
			) {
				player_img.setAttribute(
					"src",
					characters[dialog.player_name].emotions["default"]
				)
			} else if (
				characters[dialog.player_name] &&
				characters[dialog.player_name].genre
			) {
				if (characters[dialog.player_name].genre == "female") {
					player_img.setAttribute("src", "img/silhouette-fem.webp")
				} else {
					player_img.setAttribute("src", "img/silhouette-homme.webp")
				}
			} else {
				player_img.setAttribute("src", "img/silhouette-homme.webp")
			}
		}
		playerDiv.appendChild(player_img)
	}

	// Gestion de l'image du pnj
	if (
		!previous_dialog ||
		previous_dialog?.pnj_id != current_dialog.pnj_id ||
		previous_dialog?.pnj_img != current_dialog.pnj_img
	) {
		pnjDiv.innerHTML = ""
		let pnj_img = document.createElement("img")
		if (
			characters[dialog.pnj_id] &&
			characters[dialog.pnj_id].emotions[dialog.pnj_img] &&
			img_exists(characters[dialog.pnj_id].emotions[dialog.pnj_img])
		) {
			console.log(
				dialog.pnj_id,
				dialog.pnj_img,
				characters[dialog.pnj_id].emotions[dialog.pnj_img],
				img_exists(characters[dialog.pnj_id].emotions[dialog.pnj_img])
			)
			pnj_img.setAttribute(
				"src",
				characters[dialog.pnj_id].emotions[dialog.pnj_img]
			)
		} else if (dialog.pnj_id) {
			console.error(
				"Image du pnj introuvable:",
				dialog.pnj_id,
				dialog.pnj_img
			)
			if (
				characters[dialog.pnj_id] &&
				img_exists(characters[dialog.pnj_id].emotions["default"])
			) {
				pnj_img.setAttribute(
					"src",
					characters[dialog.pnj_id].emotions["default"]
				)
			} else if (
				characters[dialog.pnj_id] &&
				characters[dialog.pnj_id].genre
			) {
				if (characters[dialog.pnj_id].genre == "female") {
					pnj_img.setAttribute("src", "img/silhouette-fem.webp")
				} else {
					pnj_img.setAttribute("src", "img/silhouette-homme.webp")
				}
			} else {
				pnj_img.setAttribute("src", "img/silhouette-homme.webp")
			}
		}
		pnjDiv.appendChild(pnj_img)
	}

	//animation de mouvement du personnage qui parle
	if (dialog.speaking == "player") {
		playerDiv.classList.add("speaking")
	} else if ((dialog.speaking = "pnj")) {
		pnjDiv.classList.add("speaking")
	}

	//affichage du nom personnage qui parle
	let speaking_name = document.createElement("p")
	display_name(dialog)

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
