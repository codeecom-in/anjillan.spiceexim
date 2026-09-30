# Anjillan Spice Exim

Premium Indian spice export website built with React and Vite.
## Local Development

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## GitHub Pages Deployment

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a new GitHub repository and leave it empty.
2. From this project folder, run:

	```bash
	git init
	git add .
	git commit -m "Initial Anjillan Spice Exim website"
	git branch -M main
	git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
	git push -u origin main
	```

3. In GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**.
4. After the workflow finishes, the site will be available at:
	`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`

The Vite `base: './'` setting keeps assets working on GitHub's project-site path.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
