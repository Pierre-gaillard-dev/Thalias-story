export const dialogs = [
	{
		id: 1,
		question: "Qui s'en fout !?",
		pnj_id: "Aelis",
		pnj_img: "default",
		player_name: "Clovius",
		player_img: "default",
		speaking: "player",
		landscape: "foret-caleche",
		answered: null,
		next_card: function () {
			return 123
		},
	},
	{
		id: 123,
		question: "Qui s'en fout pas ? &é\"'(-è_çà)=#{|`\\^@]}êëâä!:/;.,?<>~,",
		pnj_id: "Aelis",
		pnj_img: "default",
		player_name: "Clovius",
		player_img: "default",
		speaking: "pnj",
		landscape: "chambre-aelis",
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
		player_img: "default",
		speaking: "pnj",
		landscape: "foret-caleche",
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
				case 1:
					return 3
				case 2:
					return 4
				case 3:
					return 5
				default:
					return 6
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
		speaking: "pnj",
		landscape: "foret-caleche",
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
		speaking: "pnj",
		landscape: "foret-caleche",
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
		speaking: "pnj",
		landscape: "foret-chemin",
		next_card: function () {
			return 6
		},
	},
]

// Fonction pour obtenir un dialogue par son ID
export const get_dialog = (id) => {
	return dialogs.find((x) => x.id === id) || null // Retourne null si non trouvé
}
