import classNames from 'classnames/bind'
import styles from './Contest.module.scss'


const cx = classNames.bind(styles)

function Contest() {
    return(
        <div className={cx('container')}>
            <p className={cx('title')}>THÔNG TIN CUỘC THI</p>
            <p className={cx('content')}>  
                <span className={cx('highlight')}>Anime Music Talent</span> là cuộc thi được tổ chức bởi <span className={cx('highlight')}>Crystal Wave Entertainment</span> dành cho các tài năng âm nhạc thể hiện bản thân và kết nối với cộng đồng những người yêu thích dòng nhạc Anime.
                <br></br>
                <br></br>
                <span className={cx('highlight')}>Anime Music Talent 2024</span> chào đón những tài năng đam mê âm nhạc anime tại <span className={cx('vietnam')}>Việt Nam</span>. Để tham dự Vòng Sơ loại, thí sinh chỉ cần đăng ký tham gia cuộc thi qua Form: <a className={cx('link')} href='https://forms.gle/rVLyVpmWmJJ9ffgs9' target='_blank' rel='noopener noreferrer'>Link Form</a> và quay Video tiết mục trình diễn tác phẩm Anime bằng 1 trong 5 bảng thi yêu cầu của chương trình <span className={cx('highlight')}>(PIANO - VIOLIN - VOCAL - GUITAR - E.GUITAR)</span>, gửi về Ban tổ chức theo hướng dẫn trong Thể lệ cuộc thi.
                <br></br>
                Giám khảo chuyên môn là các chuyên gia, nghệ sĩ,nhạc sĩ, tài năng và chuyên môn cao, đặc biệt có nhiều đóng góp trong sự nghiệp phát triển nền âm nhạc nói chung và âm nhạc anime nói riêng.
                <br></br>
                <b>Thí sinh đăng ký trực tuyến tại:</b>
                <br></br>
                    + Website đăng ký của chương trình: 
                <br></br>
                    + Hoặc Fanpage của chương trình: 
                <br></br>
                    + Hoặc đăng ký trực tiếp tại <u>Văn phòng Ban tổ chức (33 đường số 2, KDC Phú Mỹ, P.Phú Mỹ, Quận 7, TP.HCM)</u>
                <br></br>
                <b>Liên hệ: 0899.339.332 (Zalo)</b>
                <br></br>
                <b>Tất cả thông tin, lịch trình cuộc thi và những thay đổi nếu có, xin mời dõi trực tiếp tại website và fanpage chính của cuộc thi.</b>
                <br></br>
                Chúng tôi hào hứng chờ đón những tiết mục đặc sắc của các bạn!
            </p>
        </div>
    )
}

export default Contest
