import { get_objects_got, get_object } from "./data/objects.js"

const inventory_overlay = document.getElementById("inventory_overlay")
const overlayBox = document.querySelector("#inventory_overlay .overlay_box")
const open_button = document.getElementById("inventory")
const close_button = document.querySelector("#inventory_overlay .close_button")
const itemList = document.getElementById("inventoryItemList")
const arrows = {
	box: document.querySelector("#inventory_overlay .arrows"),
	left: document.querySelector("#inventory_overlay .arrows .left"),
	right: document.querySelector("#inventory_overlay .arrows .right"),
}

const itemDetail = {
	Img: document.querySelector("#itemDetails .itemImg"),
	name: document.querySelector("#itemDetails .itemName"),
	description: document.querySelector("#itemDetails .itemDescription"),
}

const inventory_slots = []
let inventory_page = 0

const updateArrows = () => {
	if (inventory_page === 0) {
		arrows.left.classList.add("disabled")
	} else {
		arrows.left.classList.remove("disabled")
	}

	if ((inventory_page + 1) * 9 >= get_objects_got(inventory_page).length) {
		arrows.right.classList.add("disabled")
	} else {
		arrows.right.classList.remove("disabled")
	}
}

export const open_inventory = () => {
	inventory_overlay.classList.remove("hidden")
	inventory_page = 0
	loadItemPage()
	updateArrows()
}

export const close_inventory = () => {
	inventory_overlay.classList.add("hidden")
}

export const loadItemPage = () => {
	const objects = get_objects_got(inventory_page)
	//arrows
	if (objects.length <= 9) {
		arrows.box.classList.add("hidden")
	} else {
		arrows.box.classList.remove("hidden")
	}

	// Clear inventory
	inventory_slots.forEach((slot) => {
		slot.innerHTML = ""
		slot.id = ""
	})

	// Add items
	for (let i = 0; i < objects.length; i++) {
		let object = document.createElement("img")
		object.setAttribute("src", objects[i].Img)
		inventory_slots[i].appendChild(object)
		inventory_slots[i].id = objects[i].id
	}
}

const showItemDetails = (id) => {
	let object = get_object(id)
	itemDetail.Img.innerHTML = ""
	let img = document.createElement("img")
	img.setAttribute("src", object.Img)
	itemDetail.Img.appendChild(img)
	itemDetail.name.innerHTML = object.name
	itemDetail.description.innerHTML = object.description
}

/*items slots creation*/
for (let i = 0; i < 9; i++) {
	const item = document.createElement("div")
	item.classList.add("item")
	itemList.appendChild(item)
	inventory_slots.push(item)
}

/*listeners*/
open_button.onclick = () => {
	open_inventory()
}

close_button.onclick = () => {
	close_inventory()
}

inventory_overlay.onclick = () => {
	close_inventory()
}

overlayBox.onclick = (event) => {
	event.stopPropagation()
}

arrows.left.onclick = () => {
	if (inventory_page > 0) {
		inventory_page--
		loadItemPage()
		updateArrows()
	}
}

arrows.right.onclick = () => {
	if ((inventory_page + 1) * 9 < get_objects_got().length) {
		inventory_page++
		loadItemPage()
		updateArrows()
	}
}

inventory_slots.forEach((slot) => {
	slot.onclick = () => {
		if (!slot.id) return
		showItemDetails(slot.id)
	}
})
