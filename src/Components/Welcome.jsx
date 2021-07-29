const Welcome = ({user}) => {

    const name = user.userInfos.firstName

    return (
        <div>
            <h1 className='title'>{`Bonjour ${name}`}</h1>
            <p>Félicitation vous avez atteind vos objectifs 🤘</p>
        </div>
    )
}

export default Welcome
