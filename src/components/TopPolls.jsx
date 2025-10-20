import { useState } from 'react';

const initialPolls = [
  {
    id: 1,
    tag: 'Sentiment',
    question: 'Will AVAX close above $60 this month?',
    endsInHours: 42,
    options: [
      { label: 'Yes', votes: 128 },
      { label: 'No', votes: 95 },
    ],
  },
  {
    id: 2,
    tag: 'DeFi',
    question: 'Which AVAX dApp will onboard the most users next quarter?',
    endsInHours: 68,
    options: [
      { label: 'Trader Joe', votes: 76 },
      { label: 'Dexalot', votes: 54 },
      { label: 'GoGoPool', votes: 38 },
    ],
  },
  {
    id: 3,
    tag: 'Ecosystem',
    question: 'Should Avalanche host a monthly community AMA?',
    endsInHours: 18,
    options: [
      { label: 'Yes', votes: 212 },
      { label: 'No', votes: 32 },
      { label: 'Only Quarterly', votes: 58 },
    ],
  },
];

const TopPolls = () => {
  const [polls, setPolls] = useState(initialPolls);

  const handleVote = (pollId, optionIndex) => {
    setPolls((current) =>
      current.map((poll) => {
        if (poll.id !== pollId) return poll;
        const updatedOptions = poll.options.map((option, idx) =>
          idx === optionIndex ? { ...option, votes: option.votes + 1 } : option
        );
        return { ...poll, options: updatedOptions };
      })
    );
  };

  return (
    <section className="relative bg-backdrop py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Live Insight</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Top Community Polls</h2>
          </div>
          <button className="self-start rounded-full border border-white/10 bg-panel/70 px-5 py-2 text-sm font-medium text-muted transition hover:border-accent/70 hover:text-white">
            View All Polls
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {polls.map((poll) => {
            const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

            return (
              <article
                key={poll.id}
                className="flex h-full flex-col gap-6 rounded-3xl border border-white/5 bg-panel/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-accent/80 hover:shadow-[0_0_25px_rgba(232,65,66,0.12)]"
              >
                <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {poll.tag}
                </span>
                <h3 className="text-xl font-semibold leading-snug">{poll.question}</h3>
                <div className="flex flex-col gap-3">
                  {poll.options.map((option, index) => {
                    const percent = totalVotes === 0 ? 0 : Math.round((option.votes / totalVotes) * 100);
                    return (
                      <div key={option.label} className="rounded-2xl border border-white/5 bg-backdrop/60 p-3">
                        <button
                          onClick={() => handleVote(poll.id, index)}
                          className="flex w-full items-center justify-between gap-4 rounded-full bg-panel/80 px-4 py-2 text-left text-sm font-medium transition hover:bg-accent/20 hover:text-white hover:drop-shadow-glow"
                        >
                          <span>{option.label}</span>
                          <span className="text-xs text-muted">Vote</span>
                        </button>
                        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-accent transition-all"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-muted">
                          <span>{option.votes} votes</span>
                          <span>{percent}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-auto flex items-center justify-between text-xs text-muted">
                  <span>{totalVotes} total votes</span>
                  <span>ends in {poll.endsInHours}h</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopPolls;
