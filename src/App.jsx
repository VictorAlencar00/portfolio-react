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
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contacts />
      </main>
      <footer className="border-t border-white/10 bg-[#07111f] px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Victor Alencar. Desenvolvido com React.
      </footer>
    </div>
  );
}
