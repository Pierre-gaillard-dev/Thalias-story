export const dialogs = [
	{
		id: 1,
		question: "Qui s'en fout !?",
		pnj_id: "1",
		pnj_img: "angry",
        player_name: "Clovius",
		player_img: "neutral",
		answered: null,
		next_card: function () {
			return 2
		},
	},
	{
		id: 2,
		question: "Ceci est une deuxième question",
        pnj_id: "1",
		pnj_img: "happy",
        player_name: "Clovius",
		player_img: "etonne",
		answered: null,
		answers: [
			{
				id: 1,
				text: "té pa bo",
				next_card_id: 3,
			},
			{
				id: 2,
				text: "ok",
				next_card_id: 5,
			},
			{
				id: 3,
				text: "je t'aime bébou",
				next_card_id: 6,
			},
		],
		next_card: function () {
			switch (this.answered) {
                case 1 :
                    return 3
                case 2:
                    return 4
                case 3:
                    return 5
            }
		},
	},
    {
		id: 3,
		question: "pourquoi t'es pas gentil ?",
        pnj_id: "1",
		pnj_img: "sad",
        player_name: "Clovius",
		player_img: "angry",
		next_card: function () {
			return 6
		},
	},
    {
		id: 4,
		question: "ok",
        pnj_id: "1",
		pnj_img: "surprise",
        player_name: "Clovius",
		player_img: "surprise",
		next_card: function () {
			return 6
		},
	},
    {
		id: 5,
		question: "moi aussi bébou",
        pnj_id: "1",
		pnj_img: "happy",
        player_name: "Clovius",
		player_img: "happy",
		next_card: function () {
			return 6
		},
	},
]
