<template>
  <div class="item-wrapper">
    <shop-tool-item :image_url="'https://picsum.photos/1000'" :name="'Super Duper Product'" :description="'This is the well known and beloved Super Duper Product from Super Duper Company'" :price="33.33"></shop-tool-item>
    <shop-tool-item :image_url="'https://picsum.photos/1020'" :name="'Super Duper Product'" :description="'This is the well known and beloved Super Duper Product from Super Duper Company'" :price="33.33"></shop-tool-item>
    <shop-tool-item :image_url="'https://picsum.photos/1030'" :name="'Super Duper Product'" :description="'This is the well known and beloved Super Duper Product from Super Duper Company'" :price="33.33"></shop-tool-item>
    <shop-tool-item :image_url="'https://picsum.photos/1010'" :name="'Super Duper Product'" :description="'This is the well known and beloved Super Duper Product from Super Duper Company'" :price="33.33"></shop-tool-item>
    <shop-tool-item :image_url="'https://picsum.photos/1040'" :name="'Super Duper Product'" :description="'This is the well known and beloved Super Duper Product from Super Duper Company'" :price="33.33"></shop-tool-item>
    <shop-tool-item :image_url="'https://picsum.photos/1050'" :name="'Super Duper Product'" :description="'This is the well known and beloved Super Duper Product from Super Duper Company'" :price="33.33"></shop-tool-item>
    <shop-tool-item :image_url="'https://picsum.photos/1060'" :name="'Super Duper Product'" :description="'This is the well known and beloved Super Duper Product from Super Duper Company'" :price="33.33"></shop-tool-item>
    <shop-tool-item :image_url="'https://picsum.photos/1070'" :name="'Super Duper Product'" :description="'This is the well known and beloved Super Duper Product from Super Duper Company'" :price="33.33"></shop-tool-item>
    <shop-tool-item :image_url="'https://picsum.photos/1080'" :name="'Super Duper Product'" :description="'This is the well known and beloved Super Duper Product from Super Duper Company'" :price="33.33"></shop-tool-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.item-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 25vw 25vw 25vw 25vw;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 32px;
}
</style>
