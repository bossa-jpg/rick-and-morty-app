<template>
  <div>
    <h1>{{ characterInfo.name }}</h1>
    <img :src="characterInfo.image" :alt="characterInfo.name">
    <h3 className="info">{{ characterInfo.species + ', ' 
    + characterInfo.gender + ', ' 
    + characterInfo .status 
    + ' from '}}<RouterLink className="link" :to="url(characterInfo.origin.url).pathname">{{ characterInfo.origin.name }}</RouterLink></h3>
    <div className="info">
       <ul v-for="item in filteredEpisodes" :key="item">
        <RouterLink :to="url(item.url).pathname" >
               <h3>{{ item.name }}</h3>
               <p>{{ item.episode }}</p>
            </RouterLink>
      </ul>
    </div>
  </div>
</template>
<script>
const getCharacter = async () => {
  return await fetch(
    "https://rickandmortyapi.com" + window.location.pathname
  ).then((response) => {
    return response.json();
  });
};

export default {
  name: "CharacterView",
  data() {
    return {
      characterInfo: [],
      episodesURL: [],
      episodesInfo: []
    };
  },
  methods: {
      url: (string) => {
          return new URL(string)
      },
      getEpisode: async (url) => {
        const response = await fetch(url);
        const res = await response.json();
        return res;
      }
  },
  created() {
    getCharacter().then((result) => {
      this.characterInfo = result;
      this.episodesURL = result.episode
      for (let i = 0; i < this.episodesURL.length; i++){
              this.getEpisode(this.episodesURL[i]).then(
              res => {
                  this.episodesInfo.push(res)
                  })
              }
    });
  },
  computed: {
        filteredEpisodes: function() {
            return [...this.episodesInfo]
            .sort((a,b) => a.id - b.id);
        }
    }
};
</script>
<style>
.info {
    text-align: left;
    margin: 30px 10vw
}
.link {
    color: rgb(58, 157, 124);
}
</style>
