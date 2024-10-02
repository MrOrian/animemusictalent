import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Images from '../../Image'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles)

function Header({setPageTitle}) {
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [isMobileHomeVisible, setMobileHomeVisible] = useState(false);
    const menuRef = useRef(null);
    const toggleMenu = () => {
        setMobileMenuVisible(prevState => !prevState);
  
      setMobileHomeVisible(false);
    };

    const preventClose = (e) => {
        e.stopPropagation(); // Ngăn không cho menu bị ẩn khi bấm vào các phần tử bên trong
    };

    const homeMenu = () => {
        setMobileHomeVisible(prevState => !prevState);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMobileMenuVisible(false); // Ẩn menu
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return(
            <header>
                <Link to='/introduce' className={cx('header__logo')} onClick={() => setPageTitle('introduce')}>
                    <div className={cx('header__logo')}>
                        <img className={cx('logo')} src={Images.logo_white} alt='logo'></img>
                    </div>
                </Link>
                <div className={cx('header__menu')}>
                    
                    <div className={cx('menu__button')}  >
                            <Link to='/introduce' className={cx('menu__link')} onClick={() => setPageTitle('introduce')}>
                                <p className={cx('button__name', 'button__fix')} tabIndex='0'>Giới thiệu</p>
                            </Link>
                            <div className={cx('home')}>
                                <Link to='/contest' className={cx('menu__link')} onClick={() => setPageTitle('contest')}>Thông tin cuộc thi</Link>
                                <Link to='/object' className={cx('menu__link')} onClick={() => setPageTitle('object')}>Đối tượng</Link>
                                <Link to='/prize' className={cx('menu__link')} onClick={() => setPageTitle('prize')}>Giải thưởng</Link>
                                <Link to='/timeline' className={cx('menu__link')} onClick={() => setPageTitle('timeline')}>Timeline tổng</Link>
                                {/* <Link to='/platforms' className={cx('menu__link')} onClick={() => setPageTitle('platforms')}>Các nền tảng</Link> */}
                            </div>
                    </div>

    
                    <Link to='/rules' className={cx('menu__link')} onClick={() => setPageTitle('rules')}>
                        <div className={cx('menu__button')} tabIndex="0">
                            <p className={cx('button__name')}>Thể lệ</p>
                        </div>
                    </Link>
    
                    <Link to='/register' className={cx('menu__link')} onClick={() => setPageTitle('register')}>
                        <div className={cx('menu__button')} tabIndex="0">
                            <p className={cx('button__name')}>Đăng ký</p>
                        </div>
                    </Link>
    
                    <Link to='/examiner' className={cx('menu__link')} onClick={() => setPageTitle('examiner')}>
                        <div className={cx('menu__button')} tabIndex="0">
                            <p className={cx('button__name')}>Giám khảo</p>
                        </div>
                    </Link>
    
                    <Link to='/service' className={cx('menu__link')} onClick={() => setPageTitle('service')}>
                        <div className={cx('menu__button')} tabIndex="0">
                            <p className={cx('button__name')}>Dịch vụ</p>
                        </div>
                    </Link>
    
                    <Link to='/contact' className={cx('menu__link')} onClick={() => setPageTitle('contact')}>
                        <div className={cx('menu__button')} tabIndex="0">
                            <p className={cx('button__name')}>Liên hệ</p>
                        </div>
                    </Link>

                    <div className={cx('menu__collapse')} ref={menuRef}>
                        <p className={cx('menu__icon')} tabIndex='0' onClick={toggleMenu}>
                            <ion-icon name="grid-outline" ></ion-icon>
                        {isMobileMenuVisible && (
                            <div className={cx('menu__mobile')} onClick={preventClose}>

                                <div className={cx('button__mobile')} tabIndex="0" onClick={homeMenu}>
                                <Link to='/introduce' className={cx('menu__mobile--link')} onClick={() => setPageTitle('introduce')}>
                                    <p className={cx('button__mobile--name', 'button__mobile--fix')} >
                                        <div className={cx('title__button')}>
                                            <p>Giới thiệu</p>
                                            <p><ion-icon name="chevron-down-outline"></ion-icon></p>
                                        </div>
                                    </p>
                                </Link>
                                {isMobileHomeVisible && (
                                    <div className={cx('home__mobile')} tabIndex="0" onClick={preventClose}>
                                        <Link to='/contest' className={cx('menu__link')} onClick={() => setPageTitle('contest')}>Thông tin cuộc thi</Link>
                                        <Link to='/object' className={cx('menu__link')} onClick={() => setPageTitle('object')}>Đối tượng</Link>
                                        <Link to='/prize' className={cx('menu__link')} onClick={() => setPageTitle('prize')}>Giải thưởng</Link>
                                        <Link to='/timeline' className={cx('menu__link')} onClick={() => setPageTitle('timeline')}>Timeline tổng</Link>
                                        {/* <Link to='/platforms' className={cx('menu__link')} onClick={() => setPageTitle('platforms')}>Các nền tảng</Link> */}
                                    </div>
                                )}
                                    
                                </div>

                                <Link to='/rules' className={cx('menu__mobile--link')} onClick={() => setPageTitle('rules')}>
                                    <div className={cx('button__mobile')} tabIndex="0">
                                        <p className={cx('button__mobile--name')}>Thể lệ</p>
                                    </div>
                                </Link>

                                <Link to='/register' className={cx('menu__mobile--link')} onClick={() => setPageTitle('register')}>
                                    <div className={cx('button__mobile')} tabIndex="0">
                                        <p className={cx('button__mobile--name')}>Đăng ký</p>
                                    </div>
                                </Link>

                                <Link to='/examiner' className={cx('menu__mobile--link')} onClick={() => setPageTitle('examiner')}>
                                    <div className={cx('button__mobile')} tabIndex="0">
                                        <p className={cx('button__mobile--name')}>Giám khảo</p>
                                    </div>
                                </Link>

                                <Link to='/service' className={cx('menu__mobile--link')} onClick={() => setPageTitle('service')}>
                                    <div className={cx('button__mobile')} tabIndex="0">
                                        <p className={cx('button__mobile--name')}>Dịch vụ</p>
                                    </div>
                                </Link>

                                <Link to='/contact' className={cx('menu__mobile--link')} onClick={() => setPageTitle('contact')}>
                                    <div className={cx('button__mobile')} tabIndex="0">
                                        <p className={cx('button__mobile--name')}>Liên hệ</p>
                                    </div>
                                </Link>
                            </div>
                        )}
                        </p>
                        
                    </div>
                </div>
            </header>
    )
}

export default Header