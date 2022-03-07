import Announcement from '../../Component/Announcement/Announcement';
import SolatTimes from '../../Component/SolatTimes/SolatTimes';
import './Bottom.css';

function Bottom() {
    return(
        <div className='bottom bg-primary bg-gradient'>
            <div className='container-fluid no-padding'>
                <SolatTimes />
                <Announcement />
            </div>
        </div>
    );
}

export default Bottom;