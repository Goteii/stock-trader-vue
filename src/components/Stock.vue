<template>
  <div class="stock__container">
    <div class="stock__header">
      <p class="stock__headerText">
        <b>{{ name }}</b>
      </p>
      <p class="stock__text">(Price: {{ price }})</p>
    </div>
    <div class="stock__body">
      <input type="text" class="stock__input" placeholder="Quantity" />
      <button class="stock__button"><b>Buy</b></button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class Stock extends Vue {
  @Prop({ required: true, type: String }) name!: string;
  @Prop({ required: true, type: Number }) price!: number;
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.stock__container {
  width: 45%;
  border-radius: 5px;
  border: 1px solid rgb(146, 211, 146);
  margin: $spacing-unit * 2 0;
}
.stock__header {
  display: flex;
  padding: $spacing-unit;
  border-bottom: 1px solid rgb(146, 211, 146);
  background-color: rgba(158, 209, 158, 0.562);
  color: rgb(3, 88, 3);
}
.stock_headerText {
  font-size: $font-size-regular;
}
.stock__text {
  font-size: $font-size-small;
  margin-left: $spacing-unit / 2;
  align-self: flex-end;
}
.stock__body {
  display: flex;
  padding: $spacing-unit * 2;
  justify-content: space-between;
  align-items: center;
}
.stock__input {
  height: 30px;
  width: 27.5%;
  border-radius: 5px;
  border: 1px solid gray;
}
.stock__button {
  background-color: rgb(107, 199, 107);
  padding: $spacing-unit / 1.5;
  width: 10%;
  border: 1px solid rgba(0, 128, 0, 0.5);
  border-radius: 5px;
  color: white;
  font-size: $font-size-regular;
}
::placeholder {
  padding: $spacing-unit;
}
</style>
