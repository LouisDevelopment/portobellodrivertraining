<template>
  <Header @darkMode="setDark"/>
  <router-view :darkMode="dark"/>
</template>

<script>

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      dark: false
    }
  },
  methods: {
    setDark: function(dark){
      this.dark = dark
    }
  }
}
</script>

<style scoped>
</style>
