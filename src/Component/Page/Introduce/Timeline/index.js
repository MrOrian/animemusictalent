import classNames from 'classnames/bind'
import styles from './Timeline.module.scss'


const cx = classNames.bind(styles)

function Timeline() {
    return(
        <div className={cx('container')}>
        <p className={cx('title')}>THỜI GIAN DIỄN RA CUỘC THI</p>

        <table className={cx('table__timeline')}>
            <thead>
                <tr>
                    <th colSpan='2'>TIMELINE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01/10/2024 – 31/12/2024</td>
                    <td>Thí sinh đăng ký qua Form:..., hoàn tất lệ phí đăng ký dự thi.
                        <br></br>
                        <br></br>
                        Tải video và gửi link Google Drive hoặc Youtube (chế độ không công khai) qua Gmail hoặc Zalo của BTC. Hạn cuối đăng tải video clip tham gia vòng <span className={cx('highlight')}>Sơ loại</span>: <b>23:59 ngày 31/12/2024</b> theo giờ Việt Nam. 
                        <br></br>
                        <br></br>
                        Tất cả video clip dự thi gửi <b>sau ngày 31/12/2024</b> đều <span className={cx('highlight--red')}>không hợp lệ</span>.
                    </td>
                </tr>

                <tr>
                    <td>15/01/2025</td>
                    
                    <td>
                        BTC công bố danh sách thí sinh vào Vòng Bán kết (thi trực tiếp)
                    </td>
                </tr>

                <tr>
                    <td>16/02/2025</td>

                    <td>
                        Vòng Bán kết (Thi trực tiếp)
                    </td>
                </tr>

                <tr>
                    <td>18/02/2025 - 25/02/2025</td>
                    <td>
                        Chính thức mở cổng bình chọn thí sinh xuất sắc được vào Chung kết
                    </td>
                </tr>

                <tr>
                    <td>28/02/2025</td>
                    <td>
                        Công bố kết quả các thí sinh xuất sắc được chọn vào vòng Chung kết
                    </td>
                </tr>

                <tr>
                    <td>30/03/2025</td>
                    <td>
                        Vòng chung kết (Thi trực tiếp)
                        <br></br>
                        Trao giải thưởng cho các thí sinh
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        Đêm Live Show dành cho các thí sinh đạt giải
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default Timeline