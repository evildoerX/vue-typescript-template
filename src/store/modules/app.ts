const app = {
  state: {
    language: 'cn'
  },
  mutations: {
    Save_Language: (state: any, language: string) => {
      state.language = language;
    }
  },
  actions: {
    SaveLanguage: (context: any, language: string) => {
      context.commit('Save_Language', language);
    }
  }
};

export default app;
