export const dialogs = [
    {
        "id": 1,
        "question": "Qui s'en fout !?",
        "pnj_img": "img/pnj1/angry",
        "player_img": "img/joueur1/etonne",
        "answered": null,
        "next_card": function() {return get_dialog(2)},
        "answers": [
            {
                "id": 1,
                "text": "réponse 1",
            },
            {
                "id": 2,
                "text": "réponse 2"
            },
            {
                "id": 3,
                "text": "réponse 3"
            }
        ]
    },
    {
        "id": 2,
        "question": "Ceci est une deuxième question",
        "pnj_img": "img/pnj1/happy",
        "player_img": "img/joueur1/etonne",
        "answered": null,
        "answers": [
            {
                "id": 1,
                "text_M": "réponse 1",
                "text_F": "réponse 1",
                "next_vard_id": 3
            },
            {
                "id": 2,
                "text_M": "réponse 2",
                "next_vard_id": 5
            },
            {
                "id": 3,
                "text_M": "réponse 3",
                "next_vard_id": 6
            }
        ]
    }
]