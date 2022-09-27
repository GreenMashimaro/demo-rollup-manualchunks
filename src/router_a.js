import fn_c from './components/c';

// deadcode，打包会被treeShaking去除
const deadCode = () => {
  console.log('deadCode');
}
const Comp_A = () => {
  console.log('a', dayjs().format('YYYY-MM-DD'))
  fn_c();
}
export default Comp_A;
