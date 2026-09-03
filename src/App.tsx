import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const About = lazy(() => import('./pages/About'));
const Stack = lazy(() => import('./pages/Stack'));
const Notes = lazy(() => import('./pages/Notes'));
const Contact = lazy(() => import('./pages/Contact'));

// A simple loading fallback
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          } />
          <Route path="stack" element={
            <Suspense fallback={<PageLoader />}>
              <Stack />
            </Suspense>
          } />
          <Route path="notes" element={
            <Suspense fallback={<PageLoader />}>
              <Notes />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          } />
          <Route path="work/:slug" element={
            <Suspense fallback={<PageLoader />}>
              <ProjectDetail />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
