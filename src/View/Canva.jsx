import Welcome from "../Components/Welcome"
import Activity from "./Activity"
import AverageActivity from "./AverageActivity"
import Spider from "./Spider"
import Score from "./Score"
import Calorie from "./Calorie"

import { useHistory } from "react-router-dom"
import useFetch from '../Fetch'

const Canva = () => {

    const history = useHistory()
    const userId = history.location.pathname

    const BASE_URL = `http://localhost:3000${userId}`
    const BASE_URL_ACTIVITY = `http://localhost:3000${userId}/activity`
    const BASE_URL_AVERAGE = `http://localhost:3000${userId}/average-sessions`
    const BASE_URL_PERF = `http://localhost:3000${userId}/performance`

    const user = useFetch(BASE_URL)
    const activity = useFetch(BASE_URL_ACTIVITY)
    const average = useFetch(BASE_URL_AVERAGE)
    const perf = useFetch(BASE_URL_PERF)

    // Réécrire la doc

    /**
     * That useEffet return a user object filtered by ID
     * due to the URL PATHNAME
     * @param {useHistory} url = history.location.pathname
     * @param {JSON Array} data = JSON
     * @return {Object} Object
     */

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
