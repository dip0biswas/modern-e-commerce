# NeonShop - Modern E-commerce with ShaderGradient Background
#Live - https://eneonshop.netlify.app/
A stunning e-commerce website featuring WebGL-powered animated gradient backgrounds inspired by shadergradient.co, built with Next.js, React, and Three.js.

![NeonShop](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.159-orange?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)

## ✨ Features

- **Animated Shader Background**: Full-screen WebGL-powered gradient animation using Three.js and custom GLSL shaders
- **Glassmorphism Design**: Modern UI with glass-effect components for a premium look
- **Shopping Cart**: Full cart functionality with add, remove, and quantity updates
- **Product Management**: Browse products, view details, and seamless checkout
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Lazy loading, static gradient fallback, and efficient rendering
- **Type-Safe**: Built with TypeScript for robust code
- **State Management**: Context API for global cart state

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
E-commerce/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── products/
│   │   ├── page.tsx            # Products listing page
│   │   └── [id]/
│   │       └── page.tsx        # Product detail page
│   ├── cart/
│   │   └── page.tsx            # Shopping cart page
│   └── checkout/
│       └── page.tsx            # Checkout page
├── components/
│   ├── ShaderGradientBackground.tsx  # WebGL shader component
│   ├── BackgroundWrapper.tsx         # Lazy loading wrapper
│   ├── Navbar.tsx                    # Navigation bar
│   ├── Footer.tsx                    # Footer component
│   └── ProductCard.tsx               # Product card component
├── context/
│   └── CartContext.tsx              # Cart state management
├── data/
│   └── products.ts                  # Product data array
├── types/
│   └── index.ts                     # TypeScript interfaces
├── package.json                     # Dependencies
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── next.config.js                  # Next.js configuration
```

## 🎨 Key Technologies

### Frontend Framework
- **Next.js 14**: React framework with App Router for optimal performance
- **React 18**: Latest React with concurrent features
- **TypeScript**: Type-safe development

### 3D Graphics & Animation
- **Three.js**: WebGL library for 3D graphics
- **@react-three/fiber**: React renderer for Three.js
- **Custom GLSL Shaders**: Fragment and vertex shaders for gradient animation

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Glassmorphism effects and animations
- **Lucide React**: Beautiful icon library

### State Management
- **React Context API**: Global cart state management
- **localStorage**: Cart persistence across sessions

## 🎭 Design Features

### Animated Background
The background uses a custom GLSL shader that creates flowing, neon-style gradients. The shader:
- Animates in real-time using `uTime` uniform
- Creates fractal-like patterns with multiple iterations
- Uses a color palette function for smooth color transitions
- Responsive to screen size changes

### Glassmorphism UI
All components feature:
- Semi-transparent backgrounds with backdrop blur
- Subtle borders with white/20% opacity
- Hover effects with neon glow
- Smooth transitions and animations

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Touch-optimized interactions
- Adaptive layouts for all screen sizes

## 🛒 E-commerce Features

### Product Catalog
- 9 pre-configured products with images, prices, and descriptions
- Category filtering ready
- Product detail views with large images

### Shopping Cart
- Add/remove products
- Quantity adjustment
- Real-time price calculations
- Persistent cart (localStorage)
- Empty cart state

### Checkout Process
- Shipping information form
- Payment details (mock)
- Order summary
- Success confirmation page

## 🔧 Configuration

### Adding Products
Edit `data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: 1,
    name: 'Your Product',
    price: 99.99,
    description: 'Product description',
    image: 'https://your-image-url.com',
    category: 'Category'
  },
  // Add more products...
];
```

### Customizing Colors
Edit `tailwind.config.js`:

```javascript
colors: {
  'neon-pink': '#ff0080',
  'neon-purple': '#7928ca',
  'neon-blue': '#0070f3',
  'neon-cyan': '#00d4ff',
}
```

### Shader Customization
Modify the shader code in `components/ShaderGradientBackground.tsx`:
- Adjust `fragmentShader` for different visual effects
- Change color palette in the `palette()` function
- Modify animation speed by changing `uTime` multiplier

## 🌐 Browser Compatibility

- Chrome/Edge: Full support ✅
- Firefox: Full support ✅
- Safari: Full support ✅
- Mobile browsers: Full support ✅

**Fallback**: Static gradient for browsers without WebGL support

## ⚡ Performance Optimization

- **Lazy Loading**: Shader component loads on demand
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic by Next.js App Router
- **Static Generation**: Pre-rendered pages where possible
- **Memoization**: React hooks optimize re-renders

## 🐛 Troubleshooting

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### TypeScript errors
```bash
# Rebuild types
npm run build
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 🌟 Acknowledgments

- Inspired by [shadergradient.co](https://www.shadergradient.co/)
- Product images from [Unsplash](https://unsplash.com/)
- Built with modern web technologies

---

**Made with ❤️ and WebGL magic**
