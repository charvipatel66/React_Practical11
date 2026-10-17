
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function Navigation() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-3 shadow-lg backdrop-blur-lg">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`rounded-xl px-6 py-3 text-sm font-semibold transition duration-300 ${
            location.pathname === link.path
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-purple-100 hover:text-purple-700'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 px-4 py-10">

        <div className="mx-auto max-w-4xl">

          <header className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
              Welcome to our website
            </p>

            <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
              React <span className="text-purple-600">Navigation</span>
            </h1>

            <p className="mt-4 text-gray-500">
              Explore our website with smooth navigation.
            </p>
          </header>

          <Navigation />

          <main className="mt-8 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-purple-200/40 backdrop-blur-lg sm:p-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="mt-8 text-center text-sm text-gray-500">
            Made with ♥ using React Router
          </footer>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
