let get_dialog(id) {
    return dialogs.find(x => x.id === id)
}

let dialogs = [
    {
        "id": 1,
        "question": "Ceci est une question",
        "pnj_img": "img/pnj1/angry",
        "answered": null,
        "answers": [
            {
                "id": 1,
                "text_M": "réponse 1",
                "next_card": function() {return get_dialog(2)}
            },
            {
                "id": 2,
                "text_M": "réponse 2",
                "next_vard_id": 3
            },
            {
                "id": 3,
                "text_M": "réponse 3",
                "next_vard_id": 4
            }
        ]
    },
    {
        "id": 2,
        "question_M": "Ceci est une deuxième question",
        "question_F": "Ceci est une deuxième question",
        "pnj_img": "img/pnj1/happy",
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