# Production Deployment & Hosting Guide

**Project:** Lifestyle Elevators Company Website  
**Recommended Platform:** Vercel / AWS Amplify / Cloudflare Pages / Node.js Container  
**Node.js Target:** 20+ LTS / 22 LTS / 24 LTS

---

## 1. Hosting on Vercel (Recommended)

Next.js is built by Vercel and deploys seamlessly with native edge caching, instant preview branches, and automatic HTTPS.

### Method A: Deploy via GitHub + Vercel Dashboard (Zero-Click CI/CD)

1. **Push Code to GitHub:**
   ```bash
   git remote add origin https://github.com/<your-username>/lifestyle-elevators.git
   git branch -M main
   git push -u origin main
   ```
2. **Import into Vercel:**
   - Log in to [vercel.com](https://vercel.com).
   - Click **Add New...** → **Project**.
   - Select your `lifestyle-elevators` repository and click **Import**.
3. **Project Settings:**
   - **Framework Preset:** Next.js (automatically detected via `vercel.json`).
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Install Command:** `npm ci`
4. **Environment Variables:**
   Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL`: `https://lifestyleelevators.in` (or your assigned `.vercel.app` domain)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: (e.g. `917795551118` or `919986028416` when confirmed)
   - `NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS`: Set to `true` once number is confirmed.
5. Click **Deploy**. Your website will be live in ~60 seconds with a global CDN and free SSL.

---

### Method B: Deploy via Vercel CLI (Direct Terminal Deployment)

You can deploy directly from your local terminal using the Vercel CLI without pushing to GitHub first:

1. **Deploy to Preview Environment:**
   ```bash
   npx vercel
   ```
   - Follow the interactive prompts (Link to existing project? `No`, Project name: `lifestyle-elevators`).
   - Inspect the generated live preview URL.

2. **Deploy Directly to Production:**
   ```bash
   npx vercel --prod
   ```

3. **Set Environment Variables via CLI:**
   ```bash
   npx vercel env add NEXT_PUBLIC_SITE_URL production
   npx vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER production
   npx vercel env add NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS production
   ```

---

### Custom Domain Configuration (e.g. `lifestyleelevators.in`)

1. In the Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Enter your domain (e.g., `lifestyleelevators.in` and `www.lifestyleelevators.in`).
3. Add the DNS records provided by Vercel at your domain registrar (GoDaddy, Namecheap, Google Domains):
   - **A Record:** `@` points to `76.76.21.21`
   - **CNAME Record:** `www` points to `cname.vercel-dns.com`
4. Vercel will automatically provision a free Let's Encrypt SSL certificate within a few minutes.

---

## 2. Docker / Self-Hosted Node.js Deployment

If deploying to a VPS (Ubuntu/Debian) or Kubernetes cluster:

### Step 1: Build the Application
```bash
npm ci
npm run build
```

### Step 2: Start the Production Server
```bash
NODE_ENV=production npm run start -p 3000
```

### Step 3: Nginx Reverse Proxy with SSL (Certbot)
Configure Nginx as a reverse proxy passing traffic to `localhost:3000`:
```nginx
server {
    server_name lifestyleelevators.in www.lifestyleelevators.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 3. Pre-Launch Verification Checklist

- [x] Production build passes without errors (`npm run build`).
- [x] Official PDF brochure is accessible at `/brochures/lifestyle-elevators.pdf`.
- [x] Office telephone numbers `+91 7795551118` and `+91 9986028416` initiate phone calls on mobile.
- [x] Email link triggers default mail client with `lifestyleelevator2025@gmail.com`.
- [x] Google Maps link targets Bangalore registered office in Ittamadu.
- [ ] WhatsApp Business number confirmed by client and updated in production environment variables.
- [x] Dynamic XML sitemap is accessible at `/sitemap.xml`.
- [x] Robots.txt is accessible at `/robots.txt`.
- [x] OpenGraph meta image renders on social media previews.

---

## 4. Rollback Procedure

If an issue occurs in production:
1. In Vercel, navigate to **Deployments**, locate the last verified working deployment, click the three dots (`...`), and select **Promote to Production** (instant zero-downtime rollback).
2. For self-hosted deployments, checkout the previous git tag/commit and restart the process via PM2 (`pm2 restart lifestyle-elevators`).
