<template>
  <div class="home">
    <label>Bill Split</label>: <input type="number" v-model="billSplit" min="1" />
    <OrderForm :drinkList="order" :ordering="ordering" @interface="saveRound" />
    <button class="orderButton" v-show="!ordering" @click="addRound">New Order</button>
    <button class="tabButton" @click="tabAction">{{tabMsg}}</button>
    <TabView v-show="tabShowing" :bill="bill" :split="billSplit" />
    </div>
</template>

<script>
import OrderForm    from '@/components/OrderForm.vue';
import TabView      from '@/components/TabView.vue';

export default {
  name: "HomePage",
  components: {
    OrderForm,
    TabView
  },
  mounted() {
    this.fetchDrinks()
  },
  data() {
    return {
      ordering: false,
      tabMsg: "View Tab",
      tabShowing: false,
      order: [],
      drinks: [],
      billSplit: 1,
      bill: {
        drinks: [

        ],
        total: 0    
      }
    }
  },
  methods: {
    addRound() {
      this.ordering = true;
    },
    async saveRound(drinks) {
      this.ordering = false;
      this.order = this.drinks;
      await this.$store.dispatch("addRound", drinks);
    },
    async tabAction() {
      this.bill = await this.$store.dispatch("fetchTab");
      
      this.tabShowing = true;
      this.tabMsg = "Refresh Tab";
    },
    async fetchDrinks() {
      this.drinks = await this.$store.dispatch("fetchDrinks");
      this.order = this.drinks;
    },
  }
}
</script>
