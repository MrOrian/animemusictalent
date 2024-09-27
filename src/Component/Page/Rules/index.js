import classNames from 'classnames/bind'
import styles from './Rules.module.scss'


const cx = classNames.bind(styles)

function Rules() {
    return(
        <div className={cx('container')}>
            <div className={cx('content')}>
                <p className={cx('title')}>THỂ LỆ CUỘC THI</p>
                <p className={cx('main__content')}>I. Đối tượng dự thi:</p>

                <p className={cx('detailed__content')}>
                    + Đăng ký trong các bảng dự thi: PIANO - VIOLIN - VOCAL - GUITAR - E.GUITAR 
                    <br></br>
                    + Không giới hạn độ tuổi tham gia.
                    <br></br>
                    + Đang sinh sống, học tập và làm việc tại Việt Nam.
                </p>

                <p className={cx('main__content')}>II. Hình Thức dự thi:</p>

                <p className={cx('section__content')}>1. Vòng Sơ loại (Online)</p>
                
                <p className={cx('detailed__content')}>
                    - Thời gian đăng ký: Từ ngày 01/10/2024 đến hết 15/11/2024 (Thí sinh có thể gửi video dự thi sau khi đăng ký qua Email hoặc Zalo BTC).
                    <br></br>
                    - Lệ phí đăng ký: <b>750.000đ</b> / lượt đăng ký
                    <br></br>
                    - Nội dung thi: Thí sinh quay video 1 tác phẩm và gửi BTC (1 thí sinh có thể đăng ký nhiều lượt, 1 lượt đăng ký / 1 tác phẩm). Thí sinh ở các bảng VIOLIN - VOCAL - E.GUITAR được sử dụng beat piano hỗ trợ:
                    <br></br>
                        +  Định dạng video: độ phân giải 720p,định dạng mp4, link youtube.
                    <br></br>
                        +  Đặt tên video clip theo cấu trúc: hotenthisinh-ngaythangnamsinh-nhaccuduthi-tenbaiduthi 
                    <br></br>
                        (Ví dụ: nguyenvana-01012000-Piano-Conan).
                    <br></br>
                        +  Đính kèm thông tin đầy đủ về cá nhân và tác phẩm (họ tên, năm sinh, địa chỉ, số điện thoại, địa chỉ email, tên tác phẩm, tác giả và số phút từng bài) khi gửi video clip dự thi.
                    <br></br>
                        +  Video clip của thí sinh dự thi phải nhìn rõ toàn thân; có chất lượng hình ảnh và âm thanh tốt; được quay liên tục từ đầu đến kết thúc phần biểu diễn, không qua cắt ghép, chỉnh sửa.
                    <br></br>
                    [CHO 5 TẤM HÌNH MẪU CỦA 5 BẢNG]
                    <br></br>
                        +  Số lượng thí sinh xuất sắc được chọn vào Vòng Bán kết tùy thuộc vào quyết định cuối cùng của BGK chuyên môn.
                    <br></br>
                    - Công bố kết quả: Công khai trên website, fanpage, Email của thí sinh ngày 20/11/2024.
                </p>

                <p className={cx('section__content')}>2. Vòng Bán kết</p>

                <p className={cx('detailed__content')}>
                    - Nội dung thi: Thi trực tiếp trên sân khấu 1 tác phẩm solo. Thí sinh ở các bảng VIOLIN - VOCAL - E.GUITAR được sử dụng beat hỗ trợ.
                    <br></br>
                    - Số lượng thí sinh Vòng Bán kết: 50 thí sinh ( Mỗi bảng thi sẽ có 10 thí sinh vào vòng bán kết)
                    <br></br>
                    - Số lượng thí sinh xuất sắc được chọn vào Vòng chung kết tùy thuộc vào số lượng yêu thích trên các nền tảng của thí sinh và số điểm do BGK chuyên môn.
                    <br></br>
                    - 01 thí sinh ấn tượng nhất của tất cả 5 bảng có lượt yêu thích nhiều nhất do cộng đồng mạng bình chọn sẽ được 1 tấm vé vàng đi thẳng vào Vòng Chung kết cuộc thi (thí sinh giành được tấm vé vàng sẽ nằm ngoài số lượng thí sinh được BGK và cộng đồng mạng chọn vào chung kết). Trường hợp thí sinh có số lượt yêu thích cao nhất do Cộng đồng mạng bình chọn mà cũng được BGK chọn vào Vòng Chung kết, thì thí sinh có điểm số cao liền kề sẽ được chọn vào Vòng Chung kết.
                    <br></br>
                    - Công bố kết quả: Công khai trên website, fanpage, Email của thí sinh ngày 14/12/2024.
                </p>

                <p className={cx('section__content')}>3. Vòng Chung kết</p>

                <p className={cx('detailed__content')}>
                    - Nội dung thi: Thi trực tiếp trên sân khấu 1 tác phẩm solo và hòa tấu với Band nhạc 1 tác phẩm.
                    <br></br>
                    - Số lượng thí sinh Vòng chung kết: 11 thí sinh.
                    <br></br>
                        + Mỗi bảng thi từ vòng bán kết sẽ có 2 thí sinh vào vòng chung kết.
                    <br></br>
                        + Các thí sinh cung cấp cho BTC 2 tác phẩm dự thi gồm 1 tác phẩm độc tấu và 1 tác phẩm trình diễn cùng band nhạc, thí sinh cung cấp cho BTC tốc độ metronome của bài thi cùng ban nhạc trước 7 ngày khi diễn ra Chung kết.
                    <br></br>
                    - Thí sinh đạt giải sẽ được trao giải thưởng trên sân khấu Chung kết và tiến thẳng vào đêm Liveshow.
                </p>

                <p className={cx('main__content')}>III. Quy định về tác phẩm dự thi:</p>

                <p className={cx('detailed__content')}>
                    - 1 thí sinh có thể đăng ký nhiều lượt, 1 lượt đăng ký/1 tác phẩm, có thể đăng ký ở nhiều bảng khác nhau.
                    <br></br>
                    - Tác phẩm dự thi phải được đàn thuộc lòng.
                    <br></br>
                    - Thí sinh bảng Vocal có thể chọn hát Tiếng Việt hoặc Tiếng Nhật hoặc Tiếng Anh.
                    <br></br>
                    - Thí sinh có thể mặc trang phục hóa trang khi dự thi các vòng trực tiếp.
                    <br></br>
                    - Các tác phẩm thi giới hạn trong danh mục âm nhạc anime (có thể tự do phối mới)
                    <br></br>
                    -  Bài thi ở các vòng của mỗi thí sinh không được trùng nhau.
                </p>

                <p className={cx('main__content')}>IV. Cách tính điểm của Cộng đồng mạng:</p>

                <p className={cx('section__content')}>
                    1. Xét kết quả bình chọn thí sinh ấn tượng nhất vòng Bán kết:
                </p>

                <p className={cx('detailed__content')}>
                    – Thời gian bình chọn: ngay sau khi kết thúc vòng thi Bán kết và clip thí sinh dự thi được đăng tải lên mạng xã hội của BTC.
                    <br></br>
                    – Kênh bình chọn:
                    <br></br>
                    + <b>Fanpage:</b> <a href='https://www.facebook.com/profile.php?id=61565795704081' target='_blank' rel="noopener noreferrer">Truy cập</a>
                    <br></br>
                    Share công khai trên trang cá nhân kèm hashtag đúng cấu trúc: #mãsốthísinh, #AnimeMusicTalent, #Crystalwave =1 điểm.
                    <br></br>
                    + <b>Instagram:</b> <a href='https://www.instagram.com/animemusictalent/'>Truy cập</a>
                    <br></br>
                    Share công khai trên trang cá nhân kèm hashtag đúng cấu trúc: #mãsốthísinh, #AnimeMusicTalent, #Crystalwave =1 điểm.
                    <br></br>
                    + <b>Youtube:</b> <a href='https://www.youtube.com/channel/UCu78VS374DVACTad_1A1VfA/community?pvf=CAI%253D' target='_blank' rel="noopener noreferrer">Truy cập</a>
                    <br></br>
                    Bình luận công khai dưới clip đăng tải trên kênh Youtube chính thức của cuộc thi, mỗi tài khoản chỉ tính 1 lượt bình luận = 1 điểm.
                    <br></br>
                    + <b>Tiktok:</b> <a href='https://www.tiktok.com/@animemusictalent' target='_blank' rel="noopener noreferrer">Truy cập</a>
                    <br></br>
                    Yêu thích và bình luận vào clip đăng tải trên kênh tiktok chính thức của cuộc thi, mỗi tài khoản chỉ tính 1 lượt yêu thích và bình luận = 3 điểm
                    <br></br>
                    + Số điểm là tổng lượt Like, share và bình luận công khai bằng các tài khoản thực (không chấp nhận tài khoản ảo).
                    <br></br>
                    + Số điểm trên các nền tảng xã hội sẽ chiếm 30% và tổng số điểm do các BGK chấm sẽ chiếm 70%.
                    <br></br>
                    – Ở mỗi Bảng của mỗi Nhóm, thí sinh có tổng số điểm cao nhất được vào vòng Chung kết cuộc thi.
                </p>

                <p className={cx('section__content')}>2. Xét kết quả bình chọn giải tấm vé vàng:</p>

                <p className={cx('detailed__content')}>
                    – Thời gian bình chọn: ngay sau khi kết thúc vòng thi bán kết. 
                    <br></br>
                    – Kết quả bình chọn sẽ dựa trên tổng số yêu thích, bình luận và chia sẻ bài thi của thí sinh trên tất cả các nền tảng. 
                </p>

                <p className={cx('main__content')}>V. Quy định cuộc thi:</p>

                <p className={cx('detailed__content')}>
                    – Thí sinh chịu trách nhiệm tự tập luyện tất cả các tiết mục phần dự thi của mình.
                    <br></br>
                    – BTC có quyền ghi âm và ghi hình của thí sinh trong suốt cuộc thi. Bản quyền các tài liệu này thuộc về BTC. 
                    <br></br>
                    – Khi tham gia cuộc thi, các thí sinh đồng ý cho phép BTC được xuất bản và phát hành các bản ghi âm và hình ảnh đã nộp/đã dự thi và các hoạt động bên lề cuộc thi nhằm mục đích truyền thông. BTC cuộc thi có quyền chỉnh sửa và cắt ảnh của các thí sinh cho mục đích quảng cáo trên các phương tiện truyền thông đại chúng.
                    <br></br>
                    – Thí sinh tự túc các vấn đề liên quan đến ăn ở và đi lại trong thời gian diễn ra Vòng Bán kết và Vòng Chung kết cuộc thi.
                    <br></br>
                    – Thí sinh của cuộc thi có trách nhiệm tham gia đầy đủ các hoạt động trước, trong và sau cuộc thi khi được BTC đề nghị.
                    <br></br>
                    – Thí sinh phải mặc trang phục lịch sự và khuyến khích hoá trang theo nhân vật yêu thích của mình. Trang phục không trang trọng (như quần short, dép xỏ ngón, váy ngắn, áo ba lỗ, áo phông, v.v.) đều bị nghiêm cấm.
                </p>
            </div>
        </div>
    )
}

export default Rules
