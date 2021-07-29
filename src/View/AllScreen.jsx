import Header from '../Components/Header'
import VerticalMenu from '../Components/VerticalMenu'
import Canva from './Canva'

import { USER_MAIN_DATA as data } from '../data'
import { USER_ACTIVITY as dataActivity } from '../data'
import { USER_AVERAGE_SESSIONS as dataAverage } from '../data'
import { USER_PERFORMANCE as dataPerf } from '../data'

export const AllScreen = () => {
    return (
        <div className='application-container'>
            <Header/>
            <VerticalMenu/>
            <Canva 
                data={data} 
                dataActivity={dataActivity}
                dataAverage={dataAverage}
                dataPerf={dataPerf}/>
        </div>
    )
}

export default AllScreen
