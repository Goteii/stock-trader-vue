<template>
  <div class="stocks__container">
    <Stock
      v-for="stock in stocks"
      :key="stock.id"
      :name="stock.name"
      :price="stock.price"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Stock from "../components/Stock.vue";
import { StockI } from "../models/models";
@Component({
  components: {
    Stock,
  },
})
export default class Stocks extends Vue {
  @Getter("stocks/getStocks") stocks!: StockI[];
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.stocks__container {
  display: flex;
  margin-top: 2.5%;
  padding: 0 $spacing-unit;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
