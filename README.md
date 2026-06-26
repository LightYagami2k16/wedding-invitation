# 💍 Sarah & James — Wedding Invitation Website

A beautiful, fully responsive wedding invitation website designed to be hosted on **GitHub Pages** — completely free.

---

## 📁 File Structure

```
wedding-invitation/
├── index.html      ← Main invitation page
├── style.css       ← All styles & theme (motif colors, typography)
├── script.js       ← Music player, countdown timer, map tabs, animations
└── README.md       ← This file
```

---

## 🚀 How to Deploy to GitHub Pages (Step by Step)

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **"New"** to create a repository.
3. Name it exactly: `your-username.github.io`  
   *(Replace `your-username` with your actual GitHub username)*
4. Set it to **Public**.
5. Click **"Create repository"**.

### 2. Upload the Files

**Option A — Via Browser (easiest):**
1. Open your new repository on GitHub.
2. Click **"Add file" → "Upload files"**.
3. Drag and drop all 4 files (`index.html`, `style.css`, `script.js`, `README.md`).
4. Click **"Commit changes"**.

**Option B — Via Git (command line):**
```bash
git clone https://github.com/your-username/your-username.github.io
cd your-username.github.io
# Copy all 4 files into this folder, then:
git add .
git commit -m "Add wedding invitation"
git push
```

### 3. Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages** (left sidebar).
2. Under **Source**, select **"Deploy from a branch"**.
3. Choose **`main`** branch and **`/ (root)`** folder.
4. Click **Save**.
5. Wait 1–2 minutes, then visit:  
   `https://your-username.github.io`

---

## ✏️ Customization Checklist

### 👰 Couple's Names
In `index.html`, find `Sarah & James` and replace with the couple's names throughout the file.

### 📅 Wedding Date & Time
In `index.html`:
```html
<span class="date-num">14 February 2026</span>
<span class="time">Four o'clock in the afternoon</span>
```

In `script.js`, line 8:
```js
const WEDDING_DATE = new Date('2026-02-14T16:00:00');
```
Update both to your actual wedding date.

### 🔗 Google Form (RSVP)
1. Create your RSVP form at [forms.google.com](https://forms.google.com).
2. Click **Send** → **Link** icon → copy the URL.
3. In `index.html`, replace:
```html
href="https://forms.google.com/your-rsvp-form-link"
```
with your actual form link.

### 📷 Google Drive (Photo Upload)
1. Create a shared folder in [Google Drive](https://drive.google.com).
2. Right-click the folder → **Share** → change to **"Anyone with the link can edit"**.
3. Copy the link and replace in `index.html`:
```html
href="https://drive.google.com/drive/folders/your-folder-link"
```

### 📍 Google Maps Location
1. Go to [maps.google.com](https://maps.google.com) and search for your venue.
2. Click **Share** → **Embed a map** → copy the `<iframe>` `src` URL.
3. In `index.html`, replace the `src` of `#map-ceremony` and `#map-reception` iframes.
4. Also update the `href` in the "Get Directions" buttons.

### 🎵 Music
Replace the placeholder URLs in `script.js` with real audio file URLs:
```js
const SONGS = [
  { title: 'Your Song Title', url: 'https://your-audio-url.mp3' },
  ...
];
```
**Options for hosting music:**
- Upload `.mp3` files directly to your GitHub repository and reference them as `./song.mp3`.
- Use [Pixabay Music](https://pixabay.com/music/) for free, royalty-free wedding music.
- Use [Free Music Archive](https://freemusicarchive.org) for free classical/instrumental tracks.

**To upload audio to GitHub:**
1. Upload your `.mp3` files into the repo folder.
2. Update the `url` in `script.js` to `'./your-song.mp3'`.

### 🎨 Colors / Motif
In `style.css`, update the CSS variables at the top:
```css
:root {
  --gold:   #C9A96E;   /* Primary accent */
  --blush:  #E8D5C4;   /* Secondary soft tone */
  --ivory:  #F7F3EE;   /* Background */
  --dark:   #2C2420;   /* Text & dark sections */
}
```
Also update the `.swatch` background colors in `index.html` to match your motif.

### 👥 Entourage
In `index.html`, find the `#entourage` section and replace all names with your actual wedding party members.

### 🖼️ Background Image
The hero uses an Unsplash image. To use your own:
1. Upload `hero.jpg` to your GitHub repo.
2. In `style.css`, find `#hero` and change:
```css
background: url('https://images.unsplash.com/...')
```
to:
```css
background: url('./hero.jpg') center center / cover no-repeat;
```

---

## 💡 Tips

- **Test locally** by opening `index.html` directly in your browser before pushing.
- **RSVP deadline**: Update the date in the CTA section (`index.html`) under `Kindly reply by`.
- The site is fully **mobile-responsive** out of the box.
- **Reduced motion**: Users who prefer reduced motion will automatically see fewer animations.

---

## 📬 Support

If you run into any issues deploying, check:
- [GitHub Pages documentation](https://docs.github.com/en/pages)
- Your repo must be **Public** for free GitHub Pages hosting
- The file must be named exactly `index.html` (lowercase)

---

*Made with ♥ for your special day.*
