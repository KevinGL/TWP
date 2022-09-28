<template>
    <div>
        <div class="alert alert-dismissible alert-danger">
            Voulez-vous supprimer cette liste ?<br>
            <button type="button" class="btn btn-outline-danger" style="margin-right: 10px" v-on:click="this.delete()">Oui</button>
            <button type="button" class="btn btn-outline-info" style="margin-left: 10px" v-on:click="this.redirect()">Non</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    methods:
    {
        delete()
        {
            let request = 'https://twp.oxy-development.fr/wp-json/wp/v2/categories/' + this.$route.params.id + '?force=true';
            
            const headers = { 
                'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM='
            };

            axios.delete(request, { headers }).then(()=> {
               this.$router.push("/home");
            });
        },

        redirect()
        {
            this.$router.push("/home");
        }
    }
}
</script>

<style>

</style>