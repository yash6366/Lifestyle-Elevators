# Production Deployment & Hosting Guide

**Project:** Lifestyle Elevators Company Website  
**Recommended Platform:** Vercel / AWS Amplify / Cloudflare Pages / Node.js Container  
**Node.js Target:** 20+ LTS / 22 LTS / 24 LTS

---

## 1. Hosting on Vercel (Recommended)

Next.js is developed by Vercel and deploys with zero configuration:

1. **Connect Repository:** Import the GitHub repository `lifestyle-elevators` in the Vercel dashboard.
2. **Framework Preset:** Next.js (automatically detected).
3. **Build Command:** `npm run build`
4. **Output Directory:** `.next`
5. **Environment Variables:**
   - `NEXT_PUBLIC_SITE_URL`: `https://lifestyleelevators.in`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: (Set to confirmed WhatsApp number, e.g. `917795551118` or `919986028416`)
   - `NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS`: Set to `true` once number is verified by client.
6. Click **Deploy**.

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
