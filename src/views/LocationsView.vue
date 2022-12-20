<template>
    <div class="hello">
        <input type="text"  v-model="search" placeholder="Search.." >

        <ul>
            <li v-for="item in filteredLocations" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
const getLocations = (page) => {
  return fetch("https://rickandmortyapi.com/api/location" +( page ? '?page=' + page : ''))
  .then(async response => {
    return await response.json()
  })
}

export default {
    name: 'LocationsPage',
    props: {
        msg: String
    },
    data() {
        return {
            getResult: [],
            search: ''
        }
    },
    mounted() {
    const pages = 6;
    for(let i = 1; i < pages; i++){
      getLocations(i).then(response => {
        this.getResult = this.getResult.concat(response.results)
      }).catch(error => console.error(error))
    }
    },
    computed: {
    filteredLocations: function() {
      return this.getResult.filter((location) => {
        return location.name.toLowerCase().match(this.search.toLowerCase())
      }).sort((a,b) => a.id - b.id)
    }
  }
}
</script>