<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: `url(${posts.userImage})` }"></div>
      <span class="profile-name">{{ posts.name }}</span>
    </div>
    <div
      :class="`post-body ${posts.filter}`"
      :style="{ backgroundImage: `url(${posts.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ posts.likes }} Likes</p>
      <p>
        <strong>{{ posts.name }}</strong> {{ posts.content }}
      </p>
      <p class="date">{{ posts.date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  //eslint-disable-next-line
  name: 'Post',
  props: {
    posts: Object,
  },
};
</script>
<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-size: cover;
  background-position: center;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
