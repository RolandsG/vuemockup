<template>
   <v-app id="inspire">
    <v-content>
      <v-img
          class="white--text align-end"
          height="20%"
          src="https://i.imgur.com/Av49Kg3.jpg"
      >
      </v-img>
    <h1>{{ template.title }}</h1>
    <v-card
      class="mx-auto my-6"
      max-width="90%"
    >
      <v-card-title>
        <h2 class="display-1">Ingredients</h2>
        <v-spacer></v-spacer>
        <span class="title">Around 5 EUR</span>
      </v-card-title>

      <v-card-text>
        {{ template.description }}
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
          <h3 class="text-left mt-6"> {{ template.Sections[0].title }}</h3>
          <v-chip-group
            active-class="green--text text--accent-4"
            multiple
            column
            v-model="selected1"
          >
            <v-chip
            v-for="ingredient in template.Sections[0].Ingredients"
            v-bind:key="ingredient.id"
            >
              {{ ingredient.ingredient }}
            </v-chip>

          </v-chip-group>

          <h3 class="text-left mt-6"> {{ template.Sections[1].title }}</h3>
          <v-chip-group
            active-class="green--text text--accent-4"
            multiple
            column
            v-model="selected2"
          >
            <v-chip
            v-for="ingredient in template.Sections[1].Ingredients"
            v-bind:key="ingredient.id"
            >
              {{ ingredient.ingredient }}
            </v-chip>

          </v-chip-group>

          <h3 class="text-left mt-6"> {{ template.Sections[2].title }}</h3>
          <v-chip-group
            active-class="green--text text--accent-4"
            multiple
            column
            v-model="selected3"
          >
            <v-chip
            v-for="ingredient in template.Sections[2].Ingredients"
            v-bind:key="ingredient.id"
            >
              {{ ingredient.ingredient }}
            </v-chip>

          </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
          block
          class="white--text"
          color="#43A047"
          max-width="400px"
          link to="/cart"
        >
          Add to Cart
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-content>
  </v-app>
</template>

<script>
const host = 'http://127.0.0.1:8000';
export default {
  name: 'Design5',
  props: {
    source: String,
  },

  data() {
    return {
      drawer: null,
      template: [],
      selected1: [],
      selected2: [],
      selected3: [],
    };
  },

  async created() {
    await this.fetchTemplate();
  },

  methods: {
    fetchTemplate(url = `${host}/api/templates/1/`) {
      this.$http
        .get(url)
        .then((response) => {
          this.template = response.data;
        });
    },
  },
};
</script>

<style scoped>

</style>
