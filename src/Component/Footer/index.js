import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import Images from '../../Image'
const cx = classNames.bind(styles)

function Footer() {
    return(
        <footer>
            <div className={cx('footer__top')}>
                <div className={cx('footer__section','footer__section--contact-info')}>
                    <div className={cx('info__top')}>
                        <p>Info</p>
                    </div>

                    <div className={cx('info__bottom')}>
                        <div className={cx('info__contact')}>
                            <p className={cx('icon__info')}>
                                <ion-icon name="mail-outline"></ion-icon>
                            </p>
                            <p className={cx('info')}>animemusictalent@gmail.com</p>
                        </div>
                        <div className={cx('info__contact')}>
                            <p className={cx('icon__info')}>
                                <ion-icon name="call-outline"></ion-icon>
                            </p>
                            <p className={cx('info')}>0899.339.332</p>
                        </div>
                    </div>
                </div>

                <div className={cx('footer__section','footer__section--social-media')}>
                    <div className={cx('social__top')}>
                        <p>Contact</p>
                    </div>

                    <div className={cx('social__bottom')}>
                        <a href='https://www.facebook.com/profile.php?id=61565795704081' target='_blank' rel="noopener noreferrer">
                            <div className={cx('social')}>
                                <img className={cx('icon')} src={Images.facebook} alt='Facebook'></img>
                            </div>
                        </a>
                        
                        <a href='https://www.instagram.com/animemusictalent/' target='_blank' rel="noopener noreferrer">
                            <div className={cx('social')}>
                                <img className={cx('icon')} src={Images.instagram} alt='Instagram'></img>
                            </div>
                        </a>
                        
                        <a href='https://zalo.me/0899339332' target='_blank' rel='noopener noreferrer'>
                            <div className={cx('social')}>
                                <img className={cx('icon')} src={Images.zalo} alt='Zalo'></img>
                            </div>
                        </a>
                        
                        <a href='https://www.tiktok.com/@animemusictalent' target='_blank' rel='noopener noreferrer'>
                            <div className={cx('social')}>
                                <img className={cx('icon')} src={Images.tiktok} alt='Tiktok'></img>
                            </div>
                        </a>
                        
                        <a href='https://www.youtube.com/channel/UCu78VS374DVACTad_1A1VfA/community?pvf=CAI%253D' target='_blank' rel='noopener noreferrer'>
                            <div className={cx('social')}>
                                <img className={cx('icon')} src={Images.youtube} alt='Youtube'></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('footer__bottom')}>

            </div>

        </footer>
    )
}

export default Footer