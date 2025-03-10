/**
 * @typedef {object} Landscape
 * @property {string} src - link of the image
 * @property {string} srcset - other links for smaller version of the image
 */

/**
 * Loads the image in the div
 * @param {HTMLDivElement} landscapeDiv
 * @param {string} imageId
 * @param {function(): any} callback - function called at th end of the load
 */
export const loadLandscapes = (landscapeDiv, imageId, callback) => {
	if (landscapes[imageId]) {
		landscapeDiv.src = landscapes[imageId].src
		landscapeDiv.srcset = landscapes[imageId].srcset
		landscapeDiv.onload = () => {
			callback()
		}
	} else {
		console.error("Image de paysage introuvable:", imageId)
		callback()
	}
}

/** @type {Landscape} */
export const landscapes = {
	default: { src: "./img/landscapes/thron-elf.webp", srcset: "" },
	"elfique-caleche": {
		src: "./img/landscapes/1440p/elfique/caleche.webp",
		srcset: "",
	},
	"elfique-cite": {
		src: "./img/landscapes/1440p/elfique/cite-elfique.webp",
		srcset: "",
	},
	"elfique-couloir": {
		src: "./img/landscapes/fullHD/elfique/couloir-elfique.webp",
		srcset: "",
	},
	"elfique-throne": {
		src: "./img/landscapes/1440p/elfique/thron-elf.webp",
		srcset: "./img/landscapes/fullHD/elfique/thron-elf.webp",
	},
	"elfique-chambre-aelis": {
		src: "./img/landscapes/fullHD/elfique/chambre-aelis.webp",
		srcset: "",
	},
	"elfique-chambre-thalia": {
		src: "./img/landscapes/fullHD/elfique/chambre-thalia.webp",
		srcset: "",
	},
	"barbare-cite": {
		src: "./img/landscapes/1440p/barbare/cite-barbare.webp",
		srcset: "",
	},
	"barbare-cite-2": {
		src: "./img/landscapes/1440p/barbare/cite-barbare.webp",
		srcset: "",
	},
	"foret-chemin": {
		src: "./img/landscapes/1440p/barbare/foret-chemin.webp",
		srcset: "",
	},
	"foret-caleche": {
		src: "./img/landscapes/1440p/barbare/foret-caleche.webp",
		srcset: "",
	},
}
