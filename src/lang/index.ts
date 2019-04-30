import Vue from 'vue';
import VueI18n from 'vue-i18n';

import cn from './cn.json';
import en from './en.json';

Vue.use(VueI18n);

const messages = {
  cn,
  en
};

const i18n = new VueI18n({
  locale: 'en',
  messages
});

export default i18n;
