<script >
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container">
        <form>
            <select id="myselect" name="Alien">
                <option value="Alien" selected="selected">Alien </option>
                <option value="Monster">Monster </option>
            </select>
        </form>
    </div>
</template>

<style scoped>
#myselect {
    width: 10rem;
    border-radius: 5px;
}
</style>
