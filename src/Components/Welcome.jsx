const Welcome = ({data}) => {

    const name = data[0].userInfos.firstName

    return (
        <div>
            <h1 className='title'>{`Bonjour ${name}`}</h1>
        </div>
    )
}

export default Welcome
