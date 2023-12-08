<template>
  <div class="black-bg">
    <div class="white-bg">
      <img :src="products[roomDetail].image" style="width: 100%" />
      <h4>{{ products[roomDetail].title }}</h4>
      <p>{{ products[roomDetail].content }}</p>
      <p>{{ month }} 개월 선택함 : {{ products[roomDetail].price * month }} 원</p>
      <input type="text" v-model="month" />
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheModal',
  data() {
    return {
      month: 1,
    };
  },
  props: {
    products: Array,
    roomDetail: Number,
    openModal: Function,
  },
};
</script>
<style>
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
</style>
