const features = [
  {
    title: 'Dynamic Polls',
    description:
      'Launch sentiment checks in seconds with pre-built templates optimized for Avalanche communities.',
    icon: '🗳️',
  },
  {
    title: 'Market Predictions',
    description:
      'Crowdsource directional bets across DeFi, gaming, and infrastructure to stay ahead of ecosystem shifts.',
    icon: '📈',
  },
  {
    title: 'Community Rewards',
    description:
      'Recognize on-chain contributors with gamified badges and seasonal reward drops.',
    icon: '🎁',
  },
];

const Features = () => {
  return (
    <section className="relative border-b border-white/5 bg-backdrop">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Built for Avalanche Communities</h2>
          <p className="mt-4 text-muted">
            Tools designed to capture sentiment, align incentives, and coordinate the next wave of network growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col gap-4 rounded-3xl border border-white/5 bg-panel/70 p-6 transition hover:border-accent/70 hover:bg-panel/90"
            >
              <span className="text-3xl drop-shadow-glow">{feature.icon}</span>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.description}</p>
              <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
