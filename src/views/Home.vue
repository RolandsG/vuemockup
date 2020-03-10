<template>
  <v-content>
    <v-container grid-list-lg>
      <div
        class="font-weight-black align-left display-1"
      >Recommendations</div>
      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel height="300" hide-delimiters='true' continuous='true'>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <div
                class="headline"
                style="color: white; font-weight: bold; margin-top: 20pt; margin-right: 140pt;"
              >Tomato Soup</div>
              <div
                class="v-size--x-large"
                style="color: white; font-weight: bold; margin-right: 140pt;"
              >4 portions - €4.39</div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <div
        class="font-weight-black align-left display-1"
      >Templates</div>
      <v-layout row wrap>
        <v-flex xs4 sm4 md4>
          <v-card height="100%">
            <v-img src="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2-600x900.jpg" height="200px">
            </v-img>
              <v-card-title primary-title>
                <div class="align-center">Burger</div>
              </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs4 sm4 md4>
            <v-card height="100%" link to="/design5">
                <v-img src="https://idealblockonline.com/wp-content/uploads/2019/10/easy-pepperoni-pizza-lead-4.jpg" height="200px">
                </v-img>
                <v-card-title primary-title>
                    Pizza
                </v-card-title>
            </v-card>
        </v-flex>

        <v-flex xs4 sm4 md4>
            <v-card height="100%">
                <v-img src="https://g3.delphi.lv/images/pix/676x385/2x76rX9UaiA/olivje-salati-rasols-rosols-skivis-vakarinas-45293758.jpg" height="200px">
                </v-img>
                <v-card-title primary-title>
                  Rosols
                </v-card-title>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
const host = 'http://127.0.0.1:8000';
export default {
  name: 'Design1',
  props: {
    source: String,
  },

  data() {
    return {
      items: [
        {
          src: 'https://www.thugkitchen.com/sites/default/files/styles/recipe_xl/public/recipes/Roasted%20Tomato%20Soup%20-%20Edited.jpg',
          label: 'food 1',
        },
        {
          src: 'https://images.media-allrecipes.com/userphotos/600x600/3850368.jpg',
          label: 'food 2',
        },
        {
          src: 'https://images.media-allrecipes.com/userphotos/560x315/7649330.jpg',
          label: 'food 3',
        },
        {
          src: 'https://images.media-allrecipes.com/userphotos/600x600/3850368.jpg',
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
