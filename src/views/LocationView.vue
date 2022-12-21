<template>
    <div>
        <h1>{{ locationInfo.name }}</h1>
        <div>
            <ul>
                <li v-for="item in locationInfo.residents" :key="item">{{ item }}</li>
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
    name: 'LocationView',
    data() {
        return {
            locationInfo: [],
        }
    },
    mounted() {
        getEpisode().then(result => {
            this.locationInfo = result
        })
    }
}
</script>
<style>

</style>