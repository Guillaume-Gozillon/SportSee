import { 
    PieChart,
    Pie
 } from "recharts"

const Score = () => {

    const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        }
      ]

    return (
        <div className='score'>
            <p>Score</p>
            <PieChart width={200} height={200}>
                <Pie 
                    data={data02} 
                    cx="50%" cy="50%" 
                    dataKey="value" 
                    nameKey="name" 
                    innerRadius={60} 
                    outerRadius={80} 
                    fill="#82ca9d" 
                    label 
                />
            </PieChart>
            <p className='goal'><span className='boldit'>12%</span> de votre objectif aujourdhui</p>
        </div>
    )
}

export default Score
