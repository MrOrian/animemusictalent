import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Images from '../../../Image'

const cx = classNames.bind(styles)

function Home() {
    return(
        <div className={cx('home')}>
            <div className={cx('home__left')}>
                <img src={Images.test} alt='test'></img>
            </div>

            <div className={cx('home__right')}>
                <p>
                    <span className={cx('highlight')}>
                        Anime Music Talent 
                        là cuộc thi được tổ chức bởi
                        Crystal Wave Entertainment 
                        dành cho các tài năng âm nhạc thể hiện bản thân 
                        và kết nối với cộng đồng những người yêu thích dòng nhạc Anime.
                     </span>
                     <br></br><br></br>

                    <span className={cx('highlight')}>
                    * ĐỐI TƯỢNG DỰ THI:
                    </span>
                    <span> </span> 
                     Không giới hạn độ tuổi, đăng ký các bảng: PIANO - VIOLIN - VOCAL - GUITAR - E.GUITAR.
                    <br></br><br></br>

                    <span className={cx('highlight')}>
                    ☎️ Hotline: <span></span> 0899.339.332 (Giờ làm việc 09:30 - 19:30)
                    </span>
                    <br></br>
                    
                    <span className={cx('highlight')}>
                        🎷 Email: animemusictalent@gmail.com
                    </span>
                    
                </p>
            </div>
        </div>
    )
}

export default Home