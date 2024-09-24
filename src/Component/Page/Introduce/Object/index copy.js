import classNames from 'classnames/bind'
import styles from './Contest.module.scss'


const cx = classNames.bind(styles)

function Contest() {
    return(
        <div className={cx('container')}>
            <div className={cx('meaning')}>

            </div>

            <div className={cx('organizingUnit')}>
                
            </div>

            <div className={cx('sponsor')}>
                
            </div>
        </div>
    )
}

export default Contest
