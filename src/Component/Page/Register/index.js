import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import Image from '../../../Image'

const cx = classNames.bind(styles)

function Register() {
    return(
        <div className={cx('container')}>
            <p className={cx('title')}>ĐĂNG KÝ DỰ THI</p>

            <div className={cx('register__container')}>
                <div className={cx('register__info')}>
                    <p className={cx('register__instruct')}>
                        1. Thí sinh đăng ký thông tin vào Form đăng ký dưới đây:
                        <br></br>
                        <br></br>
                        <a href='https://forms.gle/rVLyVpmWmJJ9ffgs9' target='_blank' rel="noopener noreferrer">Ấn vào đây để truy cập Form đăng ký</a>
                        <br></br>
                        <br></br>
                        2. BTC sẽ liên hệ xác nhận qua Gmail và Zalo.
                        <br></br>
                        <br></br>
                        3. Chuyển lệ phí đăng ký qua số tài khoản hoặc quét mã QR của BTC kèm nội dung chuyển khoản như sau:
                        <br></br>
                        <p>"Họ tên - Ngày sinh - AMT"</p>
                    </p>

                    <table className={cx('table__info')}>
                        <thead>
                            <tr>
                                <th colSpan="2">Thông tin chuyển khoản</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>Tên tài khoản: </td>
                                <td><b>CÔNG TY TNHH <br></br>CRYSTAL WAVE ENTERTAINMENT</b></td>
                            </tr>
                            <tr>
                                <td>Số tài khoản:</td>
                                <td><b>119002950017</b></td>
                            </tr>
                            <tr>
                                <td>Ngân hàng: </td>
                                <td><b>VIETINBANK <br></br>Chi nhánh 2</b></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

                <div className={cx('banking__image')}>
                    <div className={cx('banking__info')}>
                        <div className={cx('img__banking')}>
                            <p className={cx('banking__company')}>
                                Số tài khoản
                                <br></br>
                                119002950017
                            </p>
                            <p className={cx('banking__branch')}>Chi nhánh 2</p>
                        </div>
                        <div className={cx('qrcode')}>
                            <img src={Image.qr}></img>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
