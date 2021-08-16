import Welcome from "../Components/Welcome"
import Activity from "./Activity"
import AverageActivity from "./AverageActivity"
import Spider from "./Spider"
import Score from "./Score"
import Calorie from "./Calorie"

import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import useFetch from '../Fetch'

const Canva = ({data, dataActivity, dataAverage, dataPerf}) => {

    const history = useHistory()
    const userId = history.location.pathname
    const url = history.location.pathname

    const BASE_URL = `http://localhost:3000${userId}`
    const BASE_URL_ACTIVITY = `http://localhost:3000${userId}/activity`
    const BASE_URL_AVERAGE = `http://localhost:3000${userId}/average-sessions`
    const BASE_URL_PERF = `http://localhost:3000${userId}/performance`

    console.log(BASE_URL_ACTIVITY);
    console.log('http://localhost:3000/user/18/activity');

    const user = useFetch(BASE_URL)
    const activity = useFetch(BASE_URL_ACTIVITY)
    const average = useFetch(BASE_URL_AVERAGE)
    const perf = useFetch(BASE_URL_PERF)
    console.log(perf)
    
    //const [user, setUser] = useState(null)
    //const [activity, setActivity] = useState(null)
    //const [average, setAverage] = useState(null)
    // const [perf, setPerf] = useState(null)

    /**
     * That useEffet return a user object filtered by ID
     * due to the URL PATHNAME
     * @param {useHistory} url = history.location.pathname
     * @param {JSON Array} data = JSON
     * @return {Object} Object
     */
     
     // eEffect(() => {
     //   //const currentUser = data
     //   //   .filter(user => `/user/${user.id}` === url)
     //   
     //   //const currentActivity = dataActivity
     //   //   .filter(activity => `/user/${activity.userId}` === url)
     //   
     //   //const currentAverage = dataAverage
     //   //   .filter(average => `/user/${average.userId}` === url)
     //   
     //   const currentPerf = dataPerf
     //      .filter(perf => `/user/${perf.userId}` === url)
     //   
     //   //setUser(currentUser[0])
     //   //setActivity(currentActivity[0])
     //   // setAverage(currentAverage[0])
     //   setPerf(currentPerf[0])
     //  }, [])

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

{/*
    if (user) {
        return (
            <div className='canva'>
                <Welcome user={user} />
                <div className='screen'>
                    <div className='screen-left'>
                        <Activity activity={activity} />
                        <div className='bottom-activity'>
                            <AverageActivity average={average} />
                            <Spider perf={perf} />
                            <Score />
                        </div>
                    </div>
                    <Calorie user={user} />
                </div>
            </div>
        )         
     } return null
  
    return (
        <div className='canva'>
            {user && <Welcome user={user} />}
            {user && (
            <div className='screen'>
                <div className='screen-left'>
                    <Activity activity={activity} />
                    <div className='bottom-activity'>
                        <AverageActivity average={average} />
                        <Spider perf={perf} />
                        <Score />
                    </div>
                </div>
                <Calorie user={user} />
            </div>
            )}
        </div>
    )
*/}
}

export default Canva
