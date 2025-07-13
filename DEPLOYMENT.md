# GitHub Pages Deployment Guide

This guide provides step-by-step instructions for deploying the AIix Pro website to GitHub Pages.

## Prerequisites

1. Ensure you have Node.js 18+ installed
2. GitHub repository should be set up with GitHub Pages enabled
3. Repository name should match the base path in vite.config.ts

## Configuration Changes Made

### 1. Vite Configuration (`vite.config.ts`)
- Updated `base` path to `/aiix-pro-genesis-web-main/` for GitHub Pages
- Added build optimization with manual chunks
- Enabled source maps for debugging

### 2. Router Configuration (`src/App.tsx`)
- Changed from `BrowserRouter` to `HashRouter` for GitHub Pages compatibility
- HashRouter uses URL hashes (#) which work correctly with GitHub Pages

### 3. Script Loading (`src/main.tsx`)
- Fixed ElevenLabs widget script loading to use dynamic script injection
- Added error handling for script loading failures

### 4. Asset Paths (`index.html`)
- Updated favicon and script paths to use relative paths for GitHub Pages

### 5. Package Configuration (`package.json`)
- Added `homepage` field pointing to GitHub Pages URL
- Added `gh-pages` dev dependency for manual deployment
- Added `deploy` script for easy deployment

## Deployment Methods

### Method 1: GitHub Actions (Automatic)
The repository already has a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages on every push to the main branch.

### Method 2: Manual Deployment
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Common Issues

1. **404 on refresh**: This is fixed by using HashRouter instead of BrowserRouter
2. **Assets not loading**: Check that the `base` path in vite.config.ts matches your repository name
3. **Widget not loading**: Check browser console for script loading errors

### Testing Locally
```bash
# Build and preview the production build
npm run build
npm run preview
```

### Environment Variables
If you need to set environment variables for different environments, create:
- `.env` for development
- `.env.production` for production

## Repository Settings

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Ensure the workflow file is in `.github/workflows/deploy.yml`

## Custom Domain (Optional)

To use a custom domain:
1. Update the `CNAME` file with your domain
2. Update the `homepage` field in package.json
3. Update the `base` path in vite.config.ts to "/"

## Build Output

The build process creates:
- `dist/` directory with optimized assets
- Static HTML, CSS, and JavaScript files
- All assets with hashed filenames for caching

## Verification Steps

After deployment:
1. Check that the site loads at `https://[username].github.io/aiix-pro-genesis-web-main/`
2. Verify all images and assets load correctly
3. Test navigation between pages
4. Verify the ElevenLabs widget loads and functions
5. Check mobile responsiveness

## Support

If you encounter issues:
1. Check the GitHub Actions logs for build errors
2. Verify all file paths are correct
3. Ensure the repository name matches the base path configuration