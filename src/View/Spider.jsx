import { 
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
 } from "recharts"

const Spider = ({perf}) => {

    const value = perf.data
    const sportProperties = perf.kind
    const translate = {
      "strength" : "force",
      "speed" : "vitesse",
      "intensity" : "intensité"
    }

    value.forEach(x => console.log(x.value))

    const data = []

    for (const [key, value] of Object.entries(sportProperties)){
      data[key - 1] = {
        "subject" : translate[value] ? translate[value] : value,
      }
    }

    Object.defineProperties(data, {
      'A': value
    })

    // console.log('sans', sportProperties)
    // console.log('keys', Object.keys(sportProperties))
    // console.log('values', Object.values(sportProperties))
    // console.log('entries', Object.entries(sportProperties))
    console.log('data object', data)
    // console.log('value', value)

    // utiliser la data kind comme index pour trouver les matieres

    const dataTest = [
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
        }
      ]

    return (
        <div className='spider'>          
            <RadarChart 
              outerRadius={70} 
              width={200} 
              height={200} 
              data={data}>
                <PolarGrid PolarAngleAxis='red' PolarAngleAxis='' />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: 'rgba(255, 255, 255, 0.774)' }}
                  axisLine='false' />
                <Radar 
                  name="Mike" 
                  //dataKey="A" 
                  fill="#ff0000" 
                  fillOpacity={0.6} />
            </RadarChart >
        </div>
    )
}

export default Spider
