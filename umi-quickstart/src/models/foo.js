
export default {
  state: 'foo',
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  reducers: {
    update(state) {
      return `${state}_foo`;
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
    },
  },
}
