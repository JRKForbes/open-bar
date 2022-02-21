<template>
  <div class="order">
    <table class="drinkList">
      <tr>
        <th>Beer</th>
        <th>Price</th>
        <th v-show="ordering">Quantity</th>
      </tr>
      <tr v-for="drink in drinkList" :key="drink.type">
        <td>{{drink.type}}</td>
        <td>DKK {{formatNumber(drink.price)}}</td>
        <td v-show="ordering"><input type="number" v-model="drink.amount" :key="drink.type" /></td>
      </tr>
    </table>
    <button class="submitOrder" v-show="ordering" @click="submitOrder">Submit</button>
  </div>
</template>

<script>
export default {
  name: "OrderForm",
  data() {
    return {
      drinkOrder: []
    }
  },
  props: {
    drinkList: Array,
    ordering: Boolean
  },
  methods: {
    formatNumber (price) {
      return parseFloat(price).toFixed(2);
    },
    submitOrder () {
      this.$emit('interface', this.drinkList);
    }
  }
}
</script>

<style scoped>

</style>