<template>
    <div>
        <h1>{{ characterInfo.name }}</h1>
        <div>
            <ul>
                <!-- <li v-for="item in episodeInfo.characters" :key="item">{{ item }}</li> -->
            </ul>
        </div>
    </div>
</template>
<script>
const getEpisode = () => {
    return fetch("https://rickandmortyapi.com/api" + window.location.pathname)
        .then(response => {
            return response.json()
        })
}
export default {
    name: 'CharacterView',
    data() {
        return {
            characterInfo: [],
        }
    },
    mounted() {
        getEpisode().then(result => {
            this.characterInfo = result
        })
    }
}
</script>
<style>

</style>