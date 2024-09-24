import Footer from './Component/Footer';
import Header from './Component/Header';
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import Pages from './Component/Page';
const cx = classNames.bind(styles)
function App() {
  return (
    <div className={cx('app')}>
      <Header></Header>
      <Pages></Pages>
      <Footer></Footer>
    </div>
  );
}

export default App;
