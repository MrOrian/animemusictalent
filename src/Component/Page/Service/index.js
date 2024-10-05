import classNames from 'classnames/bind'
import styles from './Service.module.scss'
import Images from '../../../Image'

const cx = classNames.bind(styles)

function Service() {
    return(
        <div className={cx('container')}>
            <p className={cx('title')}>DỊCH VỤ</p>

            <div className={cx('service')}>
                <div className={cx('info')}>
                    <div className={cx('service__image')}>
                        <img src={Images.sheet}></img>
                    </div>

                    <div className={cx('service__content')}>
                        <div className={cx('service__info')}>
                            <p className={cx('title')}>ĐẶT SHEET NHẠC</p>
                            <p className={cx('info__detailed')}>Cung cấp sheet nhạc các bài nhạc anime, phối mới theo yêu cầu</p>
                        </div>

                        <div className={cx('service__button')}>
                            <a href='https://zalo.me/0899339332' target='_blank' rel='noopener noreferrer'>Đăng ký</a>
                        </div>
                    </div>
                </div>

                <div className={cx('info')}>
                    <div className={cx('service__image')}>
                        <img src={Images.room}></img>
                    </div>
                    
                    <div className={cx('service__content')}>
                        <div className={cx('service__info')}>
                            <p className={cx('title')}>THUÊ PHÒNG TẬP</p>
                            <p className={cx('info__detailed')}>Phòng tập có sẵn nhạc cụ luyện tập, âm thanh, với diện tích hơn 50m2, có điều hoà và nhà vệ sinh</p>
                        </div>

                        <div className={cx('service__button')}>
                            <a href='https://zalo.me/0899339332' target='_blank' rel='noopener noreferrer'>Đăng ký</a>
                        </div>
                    </div>
                </div>

                <div className={cx('info')}>
                    <div className={cx('service__image')}>
                        <img src={Images.piano}></img>
                    </div>
                    
                    <div className={cx('service__content')}>
                        <div className={cx('service__info')}>
                            <p className={cx('title')}>CỐ VẤN CHUYÊN MÔN</p>
                            <p className={cx('info__detailed')}>Giảng viên hỗ trợ hướng dẫn bài theo mỗi buổi tập, có kinh nghiệm và chuyên môn cao trong âm nhạc anime</p>
                        </div>

                        <div className={cx('service__button')}>
                            <a href='https://zalo.me/0899339332' target='_blank' rel='noopener noreferrer'>Đăng ký</a>
                        </div>
                    </div>
                </div>

                <div className={cx('info')}>
                    <div className={cx('service__image')}>
                        <img src={Images.camera}></img>
                    </div>
                    
                    <div className={cx('service__content')}>
                        <div className={cx('service__info')}>
                            <p className={cx('title')}>QUAY VIDEO</p>
                            <p className={cx('info__detailed')}>Đội ngũ hỗ trợ quay video, sau khi nộp bài thi xong sẽ hỗ trợ hậu kì và dựng lại như 1 sản phẩm cover âm nhạc</p>
                        </div>

                        <div className={cx('service__button')}>
                            <a href='https://zalo.me/0899339332' target='_blank' rel='noopener noreferrer'>Đăng ký</a>
                        </div>
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default Service