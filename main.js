import { characters } from "./src/characters.js"
import { dialogs } from "./src/dialogs.js"

const TextBox = document.querySelector("#textbox")

const playerDiv = document.querySelector("#character_left")
const pnjDiv = document.querySelector("#character_right")




function get_dialog(id) {
    return dialogs.find(x => x.id === id)
}

function get_next_card() {
    current_dialog = get_dialog(current_dialog.next_card())
    open_dialog(current_dialog)
}

let current_dialog = get_dialog(1)

function open_dialog(dialog) {
    TextBox.removeEventListener("click", get_next_card)
    playerDiv.innerHTML = ""
    pnjDiv.innerHTML = ""

    //images
    let player_img =document.createElement("img")
    player_img.setAttribute(
        "src", 
        characters[dialog.player_name].emotions[dialog.player_img]
    )
    playerDiv.appendChild(player_img)

    //text or question
    console.log(dialog)
    TextBox.innerHTML = `<p>${dialog.question}</p>`

    //answers
    if (dialog.answers) {
        let questions_box = document.createElement("div")
        questions_box.setAttribute("id", "answers")
        TextBox.appendChild(questions_box)

        dialog.answers.forEach(element => {
            let answer = document.createElement("a")
            answer.setAttribute("class", "answer")
            answer.innerText = element.text
            questions_box.appendChild(answer)
            answer.addEventListener("click", () => {
                dialog.answered = element.id
                get_next_card()
            })
        })
    } else {
        TextBox.addEventListener("click", get_next_card)
        
        let arrow_next = document.createElement("img")
        arrow_next.setAttribute("src", "./icons/chevron-right.svg")
        arrow_next.setAttribute("id", "arrow_next")
        TextBox.appendChild(arrow_next)
    }
}

open_dialog(current_dialog)