import Vue from 'vue';
import VueI18n from 'vue-i18n';

import zhCN from './zhCN';
import enUS from './enUS';

Vue.use(VueI18n);

const messages = {
  zhCN,
  enUS
};

const i18n = new VueI18n({
  locale: 'enUS',
  messages
});

export default i18n;
