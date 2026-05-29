import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SportsPage from './pages/SportsPage';
import SportDetailPage from './pages/SportDetailPage';
import AthletesPage from './pages/AthletesPage';
import AthleteDetailPage from './pages/AthleteDetailPage';
import TeamPage from './pages/TeamPage';
import ProgramsPage from './pages/ProgramsPage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';
import JournalDetailPage from './pages/JournalDetailPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/sports/:id" element={<SportDetailPage />} />
          <Route path="/athletes" element={<AthletesPage />} />
          <Route path="/athletes/:id" element={<AthleteDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:id" element={<JournalDetailPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
