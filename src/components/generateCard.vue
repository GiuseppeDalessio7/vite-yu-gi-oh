<script>
export default {
    name: 'generateCard',
    props: {
        card: Object,
    },
    data() {
        return {
            activeimage: 0,
        }
    },
}
</script>

<template>
    <div class="col-3 pb-4">
        <div class="bg_orange d-flex flex-column">
            <img :src="card.card_images[activeimage].image_url" alt="">
            <h3 class="text-center text-white py-3">{{ card.name }}</h3>
            <div class="text-center pb-3">{{ card.archetype }}</div>
        </div>
    </div>
</template>

<style  scoped>
.bg_orange {
    background-color: #d48f38;
}
</style>