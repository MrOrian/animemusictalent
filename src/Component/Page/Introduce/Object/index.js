import classNames from 'classnames/bind'
import styles from './Object.module.scss'


const cx = classNames.bind(styles)

function Object() {
    return(
        <div className={cx('container')}>
            <p className={cx('title')}>ĐỐI TƯỢNG DỰ THI</p>

            <p className={cx('content')}>
            <i><span className={cx('highlight--yellow')}>
            - Không giới hạn độ tuổi tham gia.
            <br></br>
            - Đăng ký trong các bảng dự thi: <u className={cx('wrap')}>PIANO - VIOLIN - VOCAL - GUITAR - E.GUITAR</u>
            <br></br>
            - Đang sinh sống, học tập và làm việc tại Việt Nam.
            </span></i>
            <br></br>
            <br></br>
            <span className={cx('highlight')}>Cuộc thi Âm nhạc Anime Talent mùa 1 năm 2024 </span>chính thức khởi động, chào đón tất cả các tài năng âm nhạc trẻ tuổi. Với các bảng thi đa dạng như <i>Piano, Violin, Vocal, Guitar và Guitar điện,</i> cuộc thi là sân chơi lý tưởng để bạn thể hiện đam mê và tài năng âm nhạc.
            <br></br>
            Chúng tôi mang đến cho bạn cơ hội tỏa sáng trên sân khấu chuyên nghiệp, được đánh giá bởi ban giám khảo uy tín và có cơ hội hợp tác với nhiều nhà sản xuất âm nhạc chuyên nghiệp. Hãy cùng chúng tôi xây dựng cộng đồng âm nhạc anime sôi động tại Việt Nam và đưa tên tuổi của bạn đến gần hơn với công chúng.

            </p>
        </div>
    )
}

export default Object
