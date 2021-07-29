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
                </div>
            </div>
            <BarChart 
                width={700} 
                height={250} 
                data={data}
                barSize={15}
                margin={{top: 10, right: 10, bottom: 10, left: 10}}>

                <CartesianGrid strokeDasharray="3 3" vertical='' />
                <XAxis dataKey="day" />
                <Tooltip />
                <Bar dataKey="kilogram" fill="#000000ce" />
                <Bar dataKey="calories" fill="#ff0000b2" />
            </BarChart>
        </div>
    )
}

export default Activity
