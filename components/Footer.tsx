const Footer = () => {
  return (
    <footer className="mt-20 backdrop-blur-md bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">NeonShop</h3>
            <p className="text-white/70">Your premium destination for modern tech and accessories.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="/" className="hover:text-neon-cyan transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-neon-cyan transition-colors">Products</a></li>
              <li><a href="/cart" className="hover:text-neon-cyan transition-colors">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>Email: info@neonshop.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50">
          <p>&copy; 2025 NeonShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
