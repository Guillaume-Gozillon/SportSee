import { 
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
 } from "recharts"

const Spider = ({perf}) => {

    console.log(perf.data);
    const value = perf.data
    const kind = perf.kind

    const data = [
        {
          "subject": "Math",
          "A": 120,
          "B": 10,
          "fullMark": 150
        },
        {
          "subject": "Chinese",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "English",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Geography",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Physics",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "History",
          "A": 65,
          "B": 85,
          "fullMark": 150
        }
      ]

    return (
        <div className='spider'>          
            <RadarChart outerRadius={70} width={200} height={200} data={data}>
                <PolarGrid PolarAngleAxis='red' PolarAngleAxis=''  />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: 'rgba(255, 255, 255, 0.774)' }}
                  axisLine='false'
                />
                <Radar 
                  name="Mike" 
                  dataKey="A" 
                  fill="#ff0000" 
                  fillOpacity={0.6} 
                />
            </RadarChart >
        </div>
    )
}

export default Spider
