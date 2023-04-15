import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Auth } from "./components/auth"
import { MusicPlayer } from "./components/player"
import { Home } from "./components/home"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Auth />} />
        <Route path='/dashboard' element={<MusicPlayer />} />
        
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
