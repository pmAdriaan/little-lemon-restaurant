import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';

function Nav() {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light'>
                <ul className='navbar-nav'>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/about' className='nav-item nav-link'>About</Link>
                    <Link to='/menu' className='nav-item nav-link'>Menu</Link>
                    <Link to='/reservations' className='nav-item nav-link'>Reservations</Link>
                    <Link to='/order' className='nav-item nav-link'>Order Online</Link>

                    <Link to='/login' className='nav-item nav-link'>Login</Link>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/reservations' element={<Reservations />} />
                <Route path='/order' element={<OrderOnline />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    );
};

export default Nav;
