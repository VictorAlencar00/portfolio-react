// import logo from './logo.svg';
import './assets/App.css';
import './assets/Media.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Header from './components/Header/index';
import Home from './components/Home/index';
import Projects from './components/Projects';
import './index.css';

export default function App() {
  return (
    <div className="App font-poppins">
      {' '}
      {/* Aplicando a fonte Poppins globalmente */}
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contacts />
      </main>
    </div>
  );
}
