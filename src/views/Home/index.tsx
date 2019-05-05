import { Component, Vue, Emit, Prop, Watch } from 'vue-property-decorator';

import './index.less';
@Component({
  name: 'Home',
  components: {}
})
export default class Home extends Vue {
  render() {
    return <div class="home">home</div>;
  }
}
