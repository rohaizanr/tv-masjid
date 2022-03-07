import Clock from '../../Component/Clock/Clock';
import HijriCalender from '../../Component/HijriCalender/HijriCalender';
import MasjidName from '../../Component/MasjidName/MasjidName';
import './Top.css';

function Top() {
    return(
        <div class="container py-3 mt-3">
            <div class="row">
                <div class="col-1 float-md-left"><HijriCalender /></div>
                <div class="col-10"><MasjidName /></div>
                <div class="col-1 float-md-right"><Clock /></div>
                
            </div>
            
            
            
        </div>
    );
}

export default Top;