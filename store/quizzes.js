export const state = () => ({
  list: []
})

export const mutations = {
  loaded (state, {quizzes}) {
    state.list = quizzes
  }
}

export const actions = {
  async load ({commit, state}) {
    try {
      const response = await this.$api.get('/quizzes');
      commit('loaded', {quizzes: response.data.quizzes})
    } catch (err) {
      console.log(`Can't load quizzes`);
      console.log(err);
    }
  }
}
