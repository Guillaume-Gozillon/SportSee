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

  //TODO :supprimer BR remplacer par CSS
      return (
        <div className='score'>
            <p>Score</p>
            <RadialBarChart 
              width={730} 
              height={250} 
              innerRadius="82%" 
              outerRadius="60%"
              data={data} 
              startAngle={180}
              endAngle={540} >
                <RadialBar 
                isAnimationActive={false}
                  minAngle={15}                   
                  background clockWise={true}
                  dataKey='scoreBar' />
            </RadialBarChart>
            <p className='goal'>
              <span className='bolder'>{
                multiplyByHundred(dataValue)
              }%</span><br/> de votre <br/>objectif
            </p>
        </div>
    )
}

export default Score
