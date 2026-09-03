import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Stack from './pages/Stack';
import Notes from './pages/Notes';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stack" element={<Stack />} />
          <Route path="notes" element={<Notes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work/:slug" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
