# ScribbleGram

ScribbleGram is a beginner-friendly static website that recreates a fake Instagram-style profile for `angeloyamamoto` in a messy scribble-art style.

The profile header is built with real HTML, CSS, and buttons. It is not one large image, and it does not open in the image viewer.

## Files

```text
scribbleGram/
  index.html
  style.css
  script.js
  assets/
    profile picture.jpg
    post2.jpg
    post3.jpg
    ...
    post17.jpg
```

`assets/profile picture.jpg` is used only as the circular avatar in the profile header. It is not used as a post and is not included in the clickable grid.

The post grid uses the JPG post files that are currently in the `assets` folder, so removed images will not appear as broken slots.

## Open Locally

Open `index.html` in a web browser.

Because this project uses only HTML, CSS, and JavaScript, it does not need React, Node, npm, Vite, a backend, a database, or a build step.

## Upload To GitHub Pages

1. Create a GitHub repository named `scribbleGram` or any name you like.
2. Upload these files and folders:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/`
3. In the repository, go to `Settings`.
4. Open `Pages`.
5. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save the settings.

GitHub will publish the static website after a short wait.
