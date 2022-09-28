<template>
    <div>
        <button type="button" class="btn btn-outline-primary" v-on:click="this.newList()">Nouvelle liste</button>
    </div>
</template>

<script>
//import axios from 'axios'

export default {
    name: "ButtonNewListComponent",

    methods: {
        /*createList()
        {
            const headers = { 
                'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM='
            };
            
            axios.post('https://twp.oxy-development.fr/wp-json/wp/v2/categories', {name: "Salut"}, { headers })
            .then(function() {
                console.log("OK");
            });
        }*/

        newList()
        {
            this.$router.push("/newList");
        }
    }
}
</script>

<style>

</style>