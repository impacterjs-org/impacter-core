<script setup lang="ts">
  import HeroButtons from './HeroButtons.vue';
</script>
<template>
  <div class="container">
    <img class="hero" src="/impacter.png" />
    <div>
      <h1 class="title">
         An innovative framework for building web interfaces.
      </h1>
      <HeroButtons />
    </div>
  </div>
</template>
<style scoped lang="css">
.container {
  height: 70vh;
  margin-bottom: 40px;
  background: #fff5f0;

  display: flex; 
  justify-content: center;
  align-items: center;

  /* @media (prefers-color-scheme: dark) {
    background: rgb(253, 148, 74);
  } */
}

.hero {
  width: 240px;
  height: 240px;
}
.title {
  font-size: 35px;
  font-weight: 600;
  line-height: 50px;
  text-align: center;

  max-width: 700px;
}
</style>
