import { 
  RadialBarChart,
  RadialBar,
 } from "recharts"

const Score = ({user}) => {

  const dataValue = user.todayScore

  const multiplyByHundred = nb => nb * 100 

  /**
   * To create an unfilled percentage circle, we need a comparative value.
   * The value of the data is between 0 and 1.
   * Then, to get a circle in percentage this value will be compared to 1
   * 
   * We will create a new table with the API data
   * @param {Number} API data
   * @return {Array} Data source used by <RadialBarChart />
   */

  const data = [
    {
      "scoreBar": dataValue,
      "fill": "rgba(255, 0, 0, 0.897)"
    },
    {
      "scoreBar": 1,
      "fill": "#FBFBFB"
    }
  ]

      return (
        <div className='score'>
            <p className='score-txt'>Score</p>
            <RadialBarChart 
              width={730} 
              height={250} 
              innerRadius="82%" 
              outerRadius="60%"
              data={data} 
              startAngle={90}
              endAngle={450} >
                <RadialBar 
                  isAnimationActive={false}
                  minAngle={15}                   
                  background clockWise={true}
                  cornerRadius="50%"
                  dataKey='scoreBar' 
                />
            </RadialBarChart>
            <div className='goal'>
              <span className='bolder'>{
                  multiplyByHundred(dataValue)
                }%
              </span>
              <span>
                <p>de votre</p>
              </span>
              <span>
                <p>objectif</p>
              </span>
            </div>
        </div>
    )
}

export default Score
