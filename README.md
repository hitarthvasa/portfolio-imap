# Hitarth Vasa | Personal Portfolio

A hand-coded personal portfolio built with plain HTML, CSS and JavaScript (no frameworks, no website builders).
Tagline: **Learning and growing.**

## Run it locally
Open `index.html` in a browser, or run `npm run dev` in the terminal (needs Node.js) and open the link it prints, usually http://localhost:3000. No build step needed.

## Before you submit
1. Open `script.js` and fill in the `CONFIG` object at the top with your email and social links.
   Only the links you fill in will show in the Contact section. Do not add a phone number or home address.
2. Gallery: copy photos into `assets/gallery/` and add one line per photo in the `GALLERY` list at the top of `script.js`. `tag` is optional (the gallery no longer has filter tabs). Keep each photo under about 300 KB. A video needs `type: "video"`, a `poster` image and, ideally, an MP4 plus a WebM copy.
3. Hero photo: `assets/hero.webp` is a cut-out of you with a transparent background. Replace the file to change it (keep the same name and a similar tall shape).

## Hand cricket with the camera
The "Hand cricket" game in *Outside the screen* can read your fingers through the webcam.
- It uses Google's MediaPipe hand tracking (loaded only when someone presses **Start camera**) and runs fully in the browser.
  The video is not recorded or uploaded.
- It needs internet and a secure address (GitHub Pages is fine). To test locally, use the VS Code **Live Server** extension
  (do not just double-click `index.html`).
- The tap buttons (1 to 6) always work as a backup.

## Publish for free on GitHub Pages
1. Create a public GitHub repository, for example `portfolio`.
2. Upload all files in this folder (`index.html`, `styles.css`, `script.js`, `README.md`, `assets/`).
3. In the repository go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/portfolio/`.
5. Open the live link and the repository link in a private/incognito window before submitting.

## What is on the site
Hero (name with cut-out photo), Who I am (about, skills and interests), Selected work (Solace, Bayora, Crisis Grid, SkillSync Maharashtra),
a visual break, The years (education and leadership timeline), People, Outside the screen (playable drum pads and a
cricket scorer) and Contact.

## Credits
- Fonts: [Syne](https://fonts.google.com/specimen/Syne) and [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) from Google Fonts (SIL Open Font License).
- Drum sounds are generated in the browser with the Web Audio API (no audio files).
- Hand tracking for the camera game: [MediaPipe Tasks Vision](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker) by Google (Apache 2.0), loaded from jsDelivr and Google's model storage.
- Layout and mood were inspired by reference portfolios I liked (grey, red and black editorial style with fanned cards). No code or assets were copied from them.
- AI assistant: Claude (Anthropic) helped write and fix the code. The content, ideas and personality are mine.
