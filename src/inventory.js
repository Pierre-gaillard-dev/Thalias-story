const inventory_overlay = document.getElementById("inventory_overlay")
const overlayBox = document.querySelector("#inventory_overlay .overlay_box")
const open_button = document.getElementById("inventory")
const close_button = document.querySelector("#inventory_overlay .close_button")
const itemList = document.getElementById("inventoryItemList")

export const open_inventory = () => {
    inventory_overlay.classList.remove("hidden")
}

export const close_inventory = () => {
    inventory_overlay.classList.add("hidden")
}

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

for (let i = 0; i<3*4; i++) {
    const item = document.createElement("div")
    item.classList.add("item")
    item.innerHTML = "Item " + i
    itemList.appendChild(item)
}