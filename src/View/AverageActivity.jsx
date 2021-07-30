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
        <div className='average-activity'>
            <p className='average-info'>Durée moyenne des sessions</p>
            <LineChart 
              width={220} 
              height={200} 
              data={data}
              margin={{ top: 60, right: 10, left: 10, bottom: 0 }}>

              <defs>
                <linearGradient id="colorUv">
                  <stop offset="0%" stopColor="rgba(255, 0, 0, 0.24)" />
                  <stop offset="10%" stopColor="#ffffff57" />
                  <stop offset="50%" stopColor="#ffffff9b" />
                  <stop offset="95%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="rgba(255, 0, 0, 0.24)" />
                </linearGradient>
              </defs>

              <CartesianGrid 
                strokeDasharray="3 3" 
                horizontal='' 
                vertical='' />
              <XAxis 
                dataKey="day"
                tickLine='false'
                stroke="rgba(255, 0, 0, 0.041)"
                tick={{ fill: 'rgba(255, 255, 255, 0.774)' }} />
              <Tooltip />
              <Line 
                type="natural" 
                dataKey="sessionLength" 
                stroke="url(#colorUv)"
                strokeWidth={2.7}
                dot='' />
            </LineChart>
        </div>
    )
}

export default AverageActivity
