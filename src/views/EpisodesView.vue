<template>
  <div class="hello">
    <ul><li v-for="item in getResult" :key="item.id">{{ item.name }}</li></ul>
  </div>
</template>

<script>
export default {
  name: 'EpisodesPage',
  props: {
    msg: String
  },
  data() {
    return {
      getResult: null
    }
  },
  mounted() {
    fetch("https://rickandmortyapi.com/api/episode")
     .then(async response => {
      const data = await response.json();
      this.getResult = data.results
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
