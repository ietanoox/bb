# Original Broad Branding assets

The logo, client logos, photographs, illustrations, favicon, and service icons were captured from [broadbranding.com](https://broadbranding.com/) for this Astro rebuild. Original media files are available under `https://broadbranding.com/wp-content/uploads/2025/07/`, with `gio.jpeg` under `https://broadbranding.com/wp-content/uploads/2025/10/`.

The locally served font is the original [Satoshi-Variable.ttf](https://broadbranding.com/wp-content/uploads/2025/07/Satoshi-Variable.ttf). Image filenames and available responsive variants retain their source names. The six `icon-*.svg` files were extracted from inline SVGs on the original homepage.

`scripts/download-source.py` captures source media and reference styles. Captured WordPress CSS stays in the ignored `.reference/assets/` directory; the Astro site uses its own stylesheet in `src/styles/global.css`.
