import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ReservationsForm from './components/ReservationsForm';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <ReservationsForm />
      <Main />
      <Footer />
    </>
  );
}

export default App;
