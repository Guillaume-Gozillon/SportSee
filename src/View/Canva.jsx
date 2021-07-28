import Welcome from "../Components/Welcome"

const Canva = ({data}) => {
    return (
        <div className='canva'>
            <Welcome data={data} />
        </div>
    )
}

export default Canva