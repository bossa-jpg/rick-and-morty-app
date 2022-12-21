<template>
  <nav>
    <RouterLink to="/rick-and-morty-app/">Home</RouterLink>
    <RouterLink to="/rick-and-morty-app/episodes">Episodes</RouterLink>
    <RouterLink to="/rick-and-morty-app/characters">Characters</RouterLink>
    <RouterLink to="/rick-and-morty-app/locations">Locations</RouterLink>
  </nav>
</template>
<script>
export default {
  name: "AppNavbar",
};
</script>
<style scoped>
nav {
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  padding: 10px 0px;
}

nav a {
  margin-right: 6px;
}

nav a.router-link-exact-active {
  font-size: 14pt;
  color: rgb(58, 157, 124);
}
</style>
