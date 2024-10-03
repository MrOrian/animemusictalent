import Footer from './Component/Footer';
import Header from './Component/Header';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pages from './Component/Page';

const cx = classNames.bind(styles);

function App() {
  const [pageTitle, setPageTitle] = useState('introduce');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Kích hoạt loading khi route thay đổi
    const timeout = setTimeout(() => {
      setLoading(false); // Tắt loading sau một thời gian ngắn
    }, 100);

    return () => clearTimeout(timeout); // Xóa timeout khi component unmount
  }, [pageTitle]);

  return (
    <Router>
      <div className={cx('app')}>
        <Header setPageTitle={setPageTitle} />
        <div className={cx('content')}>
          {loading ? (
            <div className={cx('loading')}></div>
          ) : (
            <div className={cx('wrapper')}>
              <Routes>
                {/* Định nghĩa các route */}
                <Route exact path="/" element={<Pages pageTitle="introduce" />} />
                <Route path="/introduce" element={<Pages pageTitle="introduce" />} />
                <Route path="/rules" element={<Pages pageTitle="rules" />} />
                <Route path="/register" element={<Pages pageTitle="register" />} />
                <Route path="/contact" element={<Pages pageTitle="contact" />} />
                <Route path="/examiner" element={<Pages pageTitle="examiner" />} />
                <Route path="/service" element={<Pages pageTitle="service" />} />

                <Route path="/timeline" element={<Pages pageTitle="timeline" />} />
                <Route path="/prize" element={<Pages pageTitle="prize" />} />
                <Route path="/contest" element={<Pages pageTitle="contest" />} />
                <Route path="/object" element={<Pages pageTitle="object" />} />
                <Route path="*" element={<Pages pageTitle="introduce" />} />


              </Routes>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
