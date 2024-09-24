import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Images from '../../Image'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Header({setPageTitle}) {
    return(
        <Router basename="/animemusictalent">
            <header>
                <Link to='/introduce' className={cx('header__logo')} onClick={() => setPageTitle('introduce')}>
                    <div className={cx('header__logo')}>
                        <img className={cx('logo')} src={Images.logo_white} alt='logo'></img>
                    </div>
                </Link>
                <div className={cx('header__menu')}>
                    
                        <div className={cx('menu__button')}>
                            <Link to='/introduce' className={cx('menu__link')} onClick={() => setPageTitle('introduce')}>
                                <p className={cx('button__name', 'button__fix')}>Giới thiệu</p>
                            </Link>
                            <div className={cx('home')}>
                                <Link to='/contest' className={cx('menu__link')} onClick={() => setPageTitle('contest')}>Thông tin cuộc thi</Link>
                                <Link to='/object' className={cx('menu__link')} onClick={() => setPageTitle('object')}>Đối tượng</Link>
                                <Link to='/prize' className={cx('menu__link')} onClick={() => setPageTitle('prize')}>Giải thưởng</Link>
                                <Link to='/timeline' className={cx('menu__link')} onClick={() => setPageTitle('timeline')}>Timeline tổng</Link>
                                <Link to='/platforms' className={cx('menu__link')} onClick={() => setPageTitle('platforms')}>Các nền tảng</Link>
                            </div>
                        </div>

    
                    <Link to='/rules' className={cx('menu__link')} onClick={() => setPageTitle('rules')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Thể lệ</p>
                        </div>
                    </Link>
    
                    <Link to='/register' className={cx('menu__link')} onClick={() => setPageTitle('register')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Đăng ký</p>
                        </div>
                    </Link>
    
                    <Link to='/examiner' className={cx('menu__link')} onClick={() => setPageTitle('examiner')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Giám khảo</p>
                        </div>
                    </Link>
    
                    <Link to='/service' className={cx('menu__link')} onClick={() => setPageTitle('service')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Dịch vụ</p>
                        </div>
                    </Link>
    
                    <Link to='/contact' className={cx('menu__link')} onClick={() => setPageTitle('contact')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Liên hệ</p>
                        </div>
                    </Link>
                </div>
            </header>
        </Router>
    )
}

export default Header