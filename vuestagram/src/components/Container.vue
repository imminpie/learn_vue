<template>
  <div v-for="(posts_items, idx) in posts" :key="posts_items">
    <Post :posts="posts[idx]" />
  </div>
</template>
<script>
import Post from './Post.vue';
export default {
  //eslint-disable-next-line
  name: 'Container',
  props: {
    posts: Array,
  },
  components: {
    Post,
  },
};
</script>
<style></style>
