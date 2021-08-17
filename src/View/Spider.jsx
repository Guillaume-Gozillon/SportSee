import PropTypes from "prop-types";
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

    /**
     * A loop through the props object to create a 
     * new array that matches with the dataKey requested
     * 
     * The stat array from data start at 1 => [key - 1]
     * @param {Object} props
     * @param {Object} {translate} to translate ENG to FR
     * @return {Array} used by <RadarChart />
     */

    for (const [key, objValue] of Object.entries(sportProperties)){

      data[key - 1] = {
        "property": translate[objValue] ? translate[objValue] : objValue,
        "stat": statValue[key - 1].value
      }
    }

    return (
        <div className='spider'>          
            <RadarChart 
              outerRadius={70} 
              width={240} 
              height={200} 
              data={data}>
                <PolarGrid PolarAngleAxis='red' PolarAngleAxis='' />
                <PolarAngleAxis 
                  dataKey="property" 
                  tick={{ fill: 'rgba(255, 255, 255, 0.774)' }}
                  vertical='' />
                <Radar 
                  name="Mike" 
                  dataKey="stat" 
                  fill="#ff0000" 
                  fillOpacity={0.6} />
            </RadarChart >
        </div>
    )
}

Spider.propTypes = {
  perf: PropTypes.object
}

export default Spider
