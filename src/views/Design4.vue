<template>
   <v-app id="inspire">
    <v-content>
    <v-card
      width="90%"
      class="mx-auto my-6"
    >
      <v-list subheader>
        <v-subheader><b>Shopping Cart</b></v-subheader>
        <div align="right" style="padding-right: 15%">Portions</div>

        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content align="left">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-title v-text="item.price"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon class="align-right">
            <v-icon>mdi-chevron-up</v-icon>
            <v-list-item-title><b>1</b></v-list-item-title>
            <v-icon>mdi-chevron-down</v-icon>
          </v-list-item-icon>

          <v-list-item-icon>
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content class="align-center">
            <v-list-item-title>Approx total:</v-list-item-title>
          </v-list-item-content>
           <v-list-item-content class="align-right">
            <v-list-item-title><b>7.5-9.5€</b></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-btn
          block
          class="white--text"
          color="#43A047"
          max-width="400px"
          link to="/design3"
        >
          Next
        </v-btn>
      </v-card-actions>
    </v-card>

    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Design4',
  props: {
    source: String,
  },

  data() {
    return {
      items: [
        { title: 'Pizza-1', avatar: 'https://idealblockonline.com/wp-content/uploads/2019/10/easy-pepperoni-pizza-lead-4.jpg', price: '~2.50€' },
        { title: 'Pizza-2', avatar: 'https://idealblockonline.com/wp-content/uploads/2019/10/easy-pepperoni-pizza-lead-4.jpg', price: '~2.90€' },
        { title: 'Burger-1', avatar: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2-600x900.jpg', price: '~1.50€' },
        { title: 'Rosols-1', avatar: 'https://g3.delphi.lv/images/pix/676x385/2x76rX9UaiA/olivje-salati-rasols-rosols-skivis-vakarinas-45293758.jpg', price: '~1.20€' },
      ],
    };
  },

  methods: {
  },
};
</script>

<style scoped>

</style>
