import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Fundamentacion from './pages/Fundamentacion';
import Equipos from './pages/Equipos';
import Metodologia from './pages/Metodologia';
import Areas from './pages/Areas';
import Laboratorios from './pages/Laboratorios';
import Referencias from './pages/Referencias';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="fundamentacion" element={<Fundamentacion />} />
          <Route path="equipos" element={<Equipos />} />
          <Route path="metodologia" element={<Metodologia />} />
          <Route path="areas" element={<Areas />} />
          <Route path="laboratorios" element={<Laboratorios />} />
          <Route path="referencias" element={<Referencias />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}