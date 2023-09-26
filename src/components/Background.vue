<script >
import { store } from '../store.js';

export default {
    name: "background",
    data() {
        return {
            store,
        }
    },

    created() {
        store.fetchData();

    }
}
</script>





<template>
    <div class=" mycolor ">
        <form class="p-2">
            <select id="myselect" name="Alien">
                <option value="Alien" selected="selected">Alien </option>
                <option value="Monster">Monster </option>
            </select>
        </form>
        <div class="container">
            <h3 class="m-auto bg-black text-white py-2"> Found 39 cards</h3>
            <div class="bg-white container g-0">
                <div class="row  ">
                    <div id="orange" class="col-3 pb-4 " v-for="card in store.cards">
                        <div class="d-flex flex-column">
                            <img :src="card.card_images[0].image_url" alt="">
                            <h3 class="text-center text-white py-3">{{ card.name }}</h3>
                            <div class="text-center pb-3">Alien</div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    </div>
</template>

<style scoped>
#myselect {
    width: 8rem;
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
