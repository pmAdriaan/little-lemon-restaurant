import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Main />
      <Footer />
    </>
  );
}

export default App;
