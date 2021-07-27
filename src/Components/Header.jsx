import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img src={logo} className='logo' alt="logo" />
            </Link>
            <ul>
                <li>
                    <Link to='/'>Accueil</Link>
                </li>
                <li>
                    <Link to='/'>Profil</Link>
                </li>
                <li>
                    <Link to='/'>Réglage</Link>
                </li>
                <li>
                    <Link to='/'>Communauté</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
