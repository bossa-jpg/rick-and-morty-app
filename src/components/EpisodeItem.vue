<template>
  <div className="episode-info">
    <RouterLink :to="'/rick-and-morty-app/api/episode/' + item.id"
      ><h3>{{ item.name }}</h3></RouterLink
    >
    <p>
      {{ item.episode }}<br />
      Air date: {{ item.air_date }}
    </p>
  </div>
</template>
<script>
export default {
  name: "EpisodeItem",
  props: {
    item: {
      id: Number,
      name: String,
      air_date: String,
      episode: String,
      characters: Array,
      url: String,
      created: String,
    },
  },
};
</script>
<style>
.episode-info {
  border-bottom: 2px solid rgb(58, 157, 124);
  margin: 0 5vw;
  padding: 5px 5vw;
  text-align: start;
}
</style>
