<template>
    <div class="hello">
        <ul>
            <li v-for="item in getResult" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CharactersPage',
    props: {
        msg: String
    },
    data() {
        return {
            getResult: null
        }
    },
    mounted() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(async response => {
                const data = await response.json();
                this.getResult = data.results
            });
    }
}
</script>