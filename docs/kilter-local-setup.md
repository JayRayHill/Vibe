# Moving this project to your own machine

Everything lives in git, so this is a clone — there is no export step and nothing
to migrate.

## 1. Node

Astro needs Node 20+.

```
node -v                      # if this fails or is under 20:
brew install node            # or: nvm install 20 && nvm use 20
```

## 2. Claude Code

```
curl -fsSL https://claude.ai/install.sh | bash
```

Self-contained binary, no Node needed for Claude itself. First run opens a
browser for sign-in. (`npm install -g @anthropic-ai/claude-code` still works but
is the legacy path — it installs the same binary.)

## 3. The project

```
git clone https://github.com/JayRayHill/Vibe.git
cd Vibe
git checkout claude/personal-storefront-setup-k8jy1n
npm install
npm run dev
```

Then open **http://localhost:4321/shop**. The portfolio is at `/`.

`npm install` pulls a platform-native `sharp` binary for image processing — that
happens automatically, but it is why the first install is slower than the rest.

## 4. Start Claude Code

```
claude
```

Run it from inside the `Vibe` directory. It reads `CLAUDE.md` on start, so a
fresh session picks up the project state, the decisions already made, and what is
still outstanding — without you re-explaining any of it.

## What changes locally

The cloud sandbox runs behind an egress allowlist that blocks Alibaba, every
other B2B sourcing site, all stock-photo hosts, and `api.stripe.com`. Locally
there is no proxy: Claude Code uses your machine's network.

That unlocks two things:

**Stripe, end to end.** With a restricted API key, all 8 Payment Links can be
created via the API, written into `products.js`, built and pushed — no dashboard
clicking. Scope the key to Payment Links and Products only, pass it as an
environment variable rather than pasting it into chat, and revoke it afterwards.

**Supplier research.** Alibaba becomes reachable, though it fights automation
hard — bot detection, CAPTCHAs, login-gated pricing, and a ToS that prohibits
scraping. The workable approach is driving a browser you are already signed into
and reading rendered pages, not unattended scraping. Screenshots pasted into
chat work just as well and need no setup at all.

## What does not carry over

The conversation history from the cloud session. `CLAUDE.md` exists to close that
gap — it captures the state, the traps, and the open work. If something important
gets decided locally, add it there.
