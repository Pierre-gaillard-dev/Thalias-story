/*
 *L'id du dialogue est compose de 3 parties :
 *R1 = Route 1
 *A1 = Acte 1
 *SA = Scène 1
 *O1 = Option 1 (choix)
 *T1 = Texte 1
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
		question: "Oui pourquoi pas, je pourrais vanter vos mérites.",
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
	{
		id: "R1A1S2T1",
		question: "Pourquoi nous regardent-ils comme ça... ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S2T2"
		},
	},
	{
		id: "R1A1S2T2",
		question:
			"Il a dû se passer quelque chose dont nous ne sommes pas au courant...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S2T3"
		},
	},
	{
		id: "R1A1S2T3",
		question:
			"Nous n’avons pas été coupé du monde pour autant, cela doit être récent.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S2T4"
		},
	},
	{
		id: "R1A1S2T4",
		question:
			"Je pense que sa Majesté votre Père vous en parlera directement.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S2T5"
		},
	},
	{
		id: "R1A1S2T5",
		question: "J’espère que ce n’est pas très grave...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S2T6"
		},
	},
	{
		id: "R1A1S2T6",
		question:
			"Bon, je vais entrer, je vais vous laisser vaquer à vos occupations.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S3T1"
		},
	},
	{
		id: "R1A1S3T1",
		question:
			"Son Altesse Royale, Mademoiselle Aelis Silundral, héritière du trône d’Auralys, fille de sa Majesté Tharion Silundral, roi et gardien de la paix d’Auralys vient d’arriver.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Garde_elfique",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T2"
		},
	},
	{
		id: "R1A1S3T2",
		question: "Bonjour Père.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T3"
		},
	},
	{
		id: "R1A1S3T3",
		question:
			"Ma chère Aelis, bon retour parmi nous ! Comment s’est passé ton voyage à Pavrinthia ? La maladie a été éradiquée ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T4"
		},
	},
	{
		id: "R1A1S3T4",
		question:
			"Tout s’est bien passé merci, ça a duré plus de temps que prévu mais oui, la maladie est bel et bien éliminée.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T5"
		},
	},
	{
		id: "R1A1S3T5",
		question:
			"Où est Thalia ? Elle n’était pas là quand je suis descendue.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T6"
		},
	},
	{
		id: "R1A1S3T6",
		question: "J’allais y venir ma fille, j’allais y venir.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T7"
		},
	},
	{
		id: "R1A1S3T7",
		question: "Votre sœur nous a quitté, cela fa-",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T8"
		},
	},
	{
		id: "R1A1S3T8",
		question: "Pardon ? Je crois que j’ai du mal vous comprendre Père.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T9"
		},
	},
	{
		id: "R1A1S3T9",
		question: "Thalia nous a quitté. Elle n’est plus de ce monde.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T10"
		},
	},
	{
		id: "R1A1S3T10",
		question: "Vous mentez. Thalia...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T11"
		},
	},
	{
		id: "R1A1S3T11",
		question: "Ma sœur ne peut pas mourir maintenant !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T12"
		},
	},
	{
		id: "R1A1S3T12",
		question:
			"Aelis, je sais que c’est dur à accepter, mais c’est la vérité.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T13"
		},
	},
	{
		id: "R1A1S3T13",
		question:
			"Cela fera bientôt 3 ans que ta sœur a été tuée, mais nous avons fait notre deuil.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T14"
		},
	},
	{
		id: "R1A1S3T14",
		question: "3 ans ?!",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T15"
		},
	},
	{
		id: "R1A1S3T15",
		question:
			"Et vous n’avez pas pensé à m’envoyer un courrier pour me prévenir Père ?!",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T16"
		},
	},
	{
		id: "R1A1S3T16",
		question:
			"Avec ta mère, nous ne voulions pas que cela change quoi que ce soit pour le travail que tu avais à accomplir.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T17"
		},
	},
	{
		id: "R1A1S3T17",
		question: "Mais c’est ma sœur ! Celle qui était sensée vous succéder !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T18"
		},
	},
	{
		id: "R1A1S3T18",
		question: "Elle serait morte comment ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T19"
		},
	},
	{
		id: "R1A1S3T19",
		question:
			"Nous avons de fortes raisons de penser que le fils ainé de Childéric, Evender, l’a assassinée. Thalia devait l’épouser pour assurer la paix de nos royaumes.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T20"
		},
	},
	{
		id: "R1A1S3T20",
		question: "Donc vous avez voulu la marier à son assassin ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T21"
		},
	},
	{
		id: "R1A1S3T21",
		question:
			"Je te conseille de descendre d’un ton Aelis. Nous n’aurions pas pu le prévoir.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T22"
		},
	},
	{
		id: "R1A1S3T22",
		question: "...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T23"
		},
	},
	{
		id: "R1A1S3T23",
		question: "Qu’est-il advenu d’Evender ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T24"
		},
	},
	{
		id: "R1A1S3T24",
		question:
			"Childéric était censé l’envoyer, mais nous ne nous faisons plus d’illusion. Nous irons le chercher de force.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T25"
		},
	},
	{
		id: "R1A1S3T25",
		question:
			"Ils prétendent nous l’avoir envoyé mais nous ne l’avons pas reçu.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T26"
		},
	},
	{
		id: "R1A1S3T26",
		question:
			"Ces pauvres Malartiens doivent surement faire tout ce qu’ils peuvent pour protéger l’héritier du trône.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T27"
		},
	},
	{
		id: "R1A1S3T27",
		question: "Pas surprenant venant de la part de ces barbares !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T28"
		},
	},
	{
		id: "R1A1S3T28",
		question:
			"Donc vous avez laissé l’assassin de ma sœur en liberté alors que vous saviez qui l’a tuée ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T29"
		},
	},
	{
		id: "R1A1S3T29",
		question:
			"Ça ne saura tarder ma fille, il sera bientôt face à notre justice.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T30"
		},
	},
	{
		id: "R1A1S3T30",
		question: "Que ces barbares le veuillent ou non.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T31"
		},
	},
	{
		id: "R1A1S3T31",
		question:
			"D’ici là, tu seras celle qui reprendra les rênes de ta sœur. Tu deviendras reine à la place de notre regrettée Thalia.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T32"
		},
	},
	{
		id: "R1A1S3T32",
		question: "Vous ne pouvez pas juste me dire ça comme ça !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T33"
		},
	},
	{
		id: "R1A1S3T33",
		question:
			"Pour moi, Thalia était encore en vie jusqu’il y a quelques minutes !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T34"
		},
	},
	{
		id: "R1A1S3T34",
		question: "Je ne vais pas prendre sa place comme par magie !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T35"
		},
	},
	{
		id: "R1A1S3T35",
		question:
			"Tu n’as pas le choix, tu es maintenant notre seule héritière.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T36"
		},
	},
	{
		id: "R1A1S3T36",
		question: "Mais v-",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T37"
		},
	},
	{
		id: "R1A1S3T37",
		question:
			"Je te laisse aller dans tes quartiers. Nous en avons fini pour aujourd’hui.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T38"
		},
	},
	{
		id: "R1A1S3T38",
		question: "J’enverrai quelqu’un te chercher pour le dîner.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "pnj",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S3T39"
		},
	},
	{
		id: "R1A1S3T39",
		question: "...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "Tharion",
		pnj_img: "default",
		speaking: "player",
		landscape: "elfique-throne",
		answered: null,
		next_card: function () {
			return "R1A1S4T1"
		},
	},
	{
		id: "R1A1S4T1",
		question: "Tout va bien Votre Altesse ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "Guarde_elfique",
		speaking: "pnj",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S4T2"
		},
	},
	{
		id: "R1A1S4T2",
		question: "Oui Gunthral, à la perfection.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "Guarde_elfique",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S4T3"
		},
	},
	{
		id: "R1A1S4T3",
		question:
			"Ma sœur est morte depuis 3 ans mais je vais à la perfection.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "Guarde_elfique",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S4T4"
		},
	},
	{
		id: "R1A1S4T4",
		question: "Je suis désolé Votre Altesse, toutes mes condoléances...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "Guarde_elfique",
		speaking: "pnj",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S4T5"
		},
	},
	{
		id: "R1A1S4T5",
		question: "Tu ne savais pas, je ne t’en veux pas.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "Guarde_elfique",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S4T6"
		},
	},
	{
		id: "R1A1S4T6",
		question: "Nous avons été coupés d’Auralys pendant ces 4 ans.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "Guarde_elfique",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S4T7"
		},
	},
	{
		id: "R1A1S4T7",
		question:
			"Est-ce bien vous qui allez reprendre le flambeau de votre sœur ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "Guarde_elfique",
		speaking: "pnj",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S4T8"
		},
	},
	{
		id: "R1A1S4T8",
		question: "Mais qu’est-ce que vous avez tous avec ça à la fin ?!",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "GardePerso",
		pnj_img: "Guarde_elfique",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S4T9"
		},
	},
	{
		id: "R1A1S4T9",
		question: "[GardePerso enlevé]",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "",
		pnj_img: "",
		speaking: "narrator",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S4T10"
		},
	},
	{
		id: "R1A1S4T10",
		question: "Est-ce que je vais vraiment dans ma chambre ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: "",
		pnj_img: "",
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		answers: [
			{
				id: "1",
				text: "Oui",
			},
			{
				id: "2",
				text: "Non, je vais dans celle de Thalia.",
			},
		],
		next_card: function () {
			if (this.answered === "1") {
				return "R1A1S5O1T1"
			} else if (this.answered === "2") {
				return "R1A1S5O2T1"
			} else {
				console.error("Aucune option choisie.")
			}
		},
	},
	{
		id: "R1A1S5O1T1",
		question: "Comment est-ce qu’ils peuvent être comme ça ?!",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T2"
		},
	},
	{
		id: "R1A1S5O1T2",
		question: "Je ne vais pas remplacer Thalia !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T3"
		},
	},
	{
		id: "R1A1S5O1T3",
		question: "Comment je pourrais prendre la place de ma sœur ?!",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T4"
		},
	},
	{
		id: "R1A1S5O1T4",
		question:
			"Et ils n’ont même pas pris la peine d’envoyer un courrier pour me prévenir !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "pnj",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T5"
		},
	},
	{
		id: "R1A1S5O1T5",
		question:
			"Et ce n’est pas comme s’ils me disaient tout non plus, c’est sûr !",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T6"
		},
	},
	{
		id: "R1A1S5O1T6",
		question:
			"Ce n’est pas comme s’ils allaient tout me dire, il ne faudrait pas que j’en sache trop.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T7"
		},
	},
	{
		id: "R1A1S5O1T7",
		question: "Et je n’ai pas mon mot à dire là-dedans bien sûr.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T8"
		},
	},
	{
		id: "R1A1S5O1T8",
		question: "Tu serais tout aussi en colère que moi hein Thalia ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T9"
		},
	},
	{
		id: "R1A1S5O1T9",
		question: "...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T10"
		},
	},
	{
		id: "R1A1S5O1T10",
		question: "C’est tellement vide...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T11"
		},
	},
	{
		id: "R1A1S5O1T11",
		question: "Et silencieux...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S5O1T12"
		},
	},
	{
		id: "R1A1S5O1T12",
		question: "Pourquoi est-ce que tu as dû nous quitter ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-aelis",
		answered: null,
		next_card: function () {
			return "R1A1S6T1"
		},
	},
	// choix 2
	{
		id: "R1A1S5O2T1",
		question: "Je vais plutôt aller dans la chambre de Thalia d’abord.",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-couloir",
		answered: null,
		next_card: function () {
			return "R1A1S5O2T2"
		},
	},
	{
		id: "R1A1S5O2T2",
		question: "Thalia ? Es-tu là ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		next_card: function () {
			return "R1A1S5O2T3"
		},
	},
	{
		id: "R1A1S5O2T3",
		question: "Thalia...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		next_card: function () {
			return "R1A1S5O2T4"
		},
	},
	{
		id: "R1A1S5O2T4",
		question: "Tu n’es vraiment plus là...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		next_card: function () {
			return "R1A1S5O2T5"
		},
	},
	{
		id: "R1A1S5O2T5",
		question: "Comment est-ce que tu as pu mourir... ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		next_card: function () {
			return "R1A1S5O2T6"
		},
	},
	{
		id: "R1A1S5O2T6",
		question: "Ils me cachent des choses, n’est-ce pas Grande Sœur ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		next_card: function () {
			return "R1A1S5O2T7"
		},
	},
	{
		id: "R1A1S5O2T7",
		question: "On ne se verra donc plus jamais...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		next_card: function () {
			return "R1A1S5O2T8"
		},
	},
	{
		id: "R1A1S5O2T8",
		question: "Hmm ? C’est quoi ça ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		next_card: function () {
			return "R1A1S5O2T9"
		},
	},
	{
		id: "R1A1S5O2T9",
		question: "C’est pour moi ?",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		answers: [
			{
				id: "1",
				text: "Ouvrir la lettre",
			},
		],
		next_card: function () {
			return "R1A1S5O2T10"
		},
	},
	{
		id: "R1A1S5O2T10",
		question: "Ceci est une lettre de Thalia",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		next_card: function () {
			return "R1A1S5O2T11"
		},
	},
	{
		id: "R1A1S5O2T11",
		question: "Tu me manques tellement aussi grande sœur...",
		player_name: "Aelis",
		player_img: "default",
		pnj_id: null,
		pnj_img: null,
		speaking: "player",
		landscape: "elfique-chambre-thalia",
		answered: null,
		answers: [
			{
				id: "1",
				text: "Je devrais garder ça et la mettre dans ma chambre.",
			},
			{
				id: "2",
				text: "Il vaudrait mieux laisser la lettre ici.",
			},
		],
		next_card: function () {
			return "R1A1S5O2T12"
		},
	},
	{},
]

// Fonction pour obtenir un dialogue par son ID
export const get_dialog = (id) => {
	return dialogs.find((x) => x.id === id) || null // Retourne null si non trouvé
}
