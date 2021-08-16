import Header from '../Components/Header'
import VerticalMenu from '../Components/VerticalMenu'
import Canva from './Canva'

const AllScreen = () => {

    return (
        <div className='application-container'>
            <Header/>
            <VerticalMenu/>
            <Canva />
        </div>
    )
}

export default AllScreen
