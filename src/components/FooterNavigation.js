import { Link } from 'react-router-dom';


const FooterNavigation = () => (
  <div>
    <h4>Navigation</h4>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/reservations">Reservations</Link></li>
      <li><Link to="/order">Order Online</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>

  </div>
);

export default FooterNavigation;
