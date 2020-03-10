<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link to="/design1">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Discover</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/design2">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Design2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/design1">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Design3</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#388E3C"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Broccoli</v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="isLoggedIn">
      <v-btn color="#66BB6A" @click="logout">Logout</v-btn>
      </span>
      <span v-else>
      <v-btn color="#66BB6A" link to="/login">SIGN IN</v-btn>
      <v-btn color="#66BB6A" link to="/register">JOIN</v-btn>
      </span>
    </v-app-bar>
    <router-view/>
    <v-bottom-navigation
      v-model="bottomNav"
      app
    >
      <v-btn value="recent" link to="/design1">
        <span>Discover</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn value="favorites" link to="/design6">
        <span>Analytics</span>
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>

      <v-btn value="saved-meals" link to="/design2">
        <span>Saved Meals</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="design4" link to="/design4">
        <span>Cart</span>
        <v-badge
        content="4"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>


<script>
/* eslint no-underscore-dangle: 0 */
export default {
  created() {
    this.$http.interceptors.response.use(undefined, err => new Promise(function () {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch('logout');
      }
      throw err;
    }));
  },
  data() {
    return {
      drawer: 0,
      bottomNav: 'recent',
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login');
        });
    },
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
