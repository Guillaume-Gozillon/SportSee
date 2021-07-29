import fire from '../img/fire.svg'
import meat from '../img/meat.svg'
import fruit from '../img/fruit.svg'
import junkfood from '../img/junkfood.svg'

const Calorie = ({user}) => {

    const calories = user.keyData.calorieCount
    const proteines = user.keyData.proteinCount
    const glucides = user.keyData.carbohydrateCount
    const lipides = user.keyData.lipidCount

    /**
     * That function return a number with commas
     * @param {number}
     * @return {number} number with commaser with commas
     */

    const nbWithCommas = nb => nb
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

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
