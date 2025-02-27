/**
 * @typedef {object} Object
 * @param {string} id
 * @param {string} name
 * @param {string} description
 * @param {string} Img
 */

/**
 * Returns an object based on it's id
 * @param {string} id
 * @returns {Object | undefined}
 */
export const get_object = (id) => objects.find((x) => x.id === id)

/**
 * Retruns a list 9 first objects that the player has obtained
 * @param {number} page_number
 * @returns {Object[]}
 */
export const get_objects_got = (page_number = 0) => {
	const result = []
	for (let i = page_number * 9; i < page_number * 9 + 9; i++) {
		if (objects_got[objects[i]?.id]) {
			result.push(objects[i])
		}
	}
	return result
}

/** @type {Object} */
export const objects = [
	{
		id: "lettre",
		name: "Lettre d'aelis",
		description:
			"Trouvé au niveau du char en ruine.\nIl appartenait à Evander.",
		Img: "./img/objects/medaillon.png",
	},
]

/** @type {object<string, boolean>[]} */
export const objects_got = {
	obj_1: true,
}
