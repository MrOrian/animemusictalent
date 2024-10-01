import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Images from '../../../Image'
import VideoTrailer from '../../../Video/Controls_Wide_BB.mp4'
import { useState,useRef } from 'react'

const cx = classNames.bind(styles)

function Home() {
    const videoRef = useRef(null);
    const [isReversed, setIsReversed] = useState(false);

    const handleEnded = () => {
        setIsReversed(!isReversed); // Đảo ngược trạng thái
        videoRef.current.currentTime = 0; // Đặt thời gian video về 0
        videoRef.current.play(); // Phát video
    };

    return(
        <div className={cx('home')}>
            <div className={cx('home__left')}>
            <video 
                ref={videoRef} 
                src={isReversed ? VideoTrailer : VideoTrailer} // Cùng một video cho lặp lại
                onEnded={handleEnded}
                autoPlay 
                controls ={false}
                width="600" 
                loop 
                muted
                // thêm "loop" để video sẽ tự động lặp
            />
            </div>

            <div className={cx('home__right')}>
                
                <p>
                    <p className={cx('title')}>THÔNG TIN CHƯƠNG TRÌNH</p>
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
                     Không giới hạn độ tuổi, đăng ký các bảng:<br></br> <span className={cx('wrap')}>PIANO - VIOLIN - VOCAL - GUITAR - E.GUITAR</span>
                    <br></br><br></br>

                    <span className={cx('highlight')}>
                    Hotline: <span></span> 0899.339.332 (Giờ làm việc 09:30 - 19:30)
                    </span>
                    <br></br>
                    <br></br>
                    <span className={cx('highlight')}>
                    Email: animemusictalent@gmail.com
                    </span>
                    
                </p>
            </div>
        </div>
    )
}

export default Home