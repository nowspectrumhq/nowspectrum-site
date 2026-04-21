# NowSpectrum Website

## File Structure
```
nowspectrum-site/
├── index.html          # Homepage
├── products.html       # Products page
├── blog.html           # Blog listing
├── about.html          # About page
├── contact.html        # Contact page
├── vercel.json         # Vercel config
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Nav interactions
├── assets/             # ADD YOUR LOGO FILES HERE
│   ├── logo-dark.png       ← horizontal dark wordmark
│   ├── icon.png            ← square icon (favicon)
│   └── og-image.png        ← 1200x630 social share image
└── blog/
    ├── what-is-raptordb.html
    ├── stop-using-tostring.html
    └── flow-designer-vs-business-rules.html
```

## Assets to add
Before deploying, add these to the /assets/ folder:
- logo-dark.png — your horizontal dark background wordmark
- icon.png — your square N icon (used as favicon)
- og-image.png — create a 1200x630 image in Canva for social sharing

## Deployment Steps

1. Create GitHub account at github.com using nowspectrumhq@gmail.com
2. Create a new repository called "nowspectrum-site" (public)
3. Upload all files maintaining the folder structure above
4. Create Vercel account at vercel.com using the same email
5. Click "Add New Project" → Import from GitHub → select nowspectrum-site
6. Click Deploy (no configuration needed — vercel.json handles it)
7. Go to Project Settings → Domains → Add nowspectrum.com
8. Vercel gives you DNS records — add them in your domain registrar

## Adding New Blog Posts
1. Copy any existing blog post file from /blog/
2. Update the title, meta description, content
3. Add the file to /blog/ folder on GitHub
4. Add a card for it on blog.html
5. Vercel deploys automatically within 30 seconds

## Custom Domain
Point nowspectrum.com to Vercel:
- Add an A record: @ → 76.76.21.21
- Add a CNAME: www → cname.vercel-dns.com
