/*
 *L'id du dialogue est compose de 3 parties :
 *R1 = Route 1
 *A1 = Acte 1
 *SA = Scène 1
 *T1 = Texte 1
 *O1 = Option 1
 */

export const dialogs = [
	{
		id: "R1A1S1T1",
		question:
			"Votre Altesse Royale ? Nous devrions arriver au palais dans quelques minutes.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T2"
		},
	},
	{
		id: "R1A1S1T2",
		question:
			"Mmh ? C’est merveilleux. Je dois t'avouer que j’ai hâte de retrouver Thalia.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T3"
		},
	},
	{
		id: "R1A1S1T3",
		question: "C’est vrai que votre sœur doit vous manquer après 4 ans.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T4"
		},
	},
	{
		id: "R1A1S1T4",
		question:
			"Oui, j’ai hâte de voir ce qu’elle est devenue. On va avoir beaucoup de choses à se dire !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T5"
		},
	},
	{
		id: "R1A1S1T5",
		question:
			"Je n’en doute pas, vous avez quelques années à rattraper. Mais ce voyage était nécessaire tout de même, seule vous étiez assez courageuse pour y aller.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T6"
		},
	},
	{
		id: "R1A1S1T6",
		question:
			"N’exagérons rien non plus, d’autres que moi auraient pu y aller. Mais ma présence a surtout servi à resserrer les liens entre nos royaumes.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T7"
		},
	},
	{
		id: "R1A1S1T7",
		question:
			"Bien sûr, mais ne vous dénigrez pas pour autant, vous êtes très forte.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T8"
		},
	},
	{
		id: "R1A1S1T8",
		question:
			"Je me dois d’avoir des compétences plus développées que la moyenne au vu mon statut, c’est indéniable.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T9"
		},
	},
	{
		id: "R1A1S1T9",
		question: "C’est le palais non ? Nous arrivons enfin.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T10"
		},
	},
	{
		id: "R1A1S1T10",
		question:
			"Votre père va surement vouloir vous voir dès votre arrivée, vous pourrez profiter pleinement de vos retrouvailles après.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T11"
		},
	},
	{
		id: "R1A1S1T11",
		question:
			"Très surement oui, mais je vais prendre quelques minutes pour profiter de ma sœur.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T12"
		},
	},
	{
		id: "R1A1S1T12",
		question: "Tiens...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T13"
		},
	},
	{
		id: "R1A1S1T13",
		question: "Pourquoi est-ce que Thalia n’est pas là...?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T14"
		},
	},
	{
		id: "R1A1S1T14",
		question: "Je pensais qu’elle aurait été là...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T15"
		},
	},
	{
		id: "R1A1S1T15",
		question:
			"Ça fait 4 ans que nous ne nous sommes pas vues quand même...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T16"
		},
	},
	{
		id: "R1A1S1T16",
		question: "Je vais aller directement voir Père dans ce cas.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T17"
		},
	},
	{
		id: "R1A1S1T17",
		question: "Vous voulez que je vous accompagne votre Altesse ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T18"
		},
	},
	{
		id: "R1A1S1T18",
		question: "...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S1T19"
		},
	},
	{
		id: "R1A1S1T19",
		question: "Oui pourquoi pas, je pourrais venter vos mérites.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-caleche",
		answered: null,
		next_card: function () {
			return "R1A1S2T1"
		},
	},
]

// Fonction pour obtenir un dialogue par son ID
export const get_dialog = (id) => {
	return dialogs.find((x) => x.id === id) || null // Retourne null si non trouvé
}
