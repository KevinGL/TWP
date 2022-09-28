<template>
    <div class="list-group">
        <h3>{{ name }}</h3>
        <div class="delEdit">
            <router-link :to="{name: 'deleteList', params: {id: this.id}}"><img src="../assets/trash.svg" alt="Supprimer" style="height: 20px; width: auto;"></router-link>
            <router-link :to="{name: 'editList', params: {id: this.id}}"><img src="../assets/pencil-square.svg" alt="Editer" style="height: 20px; width: auto;"></router-link>
        </div>
        <div v-for="card in cards" :key="card.id">
            <div class="list-group-item list-group-item-action active">
                <CardComponent :id="card.id" :title="card.title.rendered" :content="card.content.rendered" :idCat="this.id" />
            </div>
        </div>
        <br>
        <ButtonNewCardComponent :idCat="this.id" />
    </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue"
import ButtonNewCardComponent from "../components/ButtonNewCardComponent.vue"
import axios from 'axios'

export default {
    name: "ListComponent",

    components:{
        CardComponent,
        ButtonNewCardComponent
    },

    props: ['id', 'name'],

    data: function()
    {
        return {
            cards: []
        }
    },

    methods: {
        getPosts()
        {
            let request = "https://twp.oxy-development.fr/wp-json/wp/v2/posts?categories=" + this.id;
            //console.log(category);

            axios
                .get(request)
                .then((response) => {
                //console.log(response.data);
                this.cards = response.data;
            });
        }
    },

    mounted() {
        this.getPosts()
  }
}
</script>

<style>
    @import "https://bootswatch.com/5/journal/bootstrap.css";
</style>