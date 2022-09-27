import fn_a from './router_a';
import fn_b from './router_b';
import 'axios'

const main = () => {
  console.log('main');
  fn_a();
  fn_b();
}
export default main
