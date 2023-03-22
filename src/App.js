import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projets' element={<Projects />} />
        <Route path='/apropos' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
