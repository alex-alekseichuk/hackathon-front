
export const state = () => ({
  userId: null,
  username: null
})

export const mutations = {
  myProfileLoaded (state, {userId, username}) {
    state.userId = userId
    state.username = username
  }
}

export const actions = {
  async loadMyProfile ({commit, state}) {
    try {
      const response = await this.$api.get('/my_profile');
      this.commit('myProfileLoaded', response.data)
    } catch (err) {
      console.log(`Can't load my profile`);
      console.log(err);
    }
  }
}
