import { BrowserRouter } from 'react-router-dom';
import logo from '../assets/icons_assets/Logo.svg'
import Nav from './Nav'

function Header() {
    return (
        <>
            <header className="header">
                <img src={logo} alt=""></img>
            </header>
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        </>
    )
}

export default Header;
