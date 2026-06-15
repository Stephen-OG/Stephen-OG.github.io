# Stephen Ogundero Portfolio

React/Vite portfolio for Stephen Ogundero, built as a clean developer homepage with editorial project summaries.

## Highlights

- Software engineering, AI, data, and automation positioning
- PropMind listed as work experience
- Madupe described without exposing confidential product details
- FindMyScholarship AI described with repo-backed technical detail
- Downloadable uploaded CV from `public/OGUNDERO_STEPHEN_CV_Updated.docx`
- Responsive desktop and mobile layout
- Public GitHub links on project cards where repos are available
- Credit Risk Analysis included as a data science project

## Run Locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Verify

```bash
npm run check
npm run build
npm audit --omit=dev
```

## Deploy

The app is static and can be deployed to Vercel, Netlify, or GitHub Pages.

For Vercel or Netlify:

- Build command: `npm run build`
- Output directory: `dist`

For GitHub Pages, build locally or in CI and publish the `dist` directory.

## Content Notes

- Do not add StreamBix unless it has moved beyond idea stage.
- Keep PropMind in work experience, not projects.
- Keep Madupe confidential-safe and avoid product mechanics, strategy, or proprietary workflows.
- Madupe can mention safe implementation technologies such as QR codes and Redis.
