<template>
  <div>
    <img :src="products.image" alt="room" class="room-img" />
    <h4
      @click="
        openModal();
        openRoomDetail(idx);
      "
      :style="orange"
    >
      {{ products.title }}
    </h4>
    <p>{{ products.price }}</p>
  </div>
</template>
<script>
export default {
  name: 'TheCard',
  data() {
    return {
      orange: 'color:orange',
    };
  },

  props: {
    products: Object,
    openModal: Function,
    openRoomDetail: Function,
    idx: Number,
  },
};
</script>
<style></style>
