import { 
    BarChart, 
    Bar, 
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts"

const Activity = ({activity}) => {

    const activityValue = activity.sessions

    const data = []

    for (const [key, value] of Object.entries(activityValue)){
        data[key] = {
            "day": Number(key) + 1,
            "calories": value.calories,
            "kilogram": value.kilogram
        }
    }

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
                width={800} 
                height={175} 
                data={data}
                barSize={7}
                margin={{top: 0, right: 155, bottom: 0, left: -35}}
            >
                <CartesianGrid strokeDasharray="2 4" vertical='' />
                <XAxis 
                    dataKey="day" 
                    tickCount='13' 
                    dy={0}
                    tick={{ fill: '#0000005a', fontSize: '15px', dy: 10}}
                    tickLine={false} />
                <YAxis 
                    tickCount='3' 
                    axisLine={false} 
                    tick={{dx: 675, fill: '#0000005a', fontSize: '15px'}}
                    tickLine={false} />
                <Tooltip />
                <Bar 
                    dataKey="kilogram" 
                    fill="#000000ce" 
                    legendType='line'
                    radius={[10, 10, 0, 0]} />
                <Bar 
                    dataKey="calories" 
                    fill="#ff0000b2" 
                    radius={[10, 10, 0, 0]} />
            </BarChart>
        </div>
    )
}

export default Activity
