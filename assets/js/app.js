/* ESERCIZIO 
    Descrizione:
    Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
    Bonus:
    Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue(

    {
        el: "#app",

        data: {
            testo: "Cambiamo in modo dinamico il titolo o l'immagine",
            nomeImg: "image",
            imgUrl: "https://i0.wp.com/recommendmeanime.com/wp-content/uploads/2020/02/breath-of-fire-demon-slayer.png?fit=3840%2C2160&ssl=1",
        },


    }
)