<template>
    <div id="cardDetail">
        <div class="card border-primary mb-3" style="max-width: 60rem;">
            <div class="card-header">Carte</div>
            <div class="card-body">
                <h4 class="card-title cardData" v-html="this.title"></h4>
                <p class="card-text" v-html="this.content"></p>
            </div>
        </div>

        <br>

        <div v-for="comment in this.comments" :key="comment.id">
            <div id="comment">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1" v-html="comment.author"></h5>
                    <small class="text-muted" v-html="comment.date"></small>
                </div>
                <p class="mb-1" v-html="comment.content"></p>
            </div>
        </div>

        <br>
        
        <div>
            <fieldset>
                <legend>Ajouter des commentaires</legend>

                <div class="form-group">
                    <label class="form-label mt-4">De la part de :</label>
                    <input type="text" class="form-control" placeholder="Super auteur" v-model="this.newAuthor">
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Votre adresse mail :</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Votre adresse mail" v-model="this.newEmail">
                </div>

                <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">Votre contenu</label>
                    <textarea class="form-control" id="exampleTextarea" rows="3" v-model="this.newContent"></textarea>
                </div>

                <br>
                
                <button type="submit" class="btn btn-primary" v-on:click="this.submit()">Valider</button>
            </fieldset>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default{

        data: function(){
            return {
                title: "",
                content: "",
                comments: [],
                newAuthor: "",
                newContent: "",
                newEmail: ""
            }
        },

        methods: {
            getCard()
            {
                let request = "https://twp.oxy-development.fr/wp-json/wp/v2/posts/" + this.$route.params.id;
                //console.log(category);

                axios
                    .get(request)
                    .then((response) => {
                    //console.log(response.data);
                    //this.cards = response.data;
                    this.title = response.data.title.rendered;
                    this.content = response.data.content.rendered;
                });
            },

            getComments()
            {
                this.comments = [];
                
                let request = "https://twp.oxy-development.fr/wp-json/wp/v2/comments";

                axios
                    .get(request)
                    .then((response) => {
                        //console.log(response.data);

                        for(let comment of response.data)
                        {
                            //console.log(comment);
                            if(comment.post == this.$route.params.id)
                            {
                                this.comments.push({
                                    author: comment.author_name,
                                    content: comment.content.rendered,
                                    date: comment.date,
                                });

                                console.log(comment);
                            }
                        }

                        //console.log(this.comments);
                });
            },

            submit()
            {
                let request = "https://twp.oxy-development.fr/wp-json/wp/v2/comments";
                //console.log(category);

                const headers = { 
                    'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM='
                };

                axios.post(request,
                {
                    author_name: this.newAuthor,
                    author_url: "https://twp.oxy-development.fr",
                    author_email: this.newEmail,
                    content: this.newContent,
                    post: this.$route.params.id,
                    status: "approved",
                },
                {headers}).then(() => {
                    //console.log(response);

                    this.getComments();

                    //this.$router.push({ name: 'edit', params: { id: this.$route.params.post_id }});
                });
            }
        },

        mounted(){
            this.getCard();
            this.getComments();
        }
    }
</script>

<style>
    #cardDetail
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #comment
    {
        width: 500px;
        border: solid 1px;
        border-radius: 5px;
        border-color: rgb(235, 104, 100);
        margin-bottom: 10px;
        padding: 5px;
    }
</style>