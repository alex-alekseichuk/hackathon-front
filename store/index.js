
export const state = () => ({
  userId: null,
  name: null,
  company: null,
  role: null
})

export const mutations = {
  myProfileLoaded (state, {userId, name, company, role}) {
    state.userId = userId
    state.name = name
    state.company = company
    state.role = role
  }
}

export const actions = {
  async loadMyProfile ({commit, state}) {
    try {
      const response = await this.$api.get('/my_profile');
      commit('myProfileLoaded', response.data)
    } catch (err) {
      console.log(`Can't load my profile`);
      console.log(err);
    }
  }
}
