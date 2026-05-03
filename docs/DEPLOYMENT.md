# Deployment Guide

## Prerequisites

1. **Domain registered** — `likoudisventures.com` (or your chosen domain)
2. **Resend account** — a NEW one, separate from the Likoudis Legacy Foundation account
3. **Resend audience created** — for "The Branch" newsletter subscribers
4. **Domain verified in Resend** — so `hello@likoudisventures.com` can send

## Setting up Resend

1. Sign up at [resend.com](https://resend.com) using a fresh email (not your Foundation login)
2. Add your domain (`likoudisventures.com`) in the Domains section
3. Add the DNS records Resend provides (SPF, DKIM, DMARC) to your domain registrar
4. Wait for verification (usually a few minutes)
5. Create an API key in API Keys
6. Create an audience in Audiences and copy the audience ID

## Environment Variables

Set these in your deployment platform (Vercel, etc.):

```
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
RESEND_FROM_EMAIL=hello@likoudisventures.com
INQUIRY_TO_EMAIL=hello@likoudisventures.com
ADMIN_PASSWORD=<choose-a-strong-password>
NEXT_PUBLIC_SITE_URL=https://likoudisventures.com
```

The site will build and run without these set, but:
- Inquiry form submissions will only log to console (not actually email you)
- Newsletter signups will only log to console (not actually subscribe to Resend Audiences)
- The admin compose page will refuse to send

## Option 1: Deploy to Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# From the project root
vercel
```

Follow the prompts. Add the environment variables in the Vercel dashboard under Settings → Environment Variables.

After first deploy, link your custom domain in the Vercel dashboard.

## Option 2: Deploy to your DigitalOcean droplet

```bash
# Build the production bundle
npm run build

# On the droplet
pm2 start npm --name "likoudis-ventures" -- start
pm2 save

# Configure Caddy or nginx to proxy port 3000 → likoudisventures.com
```

A sample Caddy config:

```
likoudisventures.com {
    reverse_proxy localhost:3000
}
```

## Post-deploy checklist

- [ ] Visit the live URL — homepage loads
- [ ] Visit `/divisions/the-studio` and verify the subpage renders
- [ ] Submit the inquiry form on `/contact` and verify the email arrives at `INQUIRY_TO_EMAIL`
- [ ] Subscribe to the newsletter from the footer and verify it appears in your Resend audience
- [ ] Visit `/admin/branch`, unlock with `ADMIN_PASSWORD`, send a test newsletter to yourself only
- [ ] Confirm the OG tags (preview the URL on Slack or LinkedIn)

## Custom domain

Point your DNS A record (or CNAME) for `likoudisventures.com` to your hosting provider's IP/host. Vercel provides specific instructions in the dashboard.
