import { reactive } from "vue";
import axios from "axios"


export const store = reactive({
    base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    cards: null,
    result: null,
    selectArchetype: '',



    fetchData() {
        axios.get(this.base_url)
            .then(response => {
                console.log(response.data);
                this.cards = response.data.data
                this.result = response.data.meta.total_pages
                console.log(response.data.meta.total_pages);
            })
    }


});
















