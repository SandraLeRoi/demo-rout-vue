<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
     <!-- <router-link to="/about">About</router-link> |
      <router-link to="/contacts">Contacts</router-link>|
      <router-link to="/product/1">Produit1</router-link>|
      <router-link to="/product/42">Univers</router-link>|
      <router-link :to="{name: 'product', params: {id: 5}}">New</router-link> -->
    </div>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      routeName: 'About',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  color: #a342b9;
}
</style>
