import { 
    BarChart, 
    Bar, 
    CartesianGrid,
    XAxis,
    Tooltip,
} from "recharts"

const Activity = ({activity}) => {

    const data = activity.sessions

    return (
        <div className='activity'>
            <div className='activity-info-container'>
                <p>Activité quotidienne</p>
                <div className='activity-info'>
                    <div className='weight'>
                        <div className='circle blackC'></div>
                        <p>Poids (kg)</p>
                    </div>
                    <div className='weight'>
                        <div className='circle blackR'></div>
                        <p>Calories brûlés (kCal)</p>
                    </div>
                </div>
            </div>
            <BarChart 
                width={700} 
                height={250} 
                data={data}
                barSize={10}
                margin={{top: 10, right: 35, bottom: 10, left: 35}}
            >
                <CartesianGrid strokeDasharray="3 3" vertical='' />
                <XAxis dataKey="day" tickCount='13' />
                <Tooltip />
                <Bar dataKey="kilogram" fill="#000000ce" radius={[10, 10, 0, 0]} />
                <Bar dataKey="calories" fill="#ff0000b2" radius={[10, 10, 0, 0]} />
            </BarChart>
        </div>
    )
}

export default Activity
