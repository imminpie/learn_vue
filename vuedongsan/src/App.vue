<template>
  <div class="menu">
    <!-- v-for='작명 in 몇회' :key='작명' -->
    <a v-for="menu_items in menu" :key="menu_items" href="#">{{ menu_items }}</a>
  </div>

  <div v-for="(products_items, idx) in products" :key="products_items">
    <h4 :style="orange">{{ products_items }}</h4>
    <p>50 만원</p>
    <button @click="increase(idx)">허위매물신고</button>
    <span>신고수 : {{ count[idx] }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      menu: ['Home', 'Shop', 'About'],
      orange: 'color:orange',
      count: [0, 0, 0],
    };
  },
  methods: {
    increase(idx) {
      this.count[idx] += 1;
    },
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
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  text-decoration: none;
}
</style>
