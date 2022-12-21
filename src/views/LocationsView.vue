<template>
  <div class="container">
    <input type="text" v-model="search" placeholder="Search.." />
    <ul v-for="item in filteredLocations" :key="item.id">
      <LocationItem :item="item" />
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
      locations: [],
      search: "",
    };
  },
  mounted() {
    const pages = 7;
    for (let i = 1; i < pages; i++) {
      getLocations(i)
        .then((response) => {
          this.locations = this.locations.concat(response.results);
        })
        .catch((error) => console.error(error));
    }
  },
  computed: {
    filteredLocations: function () {
      return [...this.locations]
        .sort((a, b) => a.id - b.id)
        .filter((location, index) => {
          if (
            location.name.toLowerCase().match(this.search.toLowerCase()) &&
            index < 30
          )
            return true;
        })
        .filter((i, index) => index < 20);
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
