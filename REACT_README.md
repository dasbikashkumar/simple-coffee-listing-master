# Simple Coffee Listing - React.js Application

A modern, responsive coffee listing application built with React.js based on the devChallenges.io design.

## 🚀 Features

- **Modern React Architecture**: Built with functional components and React hooks
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Filtering**: Toggle between "All Products" and "Available Now" views
- **Beautiful UI**: Dark theme with glassmorphism effects and smooth animations
- **Coffee Cards**: Display coffee details including:
  - High-quality images
  - Name and price
  - Star ratings and vote counts
  - Popular tags
  - Availability status
  - Sold out indicators

## 🛠 Technologies Used

- **React.js** - Frontend framework
- **CSS3** - Styling with modern features (backdrop-filter, grid, flexbox)
- **Google Fonts** - DM Sans typography
- **Unsplash Images** - High-quality coffee images

## 📁 Project Structure

```
simple-coffee-listing-master/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── resources/          # Images and assets
├── src/
│   ├── components/
│   │   ├── CoffeeCard.js   # Individual coffee card component
│   │   └── CoffeeCard.css  # Coffee card styles
│   ├── data/
│   │   └── coffeeData.js   # Coffee data structure
│   ├── App.js              # Main application component
│   ├── App.css             # Main application styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme with warm accents
- **Glassmorphism**: Translucent backgrounds with backdrop blur effects
- **Card Hover Effects**: Smooth transitions and elevation changes
- **Responsive Grid**: Adaptive layout that works on all screen sizes
- **Interactive Elements**: Hover states and active states for better UX

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## ⭐ Key Components

### App.js
- Main application component
- Handles state management for filtering
- Renders header and coffee grid

### CoffeeCard.js
- Individual coffee item component
- Displays all coffee information
- Handles visual states (popular, sold out, ratings)

### coffeeData.js
- Static data structure for coffee items
- Includes all necessary properties for display
- Easy to extend or replace with API data

## 🔄 Filtering Logic

The application supports two filter modes:
- **All Products**: Shows all coffee items
- **Available Now**: Shows only available coffee items (filters out sold out items)

## 🎯 Future Enhancements

- Add shopping cart functionality
- Implement search functionality
- Add coffee categories/filters
- Integrate with a backend API
- Add user favorites
- Implement quantity selectors

## 📄 License

This project is based on a devChallenges.io challenge and is for educational purposes.

---

Built with ❤️ using React.js