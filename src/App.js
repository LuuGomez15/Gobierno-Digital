// Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import { Items } from "./components/pages/Items";
import { Start } from "./components/pages/Start";
import { Footer } from './components/footer/Footer';
import { Pokemon } from "./components/pages/Pokemon";
import { Navbar } from "./components/navigate/Navbar";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/pokemon' element={<Pokemon/>}/>
          <Route path='/description/:pokemon' element={<Items/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App;
