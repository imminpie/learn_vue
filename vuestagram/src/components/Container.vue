<template>
  <div>
    <div v-if="step === 0">
      <Post v-for="(posts_items, idx) in posts" :key="posts_items" :posts="posts[idx]" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div class="upload-image" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
      <div class="filters">
        <FilterBox
          v-for="(filters, idx) in filter"
          :key="filters"
          :imageUrl="imageUrl"
          :filter="filter[idx]"
        ></FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div class="upload-image" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="handleContent"
          placeholder="내용을 입력하세요."
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
import filter from './../assets/filter.js';
export default {
  //eslint-disable-next-line
  name: 'Container',
  data() {
    return {
      content: '',
      filter: filter,
    };
  },
  props: {
    posts: Array,
    step: Number,
    imageUrl: String,
  },
  methods: {
    handleContent(e) {
      this.content = e.target.value;
      this.$emit('createPost', this.content);
    },
  },
  components: {
    Post,
    FilterBox,
  },
};
</script>
<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
  background-position: center;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
  resize: none;
}
</style>
