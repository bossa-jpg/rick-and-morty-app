<template>
    <div className="character">
        <img width="110" :src="item.image" :alt="item.name">
        <div className="character-info">
            <RouterLink :to="'/character/' + item.id"><h3>{{ item.name }}</h3></RouterLink>
            <p>{{ item.status }}<br />{{ item.species }}</p>
        </div>
    </div>
</template>
<script>

export default {
    name: "CharacterItem",
    props: {
        item: {
            id: Number,
            name: String,
            status: String,
            species: String,
            type: String,
            gender: String,
            origin: {
                name: String,
                url: String,
            },
            location: {
                name: String,
                url: String,
            },
            image: String,
            episode: Array,
            url: String,
            created: String
        }
    }
}
</script>
<style>
.character {
    display: flex;
    margin: 0 5vw;
    padding: 10px 5vw;
    border-bottom: 2px solid rgb(58, 157, 124);
}
.character-info {
    margin-left: 20px;
    text-align: start;
    justify-content: start;
}
</style>
