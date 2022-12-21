<template>
    <div class="container">
        <input type="text"  v-model="search" placeholder="Search.." >
        <ul v-for="item, index in filteredCharacters" :key="item.id">
          <CharacterItem v-if="index < 30" :item="item" />
        </ul>
    </div>
</template>

<script>
import CharacterItem from "../components/CharacterItem.vue"
const getAllCharacters = (page) => {
  return fetch("https://rickandmortyapi.com/api/character" +( page ? '?page=' + page : ''))
  .then(async response => {
    return await response.json()
  })
}
export default {
    name: 'CharactersPage',
    components: {
      CharacterItem
    },
    data() {
        return {
            getResult: [],
            search: '',
        }
    },
    mounted() {
    const pages = 42
    for(let i = 1; i < pages; i++){
      getAllCharacters(i).then(response => {
          this.getResult = this.getResult.concat(response.results)
      }).catch(error => console.error(error))
    }
    },
    computed: {
    filteredCharacters: function() {
      return this.getResult.filter((character) => {
        return character.name.toLowerCase().match(this.search.toLowerCase())
      }).sort((a,b) => a.id - b.id)
    }
  }
}
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
}

input {
  margin: 20px 10vw;
  width: 200px;
}
</style>
