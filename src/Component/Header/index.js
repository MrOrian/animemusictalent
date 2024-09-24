import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Images from '../../Image'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Header() {
    return(
        <Router>
            <header>
                <div className={cx('header__logo')}>
                    <img className={cx('logo')} src={Images.logo_white} alt='logo'></img>
                </div>
                <div className={cx('header__menu')}>
                    <Link to='#' className={cx('menu__link')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Giới thiệu</p>
    
                            <div className={cx('home')}>
                                <Link to='/' className={cx('menu__link')}>Thông tin cuộc thi</Link>
                                <Link to='/' className={cx('menu__link')}>Đối tượng</Link>
                                <Link to='/' className={cx('menu__link')}>Giải thưởng</Link>
                                <Link to='/' className={cx('menu__link')}>Timeline tổng</Link>
                                <Link to='/' className={cx('menu__link')}>Các nền tảng</Link>
                            </div>
                        </div>
                    </Link>
    
                    <Link to='#' className={cx('menu__link')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Thể lệ</p>
                        </div>
                    </Link>
    
                    <Link to='#' className={cx('menu__link')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Đăng ký</p>
                        </div>
                    </Link>
    
                    <Link to='#' className={cx('menu__link')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Giám khảo</p>
                        </div>
                    </Link>
    
                    <Link to='#' className={cx('menu__link')}>
                        <div className={cx('menu__button')}>
                            <p className={cx('button__name')}>Dịch vụ</p>
                        </div>
                    </Link>
    
                    <Link to='#' className={cx('menu__link')}>
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