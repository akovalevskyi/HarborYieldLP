import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ManifestoPage } from './pages/ManifestoPage';
import { StrategiesPage } from './pages/StrategiesPage';
import { IssuersPage } from './pages/IssuersPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
          <Route path="/strategies" element={<StrategiesPage />} />
          <Route path="/issuers" element={<IssuersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}