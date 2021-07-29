import { 
    LineChart,
    CartesianGrid,
    XAxis,
    Tooltip,
    Line
 } from "recharts"

const AverageActivity = ({average}) => {

    const data = average.sessions

    return (
        <div className='length-activity'>
            <p>Durée moyenne des sessions</p>
            <LineChart width={300} height={200} data={data}
                margin={{ top: 20, right: 80, left: -40, bottom: 25 }}>
                <defs>
                  <linearGradient id="colorUv">
                    <stop offset="0%" stopColor="#ffffff57" />
                    <stop offset="50%" stopColor="#ffffff9b" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  horizontal='' 
                  vertical='' />
                <XAxis dataKey="day" />
                <Tooltip />
                <Line 
                  type="natural" 
                  dataKey="sessionLength" 
                  stroke="url(#colorUv)"
                  strokeWidth={2.3}
                  dot='' />
            </LineChart>
        </div>
    )
}

export default AverageActivity
