import Announcement from '../../Component/Announcement/Announcement';
import Waktu from '../../Component/Waktu/Waktu';
import './Bottom.css';

function Bottom() {
    return(
        <div className='bottom bg-primary bg-gradient'>
            <div className='container-fluid no-padding'>
                <Waktu />
                <Announcement />
            </div>
        </div>
    );
}

export default Bottom;