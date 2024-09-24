import Footer from './Component/Footer';
import Header from './Component/Header';
import classNames from 'classnames/bind'
import styles from './App.module.scss'
const cx = classNames.bind(styles)
function App() {
  return (
    <div className={cx('app')}>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
