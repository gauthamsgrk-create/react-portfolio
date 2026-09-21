# React Portfolio Website

A responsive personal portfolio website built with React and Vite to showcase projects, technical skills, resume, and contact information.

## Live Project

- GitHub: https://github.com/gauthamsgrk-create/react-portfolio
- Vercel: https://react-portfolio-indol-pi.vercel.app/

## Sections

- About Me
- Projects
- Skills
- Resume
- Contact

## Technologies

- React 18
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

## Main Features

- Component-based React structure
- Responsive layout for desktop, tablet, and mobile screens
- Lazy loading of the Projects component with `React.lazy()` and `Suspense`
- Lazy loading for the hero image using the `loading="lazy"` attribute
- Project links that open in a new browser tab
- Resume download section
- Contact section using a mail link
- Reduced-motion support for accessibility

## Run the Project Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production Build and Local Verification

Create the production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The optimized files are generated in the `dist` directory. Vite bundles and minifies JavaScript and CSS for production.

## Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Deploy the project.
6. Test navigation, project links, resume link, contact link, and responsive layouts.

Vercel provides HTTPS/SSL for the deployed domain automatically. A custom domain can be added later through the Vercel project settings if required.

## Responsive and Cross-Browser Testing

The layout should be checked at desktop, tablet, and mobile widths. Test the deployed website in Chrome, Edge, and Firefox, and verify that:

- Navigation links scroll to the correct sections.
- Project links open correctly.
- The layout does not overflow horizontally.
- Buttons and text remain readable on smaller screens.
- The hero image loads correctly.
- The resume file is available in `public/resume.pdf`.

## Important Personalization Before Submission

1. Replace `your-email@example.com` in `src/main.jsx` with the student's real email address.
2. Add the actual resume PDF at `public/resume.pdf`.
3. Update the About Me text if needed.
4. Run `npm run build` before pushing the final changes.

## Challenges and Solutions

### Vite permission error during deployment

A deployment may fail with `vite: Permission denied` when generated folders or dependency files are tracked in Git. The solution is to keep `node_modules` and `dist` out of Git using `.gitignore`, remove any previously tracked generated files, and allow Vercel to install dependencies and create the production build itself.

### Responsive layout

CSS Grid, flexible widths, wrapping navigation, and media queries are used to support different screen sizes.

### Initial bundle size

The Projects component is loaded with `React.lazy()` and `Suspense`, which allows that component to be loaded separately from the initial application code.
