# WARDOGS Gold Bar Tracker

A static website that records the in-game **cash price of one WARDOGS gold bar** and tells you whether to **BUY** or **WAIT**. Hosted free on GitHub Pages, updated hourly by GitHub Actions. No server, no dependencies.

## How the signal works
`site/signal.js` scores the latest price (lower cash price = cheaper gold bars):

| Factor | Effect |
|---|---|
| In cheapest 25% of last 30 days | +2 BUY |
| In most expensive 25% | -2 WAIT |
| 3%+ below / above the 7-day average | +1 / -1 |
| z-score <= -1 / >= 1 | +1 / -1 |
| Three falling readings in a row | -1 (might get cheaper) |

Score >= 2 is **BUY**, <= -1 is **WAIT**, otherwise **NEUTRAL**. Tweak the thresholds in one file.

## Quick start
```bash
npm run seed     # sample data so the site works immediately
npm start        # serves ./site locally
npm test
```

## Getting real prices
I could not find an official WARDOGS API, so the data source is yours to configure. The Metaforge WARDOGS section shows a gold bar to cash rate, so check its terms and network calls first, and only use sources that allow automated access.

- **Manual:** `npm run add -- 1685515` (the current cash price of 1 bar)
- **Automatic:** in your repo go to *Settings > Secrets and variables > Actions > Variables* and set:
  - `SOURCE_URL`: a JSON endpoint or page
  - `SOURCE_JSON_PATH`: e.g. `data.goldBar.rate` **or** `SOURCE_REGEX`: a regex with one capture group

Sample data is dropped automatically the first time a real price is recorded.

## Deploy
1. Push to GitHub (branch `main`).
2. *Settings > Pages > Source: GitHub Actions*.
3. Run the workflow once. Your site appears at `https://<you>.github.io/<repo>/`.

## Layout
```
site/            index.html, signal.js, data/history.json
scripts/         seed.mjs, fetch-price.mjs
test/            signal.test.mjs
.github/workflows/update-and-deploy.yml
```

Not affiliated with WARDOGS. Game economy only, not financial advice. MIT licensed.
