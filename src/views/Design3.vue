<template>
  <v-content>
    <v-container grid-list-lg>
      <div class="font-weight-black align-left display-1">Checkout</div>
        <v-card>
        <div class="font-weight-bold headline">Cheese</div>
        <v-layout row wrap>
          <v-flex xs12>
            <v-carousel height="75" hide-delimiters='true' continuous='true'>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <div class="font-weight-bold headline">Milk</div>
        <v-layout row wrap>
          <v-flex xs12>
            <v-carousel height="75" hide-delimiters='true' continuous='true'>
              <v-carousel-item
                v-for="(item,i) in items.slice(1)"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <div class="font-weight-bold headline">Onion</div>
        <v-layout row wrap>
          <v-flex xs12>
            <v-carousel height="75" hide-delimiters='true' continuous='true'>
              <v-carousel-item
                v-for="(item,i) in items.slice(2)"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <div class="font-weight-bold headline">Chocolate</div>
        <v-layout row wrap>
          <v-flex xs12>
            <v-carousel height="75" hide-delimiters='true' continuous='true'>
              <v-carousel-item

                row wrap
                v-for="(item,i) in items.slice(3)"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content class="align-center">
              <v-list-item-title>Total:</v-list-item-title>
            </v-list-item-content>
             <v-list-item-content class="align-right">
              <v-list-item-title><b>8.29€</b></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        <v-card-actions>
          <v-btn
            block
            class="white--text"
            color="#43A047"
            max-width="400px"
          >
            Go to store
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
const host = 'http://127.0.0.1:8000';
export default {
  name: 'Design3',
  props: {
    source: String,
  },

  data() {
    return {
      items: [
        {
          src: 'https://s3.eu-north-1.amazonaws.com/broccoli.lv/cheese.png',
          label: 'food 1',
        },
        {
          src: 'https://s3.eu-north-1.amazonaws.com/broccoli.lv/milk.png',
          label: 'food 2',
        },
        {
          src: 'https://s3.eu-north-1.amazonaws.com/broccoli.lv/onion.png',
          label: 'food 3',
        },
        {
          src: 'https://s3.eu-north-1.amazonaws.com/broccoli.lv/chocolate.png',
          label: 'food 4',
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
