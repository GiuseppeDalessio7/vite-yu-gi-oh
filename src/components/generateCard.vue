<script>
export default {
    name: 'generateCard',
    props: {
        card: Object,

    },
}
</script>

<template>
    <div class="col-3 pb-4">
        <div class="bg_orange d-flex flex-column">
            <img :src="card.card_images[0].image_url" alt="">
            <h3 class="text-center text-white py-3">{{ card.name }}</h3>
            <div class="text-center pb-3">{{ card.archetype }}</div>
        </div>
    </div>
</template>

<style  scoped>
.bg_orange {
    background-color: orange;
}
</style>