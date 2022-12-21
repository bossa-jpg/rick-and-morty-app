<template>
  <div>
    <h1>{{ episodeInfo.name }}</h1>
    <div className="characters">
      <ul
        className="characterItem"
        v-for="item in filteredCharacters"
        :key="item"
      >
        <RouterLink :to="url(item.url).pathname">
          <img width="110" :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>
<script>
const getEpisode = async () => {
  return await fetch(
    "https://rickandmortyapi.com" + window.location.pathname
  ).then((response) => {
    return response.json();
  });
};

export default {
  name: "EpisodeView",
  data() {
    return {
      episodeInfo: [],
      charactersURL: [],
      charactersInfo: [],
    };
  },
  methods: {
    url: (string) => {
      return new URL(string);
    },
    getCharacter: async (url) => {
      const response = await fetch(url);
      const res = await response.json();
      return res;
    },
  },
  created() {
    getEpisode().then((result) => {
      this.episodeInfo = result;
      this.charactersURL = result.characters;
      for (let i = 0; i < this.charactersURL.length; i++) {
        this.getCharacter(this.charactersURL[i]).then((res) => {
          this.charactersInfo.push(res);
        });
      }
    });
  },
  computed: {
    filteredCharacters: function () {
      return [...this.charactersInfo].sort((a, b) => a.id - b.id);
    },
  },
};
</script>
<style>
.characters {
  display: flex;
  flex-wrap: wrap;
}
.characterItem {
  width: 150px;
}
</style>
