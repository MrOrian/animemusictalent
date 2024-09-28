import classNames from 'classnames/bind'
import styles from './Prize.module.scss'


const cx = classNames.bind(styles)

function Prize() {
    return(
        <div className={cx('container')}>
        <p className={cx('title')}>GIẢI THƯỞNG CUỘC THI</p>

        <p className={cx('content')}>
            <span className={cx('highlight')}>Anime Music Talent</span> có tổng giải thưởng trị giá lên đến hơn <span className={cx('highlight--red')}>200.000.000đ (Hai trăm triệu đồng)</span>
            <br></br>    
                - <b>Giải nhất cuộc thi:</b> Giải thưởng trị giá <span className={cx('highlight--red')}>100.000.000đ (Một trăm triệu đồng)</span> bao gồm tiền mặt, cúp lưu niệm, học bổng, 1 sản phẩm âm nhạc.
            <br></br>    
                - <b>Giải nhì cuộc thi:</b> Giải thưởng trị giá <span className={cx('highlight--red')}>30.000.000đ (Ba mươi triệu đồng)</span> bao gồm tiền mặt, cúp lưu niệm, học bổng.
            <br></br>    
                - <b>Giải ba cuộc thi:</b> Giải thưởng trị giá <span className={cx('highlight--red')}>20.000.000đ (Hai mươi triệu đồng)</span> bao gồm tiền mặt, cúp lưu niệm, học bổng.
            <br></br>    
                - Các phần quà giành cho <b>Giải yêu thích nhất</b> và các <b>Giải khuyến khích</b> trị giá hơn <span className={cx('highlight--red')}>50.000.000đ (Năm mươi triệu đồng)</span>.
            <br></br>    
                - Và rất nhiều phần quà khác từ các nhà tài trợ dành tặng cho các thí sinh.
        </p>
    </div>
    )
}

export default Prize