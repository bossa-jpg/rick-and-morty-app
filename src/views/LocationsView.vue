<template>
  <div class="container">
    <input type="text" v-model="search" placeholder="Search.." />
    <ul v-for="(item, index) in filteredLocations" :key="item.id">
      <LocationItem v-if="index < 30" :item="item" />
    </ul>
  </div>
</template>

<script>
import LocationItem from "../components/LocationItem.vue";
const getLocations = (page) => {
  return fetch(
    "https://rickandmortyapi.com/api/location" + (page ? "?page=" + page : "")
  ).then(async (response) => {
    return await response.json();
  });
};

export default {
  name: "LocationsPage",
  components: {
    LocationItem,
  },
  data() {
    return {
      getResult: [],
      search: "",
    };
  },
  mounted() {
    const pages = 7;
    for (let i = 1; i < pages; i++) {
      getLocations(i)
        .then((response) => {
          this.getResult = this.getResult.concat(response.results);
        })
        .catch((error) => console.error(error));
    }
  },
  computed: {
    filteredLocations: function () {
      return this.getResult
        .filter((location) => {
          return location.name.toLowerCase().match(this.search.toLowerCase());
        })
        .sort((a, b) => a.id - b.id);
    },
  },
};
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
