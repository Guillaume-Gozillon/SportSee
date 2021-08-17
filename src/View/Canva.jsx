import Welcome from "../Components/Welcome"
import Activity from "./Activity"
import AverageActivity from "./AverageActivity"
import Spider from "./Spider"
import Score from "./Score"
import Calorie from "./Calorie"

import { useHistory } from "react-router-dom"
import useFetch from '../Hooks/useFetch'

const Canva = () => {

    const history = useHistory()
    const BASE_URL = `http://localhost:3000${history.location.pathname}`

    const BASE_URL_ACTIVITY = `${BASE_URL}/activity`
    const BASE_URL_AVERAGE = `${BASE_URL}/average-sessions`
    const BASE_URL_PERF = `${BASE_URL}/performance`

    /**
    * useFetch => fetch the data due to the URL PATHNAME
    * @param {String} url = BASE_URL + Id (history.location.pathname)
    * @return {Object} Data fetched by Id
    */

    const user = useFetch(BASE_URL)
    const activity = useFetch(BASE_URL_ACTIVITY)
    const average = useFetch(BASE_URL_AVERAGE)
    const perf = useFetch(BASE_URL_PERF)


    const fragments = user && activity && average && perf

     return (
        fragments && (
           <div className='canva'> 
               <Welcome user={user} />
               <div className='screen'>
                   <div className='screen-left'>
                       <Activity activity={activity} />
                       <div className='bottom-activity'>
                           <AverageActivity average={average} />
                           <Spider perf={perf} />
                           <Score user={user} />
                       </div>
                   </div>
                   <Calorie user={user} />
               </div>
           </div>
       )
   )
}

export default Canva
