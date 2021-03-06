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

    /**
     * A loop through the props object to create a 
     * new array that matches with the dataKey requested
     * @param {Object} props
     * @return {Array} used by <BarChart /> and <CustomTooltip />
     */

    for (const [key, value] of Object.entries(activityValue)){
        data[key] = {
            "day": Number(key) + 1,
            "calories": value.calories,
            "kilogram": value.kilogram
        }
    }

    /**
     * A function that compares the index on mouse hover (label) 
     * with the API data to create the Tooltip's data
     * @param {Array} label index
     * @return {Number} Data used by <CustomTooltip />
     */
      
    const getCalories = label => {
        if (label - 1 === 0) {
            return data[label - 1].calories
        }
        if (label - 1 === 1) {
            return data[label - 1].calories
        }
        if (label - 1 === 2) {
            return data[label - 1].calories
        }
        if (label - 1 === 3) {
            return data[label - 1].calories
        }
        if (label - 1 === 4) {
            return data[label - 1].calories
        }
        if (label - 1 === 5) {
            return data[label - 1].calories
        }
        if (label - 1 === 6) {
            return data[label - 1].calories
        }
    }

    const getKilogram = label => {
        if (label - 1 === 0) {
            return data[label - 1].kilogram
        }
        if (label - 1 === 1) {
            return data[label - 1].kilogram
        }
        if (label - 1 === 2) {
            return data[label - 1].kilogram
        }
        if (label - 1 === 3) {
            return data[label - 1].kilogram
        }
        if (label - 1 === 4) {
            return data[label - 1].kilogram
        }
        if (label - 1 === 5) {
            return data[label - 1].kilogram
        }
        if (label - 1 === 6) {
            return data[label - 1].kilogram
        }
    }

    /**
     * Function that create HTMLElement for the <Tooltip /> mouse over
     * @param {Function} Recharts's parameters
     * @return {HTMLElement} Create the DOM
     */
    
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p>{getCalories(label)}kg</p>
                    <p>{getKilogram(label)}Kcal</p>
                </div>
            )
        }
        return null
    }

    return (
        <div className='activity'>
            <div className='activity-info-container'>
                <p>Activit?? quotidienne</p>
                <div className='activity-info'>
                    <div className='weight'>
                        <div className='circle blackC'></div>
                        <p>Poids (kg)</p>
                    </div>
                    <div className='weight'>
                        <div className='circle blackR'></div>
                        <p>Calories br??l??s (kCal)</p>
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
                    tick={{dx: 680, fill: '#0000005a', fontSize: '15px'}}
                    tickLine={false} />
                <Tooltip 
                    cursor={{fill: '#0000001c'}} 
                    content={<CustomTooltip />} />
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