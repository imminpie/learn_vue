<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>안녕 {{ name }}</h4>
  <p>나이: {{ age }}</p>
  <button @click="changeName">버튼</button>
  <button @click="$store.commit('changeAge', 10)">10씩 나이 증가</button>

  <p>{{ myName }}</p>
  {{ more }}
  <button @click="$store.dispatch('getMoreDate')">더보기버튼</button>

  <Container
    :imageFilter="imageFilter"
    :posts="posts"
    :step="step"
    :imageUrl="imageUrl"
    @createPost="create"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="input-file" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import posts from './assets/posts.js';
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      posts,
      moreCount: 0,
      step: 0,
      imageUrl: '',
      content: '',
      imageFilter: '',
    };
  },
  computed: {
    // 자주 꺼내쓰는 state 를 computed 에 넣어놓으면
    // 매번 $store.state.name 작성하지 않아도 된다.
    // computed 함수는 methods 와 다르게 항상 return 을 작성해 주어야 한다.
    name() {
      return this.$store.state.name;
    },
    // mapState 쓰면 computed 코드가 짧아진다.
    // store 에 있던 state 이름을 작성해주면 된다.
    ...mapState(['name', 'age', 'likes', 'more']),

    // object 도 사용할 수 있다.
    ...mapState({ myName: 'name' }),

    // mutations 함수도 사용할 수 있다.
    // $state.commit() 를 작성하지 않아도 된다.
    ...mapMutations(['changeName']),
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.moreCount}.json`).then((res) => {
        this.posts = [...this.posts, res.data];
        this.moreCount++;
      });
    },
    upload(e) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      this.imageUrl = url;
      this.step++;
    },
    create(value) {
      this.content = value;
    },
    publish() {
      const post = {
        name: 'imminpie',
        userImage: 'https://picsum.photos/100?random=3',
        postImage: this.imageUrl,
        likes: 100,
        date: 'Dec, 9',
        liked: false,
        content: this.content,
        filter: this.imageFilter,
      };
      this.posts = [post, ...posts];
      this.step = 0;
    },
  },
  mounted() {
    // this.emitter.on('작명', (이벤트데이터) => {}) -> 수신
    this.emitter.on('imageFilter', (data) => {
      this.imageFilter = data;
    });
  },
  components: {
    Container,
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.input-file {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: 'consolas';
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
