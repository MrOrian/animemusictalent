import classNames from 'classnames/bind'
import Home from './Home'
import Contest from './Introduce/Contest';
import Object from'./Introduce/Object';
import styles from './Pages.module.scss'
import Platforms from './Introduce/Platforms';
import Prize from './Introduce/Prize';
import Timeline from './Introduce/Timeline';
import Register from './Register';
import Rules from './Rules';
import Service from './Service';
import Examiner from './Examiner';
import Contact from './Contact'
const cx = classNames.bind(styles)

function Pages({pageTitle}) {
    let content;

    switch(pageTitle){

        case 'introduce':
            content = <Home></Home>
            break; 

        case 'contest':
            content = <Contest></Contest>
            break; 

        case 'object':
            content = <Object></Object>
            break; 

        case 'platforms':
            content = <Platforms></Platforms>
            break; 

        case 'prize':
            content = <Prize></Prize>
            break; 


        case 'timeline':
            content = <Timeline></Timeline>
            break; 

        case 'register':
            content = <Register></Register>
            break; 

        case 'examiner':
            content = <Examiner></Examiner>
            break;

        case 'rules':
            content = <Rules></Rules>
            break; 

        case 'service':
            content = <Service></Service>
            break; 

        case 'contact':
            content = <Contact></Contact>
            break; 

        default:
                content = <div>'404'</div>;
    }
    

    return(
        <div className={cx('page')}>
            {content}
        </div>
    )
}

export default Pages