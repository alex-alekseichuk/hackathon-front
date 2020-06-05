export const state = () => ({
  list: []
})

export const mutations = {
  load (state, {topics}) {
    state.list = topics
  }
}

export const actions = {
  async load ({commit, state}) {
    try {
      const response = await this.$api.get('/topics');
      this.commit('topics/load', {topics: response.data.topics})
    } catch (err) {
      console.log(`Can't load topics`);
      console.log(err);
    }
  }
}
