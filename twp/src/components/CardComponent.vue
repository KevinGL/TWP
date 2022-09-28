<template>
    <div class="card border-secondary mb-3" style="max-width: 20rem;">
        <router-link :to="{name: 'show', params: {id: this.id, idCat: this.idCat}}" >
            <div class="card-header cardData" v-html="title"></div>
            <div class="card-body">
                <p class="card-text cardData" v-html="content"></p>
            </div>
        </router-link>
        <div class="delEdit">
            <button v-on:click="this.linkDelete()"><img src="../assets/trash.svg" alt="Supprimer" style="height: 20px; width: auto;"></button>
            <button v-on:click="this.linkEdit()"><img src="../assets/pencil-square.svg" alt="Editer" style="height: 20px; width: auto;"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",

    props: ['id', 'title', 'content', 'idCat'],

    methods: {
        linkDelete()
        {
            //console.log("OK");

            this.$router.push({ name: 'deleteCard', params: { id: this.id }});
        },

        linkEdit()
        {
            this.$router.push({ name: 'edit', params: { id: this.id, idCat: this.idCat }});
        }
    }
}
</script>

<style>
    @import "https://bootswatch.com/5/journal/bootstrap.css";

    .delEdit
    {
        display: flex;
        justify-content: space-around;
    }

    .delEdit button
    {
        border: none;
        background-color: white;
    }

    .cardData
    {
        overflow-x: visible;
        overflow-y: scroll;
        max-height: 100px;
    }

</style>