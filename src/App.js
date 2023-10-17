import './App.css';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Skills from './components/Skills.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
