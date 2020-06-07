
export const state = () => ({
  id: null,
  topicId: null,
  title: null,
  date: null,
  start: null,
  end: null,
  status: null,
  questions: []
})

export const mutations = {
  loaded (state, {id, topicId, title, brief, date, start, end, status, questions}) {
    state.id = id;
    state.topicId = topicId;
    state.title = title;
    state.brief = brief;
    state.date = date;
    state.start = start;
    state.end = end;
    state.status = status;
    state.questions = questions;
  }
}

export const actions = {
  async load ({commit, state}, {id}) {
    try {
      const response = await this.$api.get('/quiz');
      commit('loaded', response.data)
    } catch (err) {
      console.log(`Can't load quiz`);
      console.log(err);
    }
  }
}
