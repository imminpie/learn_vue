<template>
  <div :class="`${filter} filter-item`" :style="{ backgroundImage: `url(${imageUrl})` }">
    <slot></slot>
    <button @click="fire">버튼</button>
  </div>
</template>
<script>
export default {
  name: 'FilterBox',
  props: {
    imageUrl: String,
    filter: String,
  },
  methods: {
    fire() {
      // this.emitter.emit('작명', 데이터); -> 전달
      // this.emitter.on('작명', (이벤트데이터) => {}) -> 수신
      this.emitter.emit('imageFilter', this.filter);
    },
  },
};
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
