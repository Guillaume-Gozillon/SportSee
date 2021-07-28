import fire from '../img/fire.svg'
import meat from '../img/meat.svg'
import fruit from '../img/fruit.svg'
import junkfood from '../img/junkfood.svg'

const Calorie = ({data}) => {

    const calories = data[0].keyData.calorieCount
    const proteines = data[0].keyData.proteinCount
    const glucides = data[0].keyData.carbohydrateCount
    const lipides = data[0].keyData.lipidCount

    const nbWithCommas = nb => {
        return nb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

    return (
        <div className='calorie'>
            <div className='calorie-container'>
                <div className='icons-calorie fire'>
                    <img src={fire} alt="flamme" />
                </div>
                <div className='test'>
                    <p className='cal-value'>{`${nbWithCommas(calories)}kCal`}</p>
                    <p>Calories</p>
                </div>
            </div>

            <div className='calorie-container'>
                <div className='icons-calorie meat'>
                    <img src={meat} alt="flamme" />
                </div>
                <div className='test'>
                    <p className='cal-value'>{`${proteines}g`}</p>
                    <p>Proteines</p>
                </div>
            </div>

            <div className='calorie-container'>
                <div className='icons-calorie fruit'>
                    <img src={fruit} alt="flamme" />
                </div>
                <div className='test'>
                    <p className='cal-value'>{`${glucides}g`}</p>
                    <p>Glucides</p>
                </div>
            </div>

            <div className='calorie-container'>
                <div className='icons-calorie junkfood'>
                    <img src={junkfood} alt="flamme" />
                </div>
                <div className='test'>
                    <p className='cal-value'>{`${lipides}g`}</p>
                    <p>Lipides</p>
                </div>
            </div>

        </div>
    )
}

export default Calorie
