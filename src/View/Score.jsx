import { 
  RadialBarChart,
  RadialBar,
 } from "recharts"

const Score = ({user}) => {

  const multiplyByHundred = nb => nb * 100 

  const dataValue = user.todayScore

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
