# Professional CV Website for Konstantinos Rekalidis

This repository contains the source code for Konstantinos Rekalidis's personal CV website, designed to establish a strong online professional presence and showcase expertise in digital analytics and software development.

## Project Goals

- Establish a strong online professional presence
- Showcase professional experience and expertise
- Provide an accessible, professional platform for recruiters and industry peers

## Technology Stack

- **Frontend:** Plain HTML5, CSS3, JavaScript (Vanilla JS)
- **Architecture:** Multi-page website
- **Hosting:** Netlify (free tier)
- **Deployment:** Netlify subdomain (krekalidis.netlify.app or similar)
- **Forms:** Netlify Forms (native integration)
- **Analytics:** Google Analytics 4
- **Version Control:** Git (for Netlify deployment)

## Deployment Instructions

### Prerequisites
1. Node.js and npm installed
2. Netlify CLI installed: `npm install -g netlify-cli`
3. Netlify account created (free tier)

### Deployment Steps

#### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: CV website"
```

#### Step 2: Login to Netlify
```bash
netlify login
```
This will open a browser window for authentication.

#### Step 3: Initialize Netlify Site
```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Team: Select your team
- Site name: `krekalidis` (or preferred name)
- Build command: (leave empty - static site)
- Publish directory: `.` (root directory)

#### Step 4: Deploy
```bash
netlify deploy --prod
```

#### Step 5: Configure Netlify Forms
Forms are automatically configured via the `data-netlify="true"` attribute. After first deployment:
1. Go to Netlify Dashboard → Site Settings → Forms
2. Set up email notifications
3. Configure spam filtering if needed

#### Step 6: Configure Custom Domain (Optional)
If client wants a custom domain later:
```bash
netlify domains:add yourdomain.com
```

### Continuous Deployment
For future updates:
```bash
git add .
git commit -m "Update content"
git push
netlify deploy --prod
```

Or connect the Git repository to Netlify for automatic deployments on push.

## Local Development

To view the website locally, simply open `index.html` in your web browser.

## Contact

**Client:** Konstantinos Rekalidis  
**LinkedIn:** www.linkedin.com/in/krekalidis  
**Location:** Thessaloniki, Greece
