<template>
    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label mt-4">Choisir un nom pour cette liste</label>
        <input type="text" class="form-control" aria-describedby="emailHelp" v-model="this.name">
        <br>
        <button type="submit" class="btn btn-primary" v-on:click="setList()">Valider</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        data: function(){
            return {
                name: ""
            }
        },

        methods:
        {
            getList()
            {
                let request = "https://twp.oxy-development.fr/wp-json/wp/v2/categories/" + this.$route.params.id;

                axios
                    .get(request)
                    .then((response) => {
                    //console.log(response.data.name);
                    //this.cards = response.data;
                    this.name = response.data.name;
                });
            },

            setList()
            {
                //console.log("OK");

                const headers = { 
                    'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM='
                };

                axios.post('https://twp.oxy-development.fr/wp-json/wp/v2/categories/' + this.$route.params.id,
                {
                    name: this.name,
                    status: "publish",
                    excerpt: "Content"
                }, { headers })
                .then(() => {
                    this.$router.push("/home");
                    });
            }
        },

        mounted() {
            this.getList();
        }
    }
</script>

<style>

</style>