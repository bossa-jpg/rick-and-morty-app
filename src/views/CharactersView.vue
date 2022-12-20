<template>
    <div class="hello">
              <input type="text"  v-model="search" placeholder="Search.." >
        <ul>
            <li v-for="item in filteredCharacters" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
const getAllCharacters = (page) => {
  return fetch("https://rickandmortyapi.com/api/character" +( page ? '?page=' + page : ''))
  .then(async response => {
    return await response.json()
  })
}
export default {
    name: 'CharactersPage',
    data() {
        return {
            getResult: [],
            search: '',
        }
    },
    mounted() {
    const pages = 6
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