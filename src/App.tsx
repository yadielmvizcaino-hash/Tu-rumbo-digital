/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import Estudio from './pages/Estudio';
import Galeria from './pages/Galeria';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-background font-body-base text-body-base overflow-x-hidden selection:bg-primary-container selection:text-background min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/estudio" element={<Estudio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
