import Header from '../Components/Header'
import VerticalMenu from '../Components/VerticalMenu'
import Canva from './Canva'

export const AllScreen = ({data}) => {
    return (
        <div className='application-container'>
            <Header/>
            <VerticalMenu/>
            <Canva data={data}/>
        </div>
    )
}

export default AllScreen
