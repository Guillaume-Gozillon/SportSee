const Welcome = ({data}) => {

    const name = data[0].userInfos.firstName

    return (
        <div>
            <h1 className='title'>{`Bonjour ${name}`}</h1>
            <p>Félicitation vous avez atteind vos objectifs 🤘</p>
        </div>
    )
}

export default Welcome
