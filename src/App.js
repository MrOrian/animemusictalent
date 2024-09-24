import Footer from './Component/Footer';
import Header from './Component/Header';
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import Pages from './Component/Page';
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const cx = classNames.bind(styles)

function App() {
  const [pageTitle, setPageTitle] = useState('introduce');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);  // Kích hoạt loading khi pageTitle thay đổi
    const timeout = setTimeout(() => {
      setLoading(false); // Tắt loading sau 1 giây (bạn có thể tùy chỉnh thời gian)
    }, 300);

    return () => clearTimeout(timeout); // Xóa timeout nếu component unmount
  }, [pageTitle]); // Theo dõi sự thay đổi của pageTitle


  return (
    <Router basename="/animemusictalent">
      <div className={cx('app')}>
        <Header setPageTitle={setPageTitle}></Header>
        <div className={cx('content')}>
          {loading ? (
            <div className={cx('loading')}>
            </div>    
          ) : (
            <Pages pageTitle={pageTitle}></Pages> 
          )}
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
