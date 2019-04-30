import { Component, Vue, Watch } from 'vue-property-decorator';
import './App.less';
import { LocaleProvider, Radio, Pagination } from 'ant-design-vue';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
@Component({
  components: {
    'a-locale-provider': LocaleProvider,
    'a-pagination': Pagination,
    'a-radio-group': Radio.Group,
    'a-radio-button': Radio.Button
  }
})
export default class App extends Vue {
  public locale: any;

  created() {
    const i18str = this.$store.getters.getLanguage;
    this.updataLocale(i18str);
  }

  @Watch('$store.state.app.language')
  watchLanguage(newV: string, oldV: string) {
    this.updataLocale(newV);
  }

  updataLocale(e: string) {
    if (e === 'en') {
      this.locale = null;
      moment.locale('en');
      this.$i18n.locale = 'en';
    }
    if (e === 'cn') {
      this.locale = zhCN;
      moment.locale('zh-cn');
      this.$i18n.locale = 'cn';
    }
  }

  render() {
    return (
      <div id="app">
        <a-locale-provider locale={this.locale}>
          <router-view />
        </a-locale-provider>
      </div>
    );
  }
}
