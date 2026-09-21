# React Portfolio Website

A responsive portfolio website built with React and Vite.

## Sections

- About Me
- Projects
- Skills
- Resume
- Contact

## Technologies

- React
- Vite
- CSS
- JavaScript

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production build

```bash
npm run build
```

The production files are generated in the `dist` folder.

To verify the production build locally:

```bash
npm run preview
```

## Performance optimizations

- React.lazy() is used to lazy-load the Projects component.
- Suspense displays a fallback while the component loads.
- Images use the `loading="lazy"` attribute.
- Vite creates optimized production assets during `npm run build`.
- CSS is organized in one stylesheet and minified during the production build.

## Deployment on Vercel

1. Push the project to GitHub.
2. Open https://vercel.com and sign in.
3. Import the GitHub repository.
4. Use the following settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click Deploy.
6. Open the generated deployment URL and test all sections.

## Deployment on Netlify

1. Push the project to GitHub.
2. Open https://www.netlify.com.
3. Select Add new site and Import an existing project.
4. Select the GitHub repository.
5. Set the build command to `npm run build`.
6. Set the publish directory to `dist`.
7. Deploy the site.

## Testing checklist

- Check navigation links.
- Test the website on mobile, tablet and desktop widths.
- Test Chrome, Firefox and Edge.
- Check image loading and external project links.
- Confirm that the production preview works.
- Check that the resume file exists in the `public` folder before deployment.

## Challenges and solutions

### Challenge 1: Large initial bundle
Solution: Lazy-load the Projects component using React.lazy() and Suspense.

### Challenge 2: Mobile responsiveness
Solution: Use CSS Grid, flexible widths and media queries.

### Challenge 3: Production optimization
Solution: Use Vite's production build command, which bundles and minifies application assets.
