<template>
  <v-content>
    <v-card max-width="100%" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">________________________________________________________</div>
          <v-list-item-title class="mb-1">Mushroom Recipe</v-list-item-title>
          <v-list-item-subtitle>Mushroom dish with sour cream and lettuce</v-list-item-subtitle>
        </v-list-item-content>

      <v-avatar>
        <img
          src="https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg"
          alt="Mushroom"
        >
      </v-avatar>
      </v-list-item>

      <v-card-actions class="justify-center">
        <v-btn text color="green" >Add to Cart</v-btn>
      </v-card-actions>
          <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">________________________________________________________</div>
          <v-list-item-title class="mb-1"> Vegan burger</v-list-item-title>
          <v-list-item-subtitle>New kind of burger from seaweed</v-list-item-subtitle>
        </v-list-item-content>

      <v-avatar>
        <img
          src="https://images.media-allrecipes.com/userphotos/600x600/3850368.jpg"
          alt="Mushroom"
        >
      </v-avatar>
      </v-list-item>
      <v-card-actions class="justify-center">
        <v-btn text color="green" >Add to Cart</v-btn>
      </v-card-actions>
          <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">________________________________________________________</div>
          <v-list-item-title class="mb-1">Cheese pizza</v-list-item-title>
          <v-list-item-subtitle>Cheese pizza with definitely not pineapples</v-list-item-subtitle>
        </v-list-item-content>

      <v-avatar>
        <img
          src="https://images.media-allrecipes.com/userphotos/600x600/3850368.jpg"
          alt="Mushroom"
        >
      </v-avatar>
      </v-list-item>

      <v-card-actions class="justify-center">
        <v-btn text color="green" >Add to Cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>

<script>
const host = 'http://127.0.0.1:8000';
export default {
  name: 'Design2',
  props: {
    source: String,
  },

  data() {
    return {
      items: [
        {
          src: 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg',
        },
        {
          src: 'https://images.media-allrecipes.com/userphotos/600x600/3850368.jpg',
        },
        {
          src: 'https://images.media-allrecipes.com/userphotos/560x315/7649330.jpg',
        },
        {
          src: 'https://images.media-allrecipes.com/userphotos/600x600/3850368.jpg',
        },
      ],
    };
  },

  async created() {
    await this.fetchTemplate();
  },

  methods: {
    async fetchTemplate(url = `${host}/api/templates/1/`) {
      const response = await fetch(url);
      const results = await response.json();
      this.template = results;
    },
  },
};
</script>

<style scoped>

</style>
