import classNames from 'classnames/bind'
import styles from './Rules.module.scss'


const cx = classNames.bind(styles)

function Rules() {
    return(
        <div className={cx('container')}>
        </div>
    )
}

export default Rules
