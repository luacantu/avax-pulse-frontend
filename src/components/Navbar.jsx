const navLinks = ['Academy', 'Docs', 'Events', 'Stats'];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/5 bg-backdrop/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/90 font-semibold text-lg drop-shadow-glow">
            A
          </span>
          <span className="text-lg font-semibold tracking-wide">AVAX Pulse</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted/90 md:flex">
          {navLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-white">
              {link}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/10 bg-panel/50 px-4 py-2 text-xs uppercase tracking-wide text-muted transition hover:border-accent/80 hover:text-white">
              Join Waitlist
            </button>
            <button className="rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black shadow-md shadow-accent/30 transition hover:drop-shadow-glow">
              Launch App
            </button>
          </div>
        </nav>
        <button className="md:hidden" aria-label="Toggle menu">
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
