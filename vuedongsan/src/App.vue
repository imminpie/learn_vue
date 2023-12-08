<template>
  <Transition name="fade">
    <TheModal
      v-if="isModal"
      :roomDetail="roomDetail"
      :products="products"
      :isModal="isModal"
      @closeModal="openModal"
    />
  </Transition>

  <div class="menu">
    <!-- v-for='작명 in 몇회' :key='작명' -->
    <a v-for="menu_items in menu" :key="menu_items" href="#">{{ menu_items }}</a>
  </div>

  <TheDiscount />

  <TheCard
    v-for="(products_items, idx) in products"
    :key="products_items"
    :products="products[idx]"
    :openModal="openModal"
    :openRoomDetail="openRoomDetail"
    :idx="idx"
  />
</template>

<script>
import room from './assets/data/room.js';
import TheDiscount from './components/TheDiscount.vue';
import TheModal from './components/TheModal.vue';
import TheCard from './components/TheCard.vue';
export default {
  name: 'App',
  data() {
    return {
      products: room,
      roomDetail: 0,
      menu: ['Home', 'Shop', 'About'],
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
  components: {
    TheDiscount,
    TheModal,
    TheCard,
  },
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
.fade-enter-from {
  /* 시작 스타일 */
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  /* 종료 스타일 */
  opacity: 1;
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
