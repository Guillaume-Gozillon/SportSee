import { 
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
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
            <p>Type d'activité</p>                 
            <RadarChart outerRadius={90} width={230} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar 
                    name="Mike" 
                    dataKey="A" 
                    fill="#ff0000" 
                    fillOpacity={0.6} 
                />
            </RadarChart>
        </div>
    )
}

export default Spider
