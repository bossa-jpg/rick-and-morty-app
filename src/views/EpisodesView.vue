<template>
  <div>
      <input type="text"  v-model="search" placeholder="Search.." >
      
      <ul><li v-for="item in filteredEpisodes" :key="item.id">{{ item.name }}</li></ul>
  </div>
</template>

<script>

const getAllEpisodes = (page) => {
  return fetch("https://rickandmortyapi.com/api/episode" +( page ? '?page=' + page : ''))
  .then(response => {
    return response.json()
  })
}
export default {
  name: 'EpisodesPage',
  data() {
    return {
      getResult: [],
      search: ''
    }
  },
  
  mounted() {
    const pages = 3;
    for(let i = 1; i < pages; i++){
      getAllEpisodes(i).then(response => {
        this.getResult = this.getResult.concat(response.results)
      }).catch(error => console.error(error))
    }
  },
  computed: {
    filteredEpisodes: function() {
      return this.getResult.filter((episode) => {
        return episode.name.toLowerCase().match(this.search.toLowerCase())
      }).sort((a,b) => a.id - b.id)
    }
  }
}
</script>

<style>
</style>
