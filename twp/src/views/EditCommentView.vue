<template>
    <div>
        <fieldset>
            <legend>Commentaire n° {{ this.$route.params.id }}</legend>

            <div class="form-group">
                <label for="exampleTextarea" class="form-label mt-4">Contenu</label>
                <textarea class="form-control" id="exampleTextarea" rows="3" v-model="this.content" v-html="this.content"></textarea>
            </div>

            <br>
            
            <button type="submit" class="btn btn-primary" v-on:click="update()">Valider</button>
        </fieldset>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default
    {
        data: function()
        {
            return {
                content: "",
            }
        },

        methods:
        {
            getComment()
            {
                let request = "https://twp.oxy-development.fr/wp-json/wp/v2/comments/" + this.$route.params.id;
                //console.log(category);

                axios
                .get(request)
                .then((response) => {
                    this.content = response.data.content.rendered;
                });
            },

            update()
            {
                //console.log("OK");

                let request = "https://twp.oxy-development.fr/wp-json/wp/v2/comments/" + this.$route.params.id;
                //console.log(category);

                const headers = { 
                    'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM='
                };

                axios.post(request,
                {
                    content: this.content,
                },
                {headers}).then(() => {
                    //console.log(response);

                    this.$router.push({ name: 'edit', params: { id: this.$route.params.post_id }});
                });
            }
        },

        mounted()
        {
            this.getComment();
        }
    }
</script>
