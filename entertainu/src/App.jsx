import './App.css';
import { Navbar } from './components/Navbar.jsx';
import { Games } from './components/Games.jsx';
import { Footer } from './components/Footer.jsx';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Games/>
     <Footer/>
     
    </div>
  );
}

export default App;
