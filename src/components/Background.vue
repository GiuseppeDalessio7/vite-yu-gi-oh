<script >
import { store } from '../store.js';
import generateCard from '../components/generateCard.vue'
import searchApp from '../components/searchApp.vue'

export default {
    name: "background",
    components: {
        generateCard,
        searchApp,



    },
    data() {
        return {
            store,
            activeimage: 0,
            props: {
                card: Object,
            },
            emits: ['my-Search']
        }
    },

    created() {
        store.fetchData();

    },

    methods: {
        searchArchetype() {
            // base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",

            const myurl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php' + `?archetype=${store.selectArchetype}`
            this.store.base_url = myurl + '&num=20&offset=0'
            store.fetchData(myurl)

            // console.log(myurl);
        }
    }


}

</script>

<template>
    <div class=" mycolor ">

        <searchApp @my-search="searchArchetype()"></searchApp>
        <div class="container p-2,5 pt-5 bg-light">
            <h3 class=" container bg-black text-white fs-6 p-3 ">Numero di pagine disponibili per la ricerca {{ store.result
            }}</h3>
            <div class="bg-white container g-0">
                <div id="orange" class="row cols-1 row-cols-sm-5 bg-white">
                    <generateCard :card="card" v-for="card in store.cards"></generateCard>

                </div>

                <!-- <div class="col pb-4 bg-light " v-for="card in store.cards"> -->
                <!-- <div id="orange" class="d-flex flex-column "> -->
                <!-- <img :src="card.card_images[activeimage].image_url" alt=""> -->
                <!-- <h5 class="text-center text-white py-2">{{ card.name }}</h5> -->
                <!-- <div class="text-center pb-2">{{ card.archetype }}</div> -->
                <!-- </div> -->
                <!-- </div> -->
            </div>

        </div>
    </div>
</template>

<style scoped>
.mycolor {
    background-color: #d48f38;
    width: 100%;
    height: 100%;
}

#orange {
    background-color: #d48f38;
}
</style>
