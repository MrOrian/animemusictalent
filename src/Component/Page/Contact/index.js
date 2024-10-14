import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import Image from '../../../Image'

const cx = classNames.bind(styles)

function Contact() {
    return(
        <div className={cx('container')}>
            <p className={cx('title')}>THÔNG TIN LIÊN HỆ</p>
            <div className={cx('content')}>
                <div className={cx('content__left')}>
                    <p className={cx('company__name')}><b>CÔNG TY TNHH CRYSTAL WAVE ENTERTAINMENT</b></p>
                    <p>
                        - Địa chỉ: 33 Đường số 2, KDC Phú Mỹ, P. Phú Mỹ, Q7  <br></br><br></br>
                        - Liên hệ: 0899.339.332                                <br></br><br></br>
                        - Gmail: animemusictalent@gmail.com                  <br></br><br></br>
                    </p>
                </div>
                <div className={cx('content__right')}>
                    <p><b>LIÊN HỆ QUA CÁC NỀN TẢNG:</b></p>
                    <a className={cx('social__link')} href='https://www.facebook.com/animemusictalent' target='_blank' rel="noopener noreferrer">
                        <div className={cx('facebook')}>
                            <img src={Image.facebook} alt='facebook'></img>
                            <p>Facebook</p>
                        </div>
                    </a>
                    <a className={cx('social__link')}  href='https://www.instagram.com/animemusictalent/' target='_blank' rel="noopener noreferrer">
                        <div className={cx('instagram')}>
                            <img src={Image.instagram} alt='instagram'></img>
                            <p>Instagram</p>
                        </div>
                    </a>
                    <a className={cx('social__link')}  href='https://zalo.me/0899339332' target='_blank' rel="noopener noreferrer">
                        <div className={cx('zalo')}>
                            <img src={Image.zalo} alt='zalo'></img>
                            <p>Zalo</p>
                        </div>
                    </a>
                    <a className={cx('social__link')}  href='https://www.tiktok.com/@animemusictalent2024' target='_blank' rel="noopener noreferrer">
                        <div className={cx('tiktok')}>
                            <img src={Image.tiktok} alt='tiktok'></img>
                            <p>Tiktok</p>
                        </div>
                    </a>
                    <a className={cx('social__link')}  href='https://www.youtube.com/channel/UCu78VS374DVACTad_1A1VfA/community?pvf=CAI%253D' target='_blank' rel="noopener noreferrer">
                        <div className={cx('youtube')}>
                            <img src={Image.youtube} alt='youtube'></img>
                            <p>Youtube</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
