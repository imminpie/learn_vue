<template>
  <div v-for="(posts_items, idx) in posts" :key="posts_items">
    <h5 @click="$router.push(`/detail/${idx}`)">{{ posts_items.title }}</h5>
    <p>{{ posts_items.date }}</p>
  </div>
</template>
<script>
export default {
  name: 'ListItem',
  props: {
    posts: Array,
  },
};
</script>
<style></style>
