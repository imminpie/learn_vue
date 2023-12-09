<template>
  <div>
    <h5>{{ posts[$route.params.id].title }}</h5>
    <p>{{ posts[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'DetailItem',
  props: {
    posts: Array,
  },
};
</script>
<style></style>
