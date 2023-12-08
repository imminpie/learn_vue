<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h4 :style="orange">{{ products[0] }}</h4>
    <p>50 만원</p>
  </div>
  <div>
    <h4 :style="orange">{{ products[1] }}</h4>
    <p>50 만원</p>
  </div>
  <div>
    <h4 :style="orange">{{ products[2] }}</h4>
    <p>50 만원</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      orange: 'color:orange',
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
