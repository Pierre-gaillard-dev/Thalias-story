export const objects = [
	{
		id: "obj_1",
		name: "médaillon d'Evander",
		description:
			"Trouvé au niveau du char en ruine.\nIl appartenait à Evander.",
		Img: "./img/objects/medaillon.png",
	},
]

export const get_object = (id) => objects.find((x) => x.id === id)

export const objects_got = {
	obj_1: true,
}

export const get_objects_got = (page_number = 0) => {
	const result = []
	for (let i = page_number * 9; i < page_number * 9 + 9; i++) {
		if (objects_got[objects[i]?.id]) {
			result.push(objects[i])
		}
	}
	return result
}
