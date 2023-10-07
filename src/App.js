import './App.css';
import Navbar from './header/Navbar';
import Accueil from './pages/Accueil';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
   <>
   <Navbar/>
  <Routes>
    <Route path="/" element={ <Accueil/>}/>
  </Routes>
   </>
  )
}

export default App;
