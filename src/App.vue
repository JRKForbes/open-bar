<template>
  <img id="logo" alt="Bar Tab" src="./assets/logo.jpg">
  <HomePage />
</template>

<script>
import HomePage        from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #logo {
    width:25%;
  }

  .drinkList {
    border-collapse: collapse;
    margin: 10px auto;
    width: 65%;
  }

  .drinkList td, .drinkList th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: right;
  }

  .drinkList td:first-child {
    text-align: center;
  }

  .drinkList tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .drinkList tr:hover {
    background-color: #ddd;
  }

  .drinkList th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04aa6d;
    color: white;
  }

  .drinkList .totalRow td {
    border-top: 2px solid #000;
  }
</style>
