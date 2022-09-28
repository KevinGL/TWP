<template>
    <div class="container">
        <div>
            <fieldset>
                <legend>Nouvelle carte</legend>

                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Titre</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Entrez le titre de la carte" v-model="this.title" />
                </div>

                <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">Contenu</label>
                    <textarea class="form-control" id="exampleTextarea" rows="3" v-model="this.content"></textarea>
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
            title: "Votre titre ici",
            content: "Votre contenu ici"
        }
    },

    methods: {
        submit()
        {
            //console.log(this.$route.params.idCat);

            const headers = { 
                'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM='
            };
            
            axios.post('https://twp.oxy-development.fr/wp-json/wp/v2/posts',
                {title: this.title,
                status: "publish",
                //slug: "Title",
                categories : this.$route.params.idCat,
                comment_status: "open",
                content: this.content,
                excerpt: "Content"}, { headers })
                .then(() => {
                    this.$router.push("/home");
            });
        }
    }
}
</script>

<style>

</style>