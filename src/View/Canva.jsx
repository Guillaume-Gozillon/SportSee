import Welcome from "../Components/Welcome"
import Activity from "./Activity"
import LengthActivity from "./LengthActivity"
import Spider from "./Spider"
import Score from "./Score"
import Calorie from "./Calorie"

const Canva = ({data}) => {
    return (
        <div className='canva'>
            <Welcome data={data} />
            <div className='screen'>
                <div className='screen-left'>
                    <Activity />
                    <div className='bottom-activity'>
                        <LengthActivity />
                        <Spider />
                        <Score />
                    </div>
                </div>
                <Calorie />
            </div>
        </div>
    )
}

export default Canva
