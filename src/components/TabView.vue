<template>
  <div class="drinks">
    <table class="drinkList">
      <tr>
        <th>Beer</th>
        <th>Unit Price</th>
        <th>Quantity</th>
        <th>Sub Total</th>
      </tr>
      <tr v-for="drink in bill.drinks" :key="drink.type">
        <td>{{drink.type}}</td>
        <td>DKK {{formatNumber(drink.price)}}</td>
        <td>{{drink.quantity}}</td>
        <td>DKK {{formatNumber(drink.subTotal)}}</td>
      </tr>
      <tr class="totalRow">
        <td colspan="3">Total</td>
        <td>DKK {{formatNumber(bill.total)}}</td>
      </tr>
      <tr>
        <td colspan="3">Split Total</td>
        <td>DKK {{formatNumber(bill.total / split)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabView",
  props: {
    bill: Object,
    split: Number
  },
  methods: {
    formatNumber (price) {
      return parseFloat(price).toFixed(2);
    } 
  }
}
</script>

<style scoped>
</style>
