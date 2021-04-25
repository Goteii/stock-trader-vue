<template>
  <div class="home">
    <h1 class="home__headline">Trade or View your Portfolio</h1>
    <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <hr class="home__breakline" />
    <h2 class="home__smallHeader">
      Your funds: {{ this.$store.state.portfolio.funds }} $
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.home {
  margin-top: 2.5%;
  padding: $spacing-unit * 2;
  border: 1px solid black;
  border-radius: 5px;
}
.home__headline {
  padding-top: $spacing-unit;
}
.home__breakline {
  border-top: 1px solid rgba(128, 128, 128, 0.5);
}
p {
  padding-top: $spacing-unit / 2;
  padding-bottom: $spacing-unit;
}
.home__smallHeader {
  padding: $spacing-unit 0;
}
</style>
