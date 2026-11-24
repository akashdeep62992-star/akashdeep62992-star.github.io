// All portfolio content lives here, so updating the site means editing data, not markup.

export const profile = {
  name: 'Akashdeep',
  role: 'Backend Developer',
  github: 'https://github.com/akashdeep62992-star',
  // Add these to show extra contact buttons:
  email: 'akashdeep62992@gmail.com',
  linkedin: 'https://www.linkedin.com/in/akash-deep-967ba0451/',
  resume: '',
}

export const projects = [
  {
    id: 'devpulse',
    name: 'DevPulse',
    kicker: 'Uptime & API monitoring',
    status: 'live',
    host: 'devpulse-hxkl.onrender.com',
    demo: 'https://devpulse-hxkl.onrender.com',
    repo: 'https://github.com/akashdeep62992-star/devpulse',
    description:
      'Checks websites and APIs on a schedule, records response times, opens incidents when a service goes down, sends alerts and publishes a public status page.',
    highlights: [
      'Scheduler claims each due monitor with an atomic update, so several API instances can run without checking a monitor twice.',
      'Incident detection is a pure, unit-tested state machine. A service is marked down only after 2 failures in a row, which avoids false alerts.',
      'MongoDB aggregation pipelines compute uptime %, average and p95 response times over 24h, 7d and 30d.',
      'SSRF protection blocks private networks and cloud metadata addresses. Also Helmet, rate limiting and Zod validation.',
    ],
    tags: ['Node.js', 'Express 5', 'MongoDB', 'React 19', 'Tailwind v4', 'Vitest'],
    sideLabel: 'Architecture',
    diagram: `React (Vite) ──/api──▶ Express API ──▶ MongoDB
                          │              ▲
                          ▼              │
                 Scheduler (5s tick) ────┘
                          │ claims due monitors
                          ▼
                 Checker (fetch + SSRF guard)
                          ▼
                 State machine ──▶ Incident + Alert`,
    stats: [
      ['p95', 'latency tracked'],
      ['2×', 'failures before alert'],
      ['30d', 'TTL data retention'],
    ],
  },
  {
    id: 'contrib-tracker',
    name: 'Open Source Contribution Tracker',
    shortName: 'Contribution Tracker',
    kicker: 'Developer tooling',
    status: 'live',
    host: 'contrib-tracker.onrender.com',
    demo: 'https://contrib-tracker.onrender.com',
    repo: 'https://github.com/akashdeep62992-star/contrib-tracker',
    description:
      'Tracks open-source work on GitHub: pull requests, issues, merge rate and progress toward goals like GSoC or LFX. It also surfaces beginner-friendly issues in repos you follow.',
    highlights: [
      'Dashboard with total and merged PRs, merge rate, average days to merge and a 12-month activity chart.',
      'Goals such as “5 merged PRs in sympy/sympy by March” that update on every sync.',
      'Ships as one Docker service: Flask serves the built React app and the /api routes from a single URL.',
      'pytest suite with the GitHub Search API mocked.',
    ],
    tags: ['Python', 'Flask 3', 'SQLAlchemy', 'PostgreSQL', 'React 18', 'Docker', 'pytest'],
    sideLabel: 'How it deploys',
    diagram: `Dockerfile
 ├─ stage 1: npm run build  (React + Vite)
 └─ stage 2: gunicorn Flask
              ├─ /api/*   GitHub sync, goals
              └─ /*       static React build

render.yaml ─▶ web service + PostgreSQL`,
    stats: [
      ['1', 'URL, no CORS'],
      ['12mo', 'activity chart'],
      ['IaC', 'Render blueprint'],
    ],
  },
  {
    id: 'forex',
    name: 'Forex Prediction App',
    shortName: 'Forex Prediction',
    kicker: 'Machine learning',
    status: 'source',
    host: 'github.com/akashdeep62992-star/forex-prediction-project',
    repo: 'https://github.com/akashdeep62992-star/forex-prediction-project',
    description:
      'A Streamlit app that forecasts forex price movements and turns the forecast into a trade plan with risk controls.',
    highlights: [
      'LSTM, GRU and XGBoost models with engineered features and indicators (EMA, RSI, MACD).',
      'K-means clustering to detect support and resistance zones.',
      'Trade management: ATR-based stop-loss, 0.5–5% risk per trade, position sizing and risk-to-reward.',
      'Backtesting with win rate, profit factor, drawdown and equity curves.',
    ],
    tags: ['TensorFlow', 'scikit-learn', 'XGBoost', 'pandas', 'Streamlit', 'Docker'],
    sideLabel: 'Pipeline',
    diagram: `CSV prices ─▶ feature engineering
                 │  EMA · RSI · MACD
                 ▼
     ┌───────────┼───────────┐
    LSTM        GRU       XGBoost
     └───────────┼───────────┘
                 ▼
     K-means zones ─▶ trade plan
                 ▼
            backtest report`,
    stats: [
      ['3', 'forecast models'],
      ['ATR', 'stop-loss'],
      ['CSV', 'trade export'],
    ],
  },
]

export const skills = [
  { group: 'Backend', items: ['Node.js', 'Express', 'Python', 'Flask', 'REST APIs', 'JWT auth', 'Zod'] },
  { group: 'Data', items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'SQLAlchemy', 'SQLite', 'Aggregations'] },
  { group: 'Ops & quality', items: ['Docker', 'Render', 'Git', 'Vitest', 'pytest', 'Helmet', 'Rate limiting'] },
  { group: 'Frontend & ML', items: ['React', 'Vite', 'Tailwind', 'Recharts', 'TensorFlow', 'scikit-learn'] },
]

export const timeline = [
  { when: 'Jul 2026', title: 'Forex Prediction App', text: 'First ML project: LSTM, GRU and XGBoost forecasting with a Streamlit UI.' },
  { when: 'Nov 2026', title: 'DevPulse launched', text: 'Full-stack monitoring platform deployed with MongoDB Atlas.' },
  { when: 'Nov 2026', title: 'Contribution Tracker launched', text: 'Flask + React app, Dockerised, deployed with PostgreSQL.' },
  { when: 'Next', title: 'Open-source contributions', text: 'First pull requests to SymPy, then DevPulse v2 with queues and CI.' },
]
