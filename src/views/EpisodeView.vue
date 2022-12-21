<template>
  <div>
    <h1>{{ episodeInfo.name }}</h1>
    <div>
      <ul>
        <li v-for="item in episodeInfo.characters" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
const getEpisode = () => {
  return fetch(
    "https://rickandmortyapi.com/api" + window.location.pathname
  ).then((response) => {
    return response.json();
  });
};
export default {
  name: "EpisodeView",
  data() {
    return {
      episodeInfo: [],
    };
  },
  mounted() {
    getEpisode().then((result) => {
      this.episodeInfo = result;
    });
  },
};
</script>
<style></style>
