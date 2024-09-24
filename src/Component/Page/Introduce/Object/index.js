import classNames from 'classnames/bind'
import styles from './Object.module.scss'


const cx = classNames.bind(styles)

function Object() {
    return(
        <div className={cx('container')}>
        </div>
    )
}

export default Object
