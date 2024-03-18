// import logo from './logo.svg';
import './assets/App.css';
import './assets/Media.css';
import About from './components/About';
import Header from './components/Header/index';
import Home from './components/Home/index';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}
