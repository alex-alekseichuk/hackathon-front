
export const state = () => ({
  id: null,
  name: null,
  company: null,
  role: null,
  imgUrl: null,
  email: null,
  linkedin: null,
  github: null
})

export const mutations = {
  loaded (state, {id, name, company, role, imgUrl, email, linkedin, github}) {
    state.id = id;
    state.name = name;
    state.company = company;
    state.role = role;
    state.imgUrl = imgUrl;
    state.email = email;
    state.linkedin = linkedin;
    state.github = github;
  }
}

export const actions = {
  async load ({commit, state}, {id}) {
    try {
      const response = await this.$api.get('/user');
      commit('loaded', response.data)
    } catch (err) {
      console.log(`Can't load user`);
      console.log(err);
    }
  }
}
