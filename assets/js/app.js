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
            imgUrl: "https://www.elcarteldelgaming.com/wp-content/uploads/2019/08/san.gif",

        },

        methods: {
            change() {
                if (this.imgUrl == "https://www.elcarteldelgaming.com/wp-content/uploads/2019/08/san.gif") {
                    this.imgUrl = "https://i.gifer.com/Nxlb.gif"
                } else if (this.imgUrl == "https://i.gifer.com/Nxlb.gif") {
                    this.imgUrl = "https://images.squarespace-cdn.com/content/v1/5b23e822f79392038cbd486c/1630850651240-X8RLUDNCP1XRR08BDZH7/demon-slayer-anime-fight.gif"
                } else if (this.imgUrl == "https://images.squarespace-cdn.com/content/v1/5b23e822f79392038cbd486c/1630850651240-X8RLUDNCP1XRR08BDZH7/demon-slayer-anime-fight.gif") {
                    this.imgUrl = "https://i.ytimg.com/vi/sg1lpk4icyQ/maxresdefault.jpg"
                } else {
                    this.imgUrl = "https://www.elcarteldelgaming.com/wp-content/uploads/2019/08/san.gif"
                }



            },

        },
    }
)