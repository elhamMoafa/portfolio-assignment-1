# Technical Documentation

## Technologies

- HTML5 for semantic page structure.
- CSS3 for layout, colors, typography, responsive design, Grid, Flexbox, and media queries.
- JavaScript for navigation, theme switching, time-based greeting, form validation, and localStorage.

## File Structure

`index.html` contains the page content and sections. `css/styles.css` contains all visual styles and the mobile breakpoint. `js/script.js` contains the interactive features. `docs/` contains project documentation and the AI usage report.

## Responsive Design

The project uses a flexible container, CSS Grid, Flexbox, relative typography, and a media query at 760px. On smaller screens, the navigation becomes a mobile menu, the hero and project layouts become one column, and the contact section is stacked vertically.

## JavaScript Features

1. The mobile menu opens and closes using a button.
2. The theme button switches between light and dark mode and stores the choice in localStorage.
3. The greeting changes based on the current time.
4. The contact form checks required fields and email validity before displaying a success message.

## Testing Checklist

- Opened the page in a browser.
- Checked navigation links and smooth scrolling.
- Resized the page for desktop and mobile layouts.
- Tested light and dark themes.
- Tested empty and completed form submissions.
- Confirmed that no backend is required for the demonstration form.
