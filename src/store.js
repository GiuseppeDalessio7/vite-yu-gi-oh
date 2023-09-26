import { reactive } from "vue";
import axios from "axios"


export const store = reactive({
    base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    cards: null,
    info: null,



    fetchData() {
        axios.get(this.base_url)
            .then(response => {
                console.log(response.data);
                this.cards = response.data.data
            })
    }


});















