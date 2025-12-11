import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contato from './pages/Contato.jsx';
import "./App.css";
import Jogo from './pages/Jogo.jsx';

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/Contato' element={<Contato/>}/>
        <Route path='/Jogo'element={<Jogo/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}