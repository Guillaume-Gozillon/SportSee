import Welcome from "../Components/Welcome"
import Activity from "./Activity"
import LengthActivity from "./LengthActivity"
import Spider from "./Spider"
import Score from "./Score"
import Calorie from "./Calorie"

import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"

const Canva = ({data}) => {

    const history = useHistory()
    const url = history.location.pathname
    
    const [user, setUser] = useState(null)

    /**
     * That useEffet return a user object filtered by ID
     * due to the URL PATHNAME
     * @memberof module:React
     * @param {JSON} data JSON
     * @return {Object} Object
     */

     useEffect(() => {
         const currentUser = data
            .filter(user => `/user/${user.id}` === url)

         setUser(currentUser[0])
     }, [data, url])

    return (
        <div className='canva'>
            {user && <Welcome user={user} />}
            {user && (
            <div className='screen'>
                <div className='screen-left'>
                    <Activity />
                    <div className='bottom-activity'>
                        <LengthActivity />
                        <Spider />
                        <Score />
                    </div>
                </div>
                <Calorie user={user} />
            </div>
            )}
        </div>
    )
}

export default Canva
