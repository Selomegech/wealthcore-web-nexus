
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Insights", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        // On home page, check if we've scrolled past the hero section (approximately 600px)
        setIsScrolled(window.scrollY > 600);
      } else {
        // On other pages, change color after minimal scroll
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Determine navbar styling based on page and scroll position
  const getNavbarStyles = () => {
    if (isHomePage && !isScrolled) {
      // Home page hero section - dark/transparent navbar
      return "bg-black/80 backdrop-blur-sm border-black/20";
    } else {
      // Default white navbar for other pages or when scrolled
      return "bg-white/95 backdrop-blur-sm border-gray-200";
    }
  };

  const getTextStyles = () => {
    if (isHomePage && !isScrolled) {
      return "text-white";
    } else {
      return "text-charcoal";
    }
  };

  const getActiveTextStyles = () => {
    if (isHomePage && !isScrolled) {
      return "text-gold border-b-2 border-gold";
    } else {
      return "text-navy border-b-2 border-navy";
    }
  };

  const getHoverStyles = () => {
    if (isHomePage && !isScrolled) {
      return "hover:text-gold";
    } else {
      return "hover:text-navy";
    }
  };

  const getMobileButtonStyles = () => {
    if (isHomePage && !isScrolled) {
      return "text-white hover:text-gold";
    } else {
      return "text-charcoal hover:text-navy";
    }
  };

  return (
    <nav className={`sticky top-0 z-50 border-b shadow-sm transition-all duration-300 ${getNavbarStyles()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/c63c5efc-83ab-4b3e-9191-66ac23b8b581.png" 
              alt="Wealthcore Logo" 
              className="w-14 h-14 object-contain"
            />
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-2xl transition-colors duration-300 ${getTextStyles()}`}>Wealthcore</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-colors duration-200 ${
                  isActive(item.path) ? getActiveTextStyles() : `${getTextStyles()} ${getHoverStyles()}`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${getMobileButtonStyles()}`}
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors duration-200 hover:text-navy ${
                    isActive(item.path) ? "text-navy" : "text-charcoal"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
