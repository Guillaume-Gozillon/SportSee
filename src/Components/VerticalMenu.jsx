import sit from '../img/sit.svg'
import swim from '../img/swim.svg'
import biking from '../img/biking.svg'
import workout from '../img/workout.svg'
import { Link } from 'react-router-dom'

const VerticalMenu = () => {
    return (
        <div className='menu'>
            <Link className='white-icone'>
                <img src={sit} alt="" />
            </Link>
            <Link className='white-icone'>
                <img src={swim} alt="" />
            </Link>
            <Link className='white-icone'>
                <img src={biking} alt="" />
            </Link>
            <Link className='white-icone'>
                <img src={workout} alt="" />
            </Link>
            <p className='copywrite'>Copywrite, SportSee 2021</p>
        </div>
    )
}

export default VerticalMenu
