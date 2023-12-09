import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      more: {},
    };
  },
  mutations: {
    // state 데이터 변경을 정의한다.
    changeName(state) {
      state.name = '홍길동';
    },
    changeAge(state, payload) {
      state.age += payload;
    },
    setMore(state, data) {
      state.more = data;
    },
  },
  actions: {
    // ajax 요청 코드 작성
    getMoreDate(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((res) => {
        // 데이터 수정은 mutations 에서 실행되어야 함.
        // actions 에서 commit 을 사용하기 위해서 context 를 사용해야 한다.
        context.commit('setMore', res.data);
      });
    },
  },
});

export default store;
