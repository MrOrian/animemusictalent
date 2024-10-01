import classNames from 'classnames/bind'
import styles from './Examiner.module.scss'
import Image from '../../../Image'

const cx = classNames.bind(styles)

function Examiner() {
    return(
        <div className={cx('container')}>
            <p className={cx('title')}>BAN GIÁM KHẢO</p>
            <div className={cx('examiner__info')}>
                <div className={cx('examiner__image')}>
                    <img src={Image.unknown} alt='unknow-examiner'></img>
                </div>
                
                <div className={cx('examiner__content')}>
                    <p>Nhạc sĩ - Ca sĩ</p>
                </div>
            </div>

            <div className={cx('examiner__info')}>
                <div className={cx('examiner__image')}>
                    <img src={Image.unknown} alt='unknow-examiner'></img>
                </div>
                
                <div className={cx('examiner__content')}>
                    <p>Producer chuyên nghiệp</p>
                </div>
            </div>

            <div className={cx('examiner__info')}>
                <div className={cx('examiner__image')}>
                    <img src={Image.unknown} alt='unknow-examiner'></img>
                </div>
                
                <div className={cx('examiner__content')}>
                    <p>Giảng viên có thâm niên trong nghề có học vị</p>
                </div>
            </div>

            <div className={cx('examiner__info')}>
                <div className={cx('examiner__image')}>
                    <img src={Image.unknown} alt='unknow-examiner'></img>
                </div>
                
                <div className={cx('examiner__content')}>
                    <p>BGK khách mời</p>
                </div>
            </div>

            <div className={cx('examiner__info')}>
                <div className={cx('examiner__image')}>
                    <img src={Image.unknown} alt='unknow-examiner'></img>
                </div>
                
                <div className={cx('examiner__content')}>
                    <p>Cố vấn chuyên môn</p>
                </div>
            </div>
        </div>
    )
}

export default Examiner
