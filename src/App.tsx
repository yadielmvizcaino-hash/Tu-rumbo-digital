import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Studio from './pages/Studio';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/estudio" element={<Studio />} />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
