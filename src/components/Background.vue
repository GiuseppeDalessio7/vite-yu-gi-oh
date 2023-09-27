<script >
import { store } from '../store.js';
import generateCard from '../components/generateCard.vue'

export default {
    name: "background",
    components: {
        generateCard
    },
    data() {
        return {
            store,
            activeimage: 0,
        }
    },

    created() {
        store.fetchData();

    },

    methods: {
        searchArchetyp() {
            const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php' + '?archetype=Alien';
        }
    }


}




</script>





<template>
    <div class=" mycolor ">
        <form class="p-2">
            <select id="myselect" @change="searchArchetyp()">
                <option selected>Choose Archetyp</option>
                <option value="Alien">Alien</option>
                <option value="Noble Knight">Noble Knight</option>
                <option value="Tainted Treasure">Tainted Treasure</option>
                <option value="Melodious">Melodious</option>
                <option value="Archfiend">Archfiend</option>
            </select>

        </form>
        <div class="container p-2,5 pt-5 bg-light">
            <h3 class=" container bg-black text-white fs-6 p-3 "> Found 39 cards</h3>
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
* {


    box-sizing: border-box;
}

#myselect {
    width: 12rem;
    border-radius: 5px;
    margin-left: 6rem;
    margin-bottom: 1rem;
}

.mycolor {
    background-color: #d48f38;
    width: 100%;
    height: 100%;
}

#orange {
    background-color: #d48f38;
}
</style>
