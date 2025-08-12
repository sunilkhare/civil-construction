# Work Images Gallery Instructions

## How to Add Your Construction Work Images

### 1. **Image Preparation**
- **Format**: Use JPG, PNG, or WebP formats
- **Size**: Recommended minimum size: 1200px width for best quality
- **Aspect Ratio**: 16:9 ratio works best (e.g., 1920x1080, 1600x900)
- **File Size**: Optimize images to be under 500KB for fast loading

### 2. **Adding Images to the Slider**

#### Option A: Using Online Images (Current Setup)
Edit `src/data/workImages.json` and replace the URLs with your own hosted images:

```json
{
  "id": 1,
  "src": "https://your-image-hosting-service.com/your-image.jpg",
  "alt": "Description of your work",
  "title": "Project Name",
  "caption": "Brief description of the project"
}
```

#### Option B: Using Local Images (Recommended)
1. **Add images to public folder:**
   ```
   public/
   └── images/
       └── work/
           ├── project1.jpg
           ├── project2.jpg
           ├── project3.jpg
           └── etc...
   ```

2. **Update the JSON file:**
   ```json
   {
     "id": 1,
     "src": "/images/work/project1.jpg",
     "alt": "Modern Office Building",
     "title": "Corporate Headquarters",
     "caption": "5-story office complex with modern amenities"
   }
   ```

### 3. **Image Data Structure**
Each image object should have:
- **id**: Unique number for each image
- **src**: Path to the image file
- **alt**: Descriptive text for accessibility
- **title**: Project name (appears as overlay)
- **caption**: Brief description (appears as overlay)

### 4. **Example Entry**
```json
{
  "id": 7,
  "src": "/images/work/residential-complex.jpg",
  "alt": "Luxury Residential Complex",
  "title": "Green Valley Homes",
  "caption": "50-unit residential complex with modern amenities and green spaces"
}
```

### 5. **Slider Features**
- **Auto-play**: Images change automatically every 5 seconds
- **Navigation**: Click arrows or dots to navigate manually
- **Pause on Hover**: Auto-play pauses when mouse hovers over slider
- **Responsive**: Automatically adjusts for mobile and tablet devices
- **Touch/Swipe**: Works with touch gestures on mobile devices

### 6. **Customization Options**

#### Change Auto-play Speed
In `src/pages/Home.jsx`, modify the `autoPlayInterval`:
```jsx
<ImageSlider 
  images={workImagesData} 
  autoPlay={true} 
  autoPlayInterval={3000} // 3 seconds instead of 5
/>
```

#### Disable Auto-play
```jsx
<ImageSlider 
  images={workImagesData} 
  autoPlay={false}
/>
```

### 7. **Image Optimization Tips**
- **Compress images** before uploading to reduce file size
- **Use descriptive filenames** like "office-building-downtown.jpg"
- **Keep consistent aspect ratios** for better visual presentation
- **Add captions** that highlight your expertise and project details

### 8. **Adding More Images**
Simply add new entries to the `workImages.json` file:
- Increment the ID number
- Add the image path
- Include descriptive title and caption
- The slider will automatically include the new images

### 9. **Mobile Optimization**
The slider is fully responsive and will:
- Adjust image height on smaller screens
- Show touch-friendly navigation controls
- Optimize text size for mobile viewing
- Maintain image quality across all devices

This image slider showcases your construction work professionally and helps potential clients see your expertise and quality of work!
