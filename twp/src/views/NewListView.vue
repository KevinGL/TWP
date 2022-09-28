<template>
    <div class="container">
        <div>
            <fieldset>
                <legend>Nouvelle liste</legend>

                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Nom de la liste</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Entrez le nom de la liste" v-model="this.name" />
                </div>

                <br>
                
                <button class="btn btn-primary" v-on:click="this.submit()">Valider</button>
            </fieldset>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            name: ""
        }
    },

    methods: {
        submit()
        {
            //console.log(this.name);

            const headers = { 
                'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM='
            };
            
            axios.post('https://twp.oxy-development.fr/wp-json/wp/v2/categories', {name: this.name}, { headers })
            .then(() => {
                this.$router.push("/home");
            });
        }
    }
}
</script>

<style>

</style>