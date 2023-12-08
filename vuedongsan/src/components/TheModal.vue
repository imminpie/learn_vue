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
  // watch: {감시할데이터(변경 후 데이터, 변경 전 데이터) {}}
  watch: {
    month(value) {
      if (isNaN(value) == true) {
        alert('문자열은 입력할 수 없습니다.');
        this.month = 1;
      }
    },
  },
  props: {
    products: Array,
    roomDetail: Number,
    openModal: Function,
  },
  beforeUpdate() {
    // 데이터가 변경되고 DOM 이 업데이트되기 전에 실행할 코드 작성
    if (this.month === '2') {
      alert('2개월은 너무 적음.. 안팝니다!');
      this.month = 1;
    }
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
