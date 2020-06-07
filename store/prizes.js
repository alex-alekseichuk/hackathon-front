export const state = () => ({
  list: []
})

export const mutations = {
  loaded (state, {prizes}) {
    state.list = prizes
  }
}

export const actions = {
  async load ({commit, state}) {
    try {
      const response = await this.$api.get('/prizes');
      commit('loaded', {prizes: response.data.prizes})
    } catch (err) {
      console.log(`Can't load prizes`);
      console.log(err);
    }
  }
}
