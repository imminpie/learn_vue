<template>
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
      <button @click="isModal">닫기</button>
    </div>
  </div>

  <div class="menu">
    <!-- v-for='작명 in 몇회' :key='작명' -->
    <a v-for="menu_items in menu" :key="menu_items" href="#">{{ menu_items }}</a>
  </div>

  <div v-for="(products_items, idx) in products" :key="products_items">
    <img :src="require(`@/assets/room${idx}.jpg`)" alt="room" class="room-img" />
    <h4 @click="isModal" :style="orange">{{ products_items }}</h4>
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
      modal: false,
    };
  },
  methods: {
    increase(idx) {
      this.count[idx] += 1;
    },
    isModal() {
      this.modal = !this.modal;
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
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
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
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
