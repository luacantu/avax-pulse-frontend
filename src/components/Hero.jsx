const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-center-glow bg-grid-mask opacity-80"></div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-24 pt-24 text-center md:pt-32">
        <span className="rounded-full border border-accent/20 bg-panel/40 px-4 py-1 text-xs uppercase tracking-[0.35em] text-muted">
          Avalanche Ecosystem Pulse
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          AVAX <span className="text-accent">Pulse</span> Platform
        </h1>
        <p className="max-w-2xl text-base text-muted sm:text-lg">
          Monitor on-chain sentiment, surface community priorities, and coordinate governance with real-time polls and insights.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-black transition hover:drop-shadow-glow">
            Open App
          </button>
          <button className="rounded-full border border-white/10 bg-panel/60 px-8 py-3 text-sm font-medium text-muted transition hover:border-accent/60 hover:text-white">
            Learn More
          </button>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2 text-muted">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <span className="text-2xl">﹀</span>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 h-32 w-full bg-gradient-to-t from-backdrop to-transparent"></div>
    </section>
  );
};

export default Hero;
