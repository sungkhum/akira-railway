# Akira-Railway

A Railway-ready fork of [Akira](https://akira.sachi.dev) — a SaaS starter kit built with Next.js, Tailwind CSS, and shadcn/ui. Auth, payments, database, and email pre-configured so you can skip the setup and start building.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/akira-railway?referralCode=6EnXto&utm_medium=integration&utm_source=template&utm_campaign=generic)

*Deploying through this link supports the maintainers of this fork via Railway's referral program.*

![Akira](./public/og.png)

## Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- **Auth:** [Better Auth](https://www.better-auth.com) (Google, GitHub, email)
- **Database:** [Railway](https://railway.com) Postgres + [Drizzle ORM](https://orm.drizzle.team)
- **Payments:** [Dodo Payments](https://dodopayments.com)
- **Animations:** [Motion](https://motion.dev)
- **Email:** [Resend](https://resend.com) + [React Email](https://react.email)
- **Runtime:** [Bun](https://bun.sh)

## Local Development

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
bunx drizzle-kit push

# Start the dev server
bun dev
```

## Deploy to Railway

1. Click the "Deploy on Railway" button above
2. Set the required environment variables (auth secrets, OAuth keys, etc.)
3. Railway provisions Postgres, builds with Bun, and runs migrations automatically

## Project Structure

```
src/
├── app/          # Next.js App Router pages and API routes
├── components/   # React components (UI, auth, email templates)
├── db/           # Drizzle schema and migrations
└── lib/          # Auth config, utilities
```

## License

[MIT](LICENSE)
