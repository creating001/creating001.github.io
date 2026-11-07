# Jinqi Wu · 武锦旗

Personal academic website: **https://creating001.github.io**

Built with [PRISM](https://github.com/xyjoey/PRISM), Next.js, TypeScript, and Tailwind CSS. The original PRISM MIT license is retained in `LICENSE`.

## Local development

Use Node.js 22 or later:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To check and export the site:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The static website is generated in `out/`.

## Updating content

- `content/`: English profile, education, internships, honors, CV, and publications.
- `content_zh/`: Chinese translations with the same filenames.
- `content/config.toml`: Site URL, profile, public contact details, language settings, and navigation.
- `content/publications.bib`: Publication metadata. `pdf` sets a local PDF link; `code` sets a repository link; `#` marks equal contribution and `*` marks a corresponding author.
- `public/papers/`: The two papers and cropped figure previews.
- `public/images/jinqi-wu.jpg`: Profile photo, re-encoded without image metadata.

The source resume and award certificates were used to verify the content. Award names follow the certificates: CCSP gold/silver medals, CCF优秀大学生启航计划, and the GPLT national individual / Jilin provincial team distinction. The undergraduate GPA and final rank follow the latest resume (3.91/4.0, 1/351); an earlier six-semester ranking document uses a different cohort count.

The public site includes a research email, profile photo, publication PDFs, and biographical text. Raw identity documents, certificate scans, and the original resume containing a phone number are not included.

## GitHub Pages

Repository: `creating001/creating001.github.io`.

In repository **Settings → Pages**, select **GitHub Actions** as the source. Every push to `main` runs `.github/workflows/deploy.yml`, checks types, exports the site, and deploys `out/` to Pages.

No custom domain or paid hosting is required. To use a custom domain later, update `site.url` in `content/config.toml` and configure the domain in GitHub Pages.
