<template>
  <div class="black-bg">
    <div class="white-bg">
      <img :src="products[roomDetail].image" style="width: 100%" />
      <h4>{{ products[roomDetail].title }}</h4>
      <p>{{ products[roomDetail].content }}</p>
      <p>{{ products[roomDetail].price }} 원</p>
      <button @click="openModal">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheModal',
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
