# Bedrock Innovations Landing Page - Deployment Guide

## Prerequisites

1. **GitHub Account**: Required for code repository
2. **Vercel Account**: Required for deployment (free tier available)
3. **Resend API Key**: Required for contact form functionality

## Step 1: Push Code to GitHub

1. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Bedrock Innovations landing page"
   ```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `bedrock-innovations-landing`
   - Set to Public or Private as needed
   - Do NOT initialize with README (we already have code)

3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bedrock-innovations-landing.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Connect Repository to Vercel**:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Select the repository: `bedrock-innovations-landing`

2. **Configure Build Settings**:
   - Framework Preset: `Next.js`
   - Root Directory: `src` (IMPORTANT: Set this to src/)
   - Build Command: `npm run build`
   - Output Directory: `.next` (default)
   - Install Command: `npm install`

3. **Deploy**:
   - Click "Deploy"
   - Wait for initial deployment to complete

## Step 3: Configure Environment Variables

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add the following variables:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `RESEND_API_KEY` | Your Resend API key | Production, Preview, Development |
   | `NEXT_PUBLIC_APP_URL` | Your Vercel domain (e.g., https://bedrock-innovations.vercel.app) | Production, Preview, Development |

2. **Get Resend API Key**:
   - Sign up at https://resend.com
   - Go to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_`)

## Step 4: Verify Deployment

1. **Check Live Site**:
   - Visit your Vercel deployment URL
   - Verify all sections load correctly
   - Test navigation and smooth scrolling

2. **Test Contact Form**:
   - Fill out the contact form
   - Submit and verify success message
   - Check your email for form submissions

3. **Performance Check**:
   - Run Lighthouse audit
   - Verify Core Web Vitals metrics:
     - LCP < 2.5s
     - FID < 100ms
     - CLS < 0.1

## Step 5: Custom Domain (Optional)

1. **Add Custom Domain**:
   - In Vercel project settings, go to "Domains"
   - Add your custom domain (e.g., bedrockinnov.com)
   - Follow DNS configuration instructions

2. **Update Environment Variables**:
   - Update `NEXT_PUBLIC_APP_URL` to your custom domain
   - Redeploy if necessary

## Troubleshooting

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript types are correct

### API Route Issues
- Verify RESEND_API_KEY is set correctly
- Check function logs in Vercel dashboard
- Test API endpoint directly: `https://your-domain.vercel.app/api/request-demo`

### Performance Issues
- Use `npm run analyze` to check bundle size
- Optimize images and assets
- Check Core Web Vitals in Vercel Analytics

## Monitoring and Analytics

1. **Vercel Analytics**:
   - Enable in project settings
   - Monitor Core Web Vitals
   - Track page views and performance

2. **Error Monitoring**:
   - Check Vercel function logs
   - Monitor API endpoint errors
   - Set up alerts for critical issues

## Security Considerations

- Environment variables are automatically encrypted in Vercel
- API keys are never exposed to client-side code
- HTTPS is enabled by default
- Security headers are configured in next.config.js

## Maintenance

1. **Regular Updates**:
   - Keep dependencies updated
   - Monitor security advisories
   - Update Node.js version as needed

2. **Performance Monitoring**:
   - Regular Lighthouse audits
   - Monitor Core Web Vitals
   - Check bundle size growth

3. **Content Updates**:
   - Update team information
   - Add new case studies
   - Refresh testimonials

## Support

For deployment issues:
1. Check Vercel documentation: https://vercel.com/docs
2. Review Next.js deployment guide: https://nextjs.org/docs/deployment
3. Contact support if needed

---

**Project Status**: Ready for deployment
**Last Updated**: August 2025
**Version**: 1.0.0
