import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contato from './pages/Contato.jsx';
import "./App.css";
import Jogos from './pages/jogos.jsx';

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/Contato' element={<Contato/>}/>
        <Route path='/Jogos'element={<Jogos/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}