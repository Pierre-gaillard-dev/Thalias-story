import { characters } from "./src/characters.js"
import { dialogs } from "./src/dialogs.js"

const TextBox = document.querySelector("#textbox")

const playerDiv = document.querySelector("#character_left")
const pnjDiv = document.querySelector("#character_right")




function get_dialog(id) {
    return dialogs.find(x => x.id === id)
}



let current_dialog = get_dialog(1)

function write_text(text) {

}

