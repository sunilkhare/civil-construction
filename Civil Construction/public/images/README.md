# Logo Instructions

## How to Add Your Company Logo

1. **Prepare your logo file:**
   - Recommended formats: PNG (with transparency) or SVG for best quality
   - Recommended size: 200px x 200px or larger (the header will auto-resize to 50px height)
   - File name: `logo.png` or `logo.svg`

2. **Add your logo:**
   - Place your logo file in this folder: `public/images/`
   - Name the file exactly: `logo.png` (or update the path in Header.jsx if using a different name)

3. **File path structure:**
   ```
   public/
   └── images/
       └── logo.png  <- Your logo goes here
   ```

4. **Supported formats:**
   - PNG (recommended for photos/complex graphics)
   - SVG (recommended for simple graphics/text)
   - JPG (works but no transparency)
   - WebP (modern format, good compression)

## Current Setup

The header is configured to:
- Display your logo at 50px height (40px on mobile)
- Show a fallback emoji (🏗️) if the logo fails to load
- Automatically handle logo loading errors
- Scale proportionally to maintain aspect ratio

## Customization

To change the logo size, edit the CSS in `src/components/Header.css`:
```css
.logo-image {
  height: 50px; /* Change this value */
  width: auto;
  max-width: 50px; /* Change this value */
}
```

## Testing

After adding your logo:
1. Refresh the website
2. Check that the logo displays correctly
3. Test on mobile devices to ensure proper scaling
4. Verify the fallback works by temporarily renaming the logo file
