import { 
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
 } from "recharts"

const Spider = ({perf}) => {

    const statValue = perf.data
    const sportProperties = perf.kind

    const translate = {
      "strength": "force",
      "speed": "vitesse",
      "intensity": "intensité"
    }

    const data = []

    // On parcours la paire clé/valeur
    for (const [key, objValue] of Object.entries(sportProperties)){
      // -1 car l'obj commence à 1
      data[key - 1] = {
        // Ternary condition to translate ENG to FR
        "subject": translate[objValue] ? translate[objValue] : objValue,
        // On parcours le tableau des stats en revenant à l'index initial
        "A": statValue[key - 1].value
      }
    }

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
                  dataKey="A" 
                  fill="#ff0000" 
                  fillOpacity={0.6} />
            </RadarChart >
        </div>
    )
}

export default Spider
