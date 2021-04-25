<template>
  <div class="navbar">
    <div class="navbar__list">
      <router-link to="/" class="navbar__logo"><b>Stock Trader</b></router-link>
      <p class="navbar__value">Portfolio</p>
      <router-link to="/stocks" class="navbar__value">Stocks</router-link>
    </div>
    <div class="navbar__list">
      <p class="navbar__value">End day</p>
      <p class="navbar__value">Save & Load</p>
      <p class="navbar__value">
        <b>Funds: ${{ this.$store.state.portfolio.funds }}</b>
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
  margin: $spacing-unit;
  align-self: center;
  color: rgb(83, 83, 83);
  cursor: pointer;
  text-decoration: none;
}
.navbar__value {
  margin: $spacing-unit;
  align-self: center;
  color: rgb(83, 83, 83);
  cursor: pointer;
  text-decoration: none;
}
</style>
