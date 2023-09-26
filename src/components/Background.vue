<script >
export default {
    data() {
        return {
            data
        }
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
            <div class="row row-cols-1 row-cols-sm-5">
                <div class="col" v-for="name in data">
                    <div class="card">
                        <img :src="name.url" alt="">
                        <div class="card-body">
                            <p>{{ name.name }}</p>
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
</style>
