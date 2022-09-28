<template>
  <div>
    <ButtonNewListComponent />
    <br>
    <div id="Lists">
      <div v-for = "list in lists" :key="list.id">
        <ListComponent :name="list.name" :id="list.id" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ListComponent from '@/components/ListComponent.vue'
import ButtonNewListComponent from "../components/ButtonNewListComponent.vue"
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
    ListComponent,
    ButtonNewListComponent
  },

  data: function()
  {
    return {
      lists: []
    }
  },

  methods: {
    getLists()
    {
      let request = "https://twp.oxy-development.fr/wp-json/wp/v2/categories";

      axios
      .get(request)
      .then((response) => {
        this.lists = response.data;
      });
    }
  },

  mounted() {
    this.getLists()
  }
}
</script>

<style>
  #Lists
  {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>