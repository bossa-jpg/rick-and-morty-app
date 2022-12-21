<template>
  <div>
    <h1>{{ locationInfo.name }}</h1>
    <p>
      {{ locationInfo.type }},
      {{
        locationInfo.dimension === "unknown"
          ? "Unknown dimension"
          : locationInfo.dimension
      }}
    </p>
    <div className="characters">
      <ul
        className="characterItem"
        v-for="item in filteredCharacters"
        :key="item"
      >
        <RouterLink :to="'/rick-and-morty-app' + url(item.url).pathname">
          <img width="110" :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>
<script>
const getLocation = () => {
  return fetch(
    // Добавила slice(19) чтобы вырезать /rick-and-morty-app - нужен для работы github-pages
    "https://rickandmortyapi.com" + window.location.pathname.slice(19)
  ).then((response) => {
    return response.json();
  });
};
export default {
  name: "LocationView",
  data() {
    return {
      locationInfo: [],
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
    getLocation().then((result) => {
      this.locationInfo = result;
      this.charactersURL = result.residents;
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
