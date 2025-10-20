import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import TopPolls from './components/TopPolls.jsx';

function App() {
  return (
    <div className="min-h-screen bg-backdrop text-white">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Features />
        <TopPolls />
      </main>
    </div>
  );
}

export default App;
