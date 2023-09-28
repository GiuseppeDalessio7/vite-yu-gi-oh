<script>
import { store } from '../store.js'

export default {
    name: 'searchApp',
    emits: ['mySearch'],
    data() {
        return {
            store,
        }
    },
    created() {
        store.fetchData();
    },

}
</script>
<template>
    <div class="py-3">
        <select id="myselect" class="form-select" aria-label="Default select example" @change="$emit('mySearch')"
            v-model="store.selectArchetype">
            <option disabled value="">Choose Archetyp</option>
            <option value="Alien">Alien</option>
            <option value="Noble Knight">Noble Knight</option>
            <option value="Melodious">Melodious</option>
            <option value="Archfiend">Archfiend</option>
        </select>
    </div>
</template>

<style scoped>
#myselect {
    width: 12rem;
    border-radius: 5px;
    margin-left: 6rem;
    margin-bottom: 1rem;
}
</style>