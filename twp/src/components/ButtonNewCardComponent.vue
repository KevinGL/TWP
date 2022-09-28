<template>
    <div>
        <button type="button" class="btn btn-outline-primary" v-on:click="this.redirection()">Nouvelle carte</button>
    </div>
</template>

<script>

export default {
    props: ['idCat'],

    methods: {
        redirection()
        {
            this.$router.push({ name: 'newCard', params: { idCat: this.idCat }});
        }
    }
}
</script>

<style>

</style>