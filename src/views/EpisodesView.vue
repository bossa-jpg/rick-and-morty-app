<template>
  <div className="container">
    <input type="text" v-model="search" placeholder="Search.." />
    <ul v-for="(item, index) in filteredEpisodes" :key="item.id">
      <EpisodeItem v-if="index < 30" :item="item" />
    </ul>
  </div>
</template>

<script>
import EpisodeItem from "../components/EpisodeItem.vue";
const getAllEpisodes = (page) => {
  return fetch(
    "https://rickandmortyapi.com/api/episode" + (page ? "?page=" + page : "")
  ).then((response) => {
    return response.json();
  });
};
export default {
  name: "EpisodesPage",
  components: {
    EpisodeItem,
  },
  data() {
    return {
      episodes: [],
      search: "",
    };
  },

  mounted() {
    const pages = 3;
    for (let i = 1; i < pages; i++) {
      getAllEpisodes(i)
        .then((response) => {
          this.episodes = this.episodes.concat(response.results);
        })
        .catch((error) => console.error(error));
    }
  },
  computed: {
    filteredEpisodes: function () {
      return [...this.episodes]
        .sort((a, b) => a.id - b.id)
        .filter((episode, index) => {
          if (
            episode.name.toLowerCase().match(this.search.toLowerCase()) &&
            index < 20
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
