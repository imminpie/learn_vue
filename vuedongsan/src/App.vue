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

  <TheDiscount v-if="showDiscount" :discountPercent="discountPercent" />

  <button @click="priceSort">낮은 가격순</button>
  <button @click="priceReverseSort">높은 가격순</button>
  <button @click="titleSort">이름순</button>
  <button @click="sortBack">초기화</button>

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
      productsOriginal: [...room],
      products: room,
      roomDetail: 0,
      menu: ['Home', 'Shop', 'About'],
      isModal: false,
      showDiscount: true,
      discountPercent: 30,
    };
  },
  methods: {
    openModal() {
      this.isModal = !this.isModal;
    },
    openRoomDetail(idx) {
      this.roomDetail = idx;
    },
    priceSort() {
      this.products.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    priceReverseSort() {
      this.products.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    titleSort() {
      this.products.sort(function (a, b) {
        let nameA = a.title.toUpperCase();
        let nameB = b.title.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    },
    sortBack() {
      // 등호로 배열을 집어넣으면 값을 서로 공유해주세요~ 가 된다.
      this.products = [...this.productsOriginal];
    },
  },
  created() {
    // DOM 에 마운트되기 전에 실행될 코드 작성
    // 일반적으로 서버에서 데이터를 가져올 때
    // created 또는 mounted 내부에 코드를 작성한다.
  },
  mounted() {
    // DOM 에 마운트 후에 실행될 코드 작성
    const timerId = setInterval(() => {
      if (this.discountPercent > 0) {
        this.discountPercent -= 1;
      } else {
        clearInterval(timerId);
        this.showDiscount = false;
      }
    }, 1000);
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
