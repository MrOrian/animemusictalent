import classNames from 'classnames/bind'
import styles from './Service.module.scss'


const cx = classNames.bind(styles)

function Service() {
    return(
        <div className={cx('container')}>
        </div>
    )
}

export default Service