import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
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
  },
});

export default store;
