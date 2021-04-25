<template>
  <div class="navbar">
    <div class="navbar__list">
      <p class="navbar__logo"><b>Stock Trader</b></p>
      <p>Portfolio</p>
      <p>Stocks</p>
    </div>
    <div class="navbar__list">
      <p>End day</p>
      <p>Save & Load</p>
      <p>
        <b>Funds: {{ this.$store.state.portfolio.funds }} $</b>
      </p>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.navbar {
  background-color: red;
  padding: $spacing-unit / 2;
  margin-top: $spacing-unit * 2;
  background-color: rgba(241, 238, 238, 0.555);
  border: 1px solid rgba(173, 173, 173, 0.507);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: $font-size-regular;
}
.navbar__list {
  display: flex;
}
.navbar__logo {
  font-size: $font-size-regular2;
}
p {
  margin: $spacing-unit;
  align-self: center;
  color: rgb(83, 83, 83);
  cursor: pointer;
}
</style>
