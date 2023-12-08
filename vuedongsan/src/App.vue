<template>
  <div class="black-bg" v-if="isModal === true">
    <div class="white-bg">
      <img :src="products[roomDetail].image" style="width: 100%" />
      <h4>{{ products[roomDetail].title }}</h4>
      <p>{{ products[roomDetail].content }}</p>
      <p>{{ products[roomDetail].price }} 원</p>
      <button @click="openModal">닫기</button>
    </div>
  </div>

  <div class="menu">
    <!-- v-for='작명 in 몇회' :key='작명' -->
    <a v-for="menu_items in menu" :key="menu_items" href="#">{{ menu_items }}</a>
  </div>

  <div v-for="(products_items, idx) in products" :key="idx">
    <img :src="products_items.image" alt="room" class="room-img" />
    <h4
      @click="
        openModal();
        openRoomDetail(idx);
      "
      :style="orange"
    >
      {{ products_items.title }}
    </h4>
    <p>{{ products_items.price }}</p>
  </div>
</template>

<script>
import room from './assets/data/room.js';
export default {
  name: 'App',
  data() {
    return {
      products: room,
      roomDetail: 0,
      menu: ['Home', 'Shop', 'About'],
      orange: 'color:orange',
      isModal: false,
    };
  },
  methods: {
    openModal() {
      this.isModal = !this.isModal;
    },
    openRoomDetail(idx) {
      this.roomDetail = idx;
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
