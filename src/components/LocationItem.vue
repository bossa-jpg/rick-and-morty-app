<template>
  <div className="location-info">
    <RouterLink :to="'/api/location/' + item.id"
      ><h3>{{ item.name }}</h3></RouterLink
    >
    <p>
      {{ item.type }}<br />
      {{ item.dimension }}
    </p>
  </div>
</template>
<script>
export default {
  name: "LocationItem",
  props: {
    item: {
      id: Number,
      name: String,
      type: String,
      dimension: String,
      residents: Array,
      url: String,
      created: String,
    },
  },
};
</script>
<style>
.location-info {
  border-bottom: 2px solid rgb(58, 157, 124);
  margin: 0 5vw;
  padding: 5px 5vw;
  text-align: start;
}
</style>
