import { Component, Vue, Emit, Prop, Watch } from 'vue-property-decorator';
import './index.less';
import helloword from '../../components/HelloWorld.vue';
@Component({
  name: 'Home',
  components: {
    helloword
  }
})
export default class Home extends Vue {
  render() {
    return (
      <div class="home">
        <helloword />
      </div>
    );
  }
}
