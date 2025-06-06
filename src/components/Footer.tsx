
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src="/lovable-uploads/c63c5efc-83ab-4b3e-9191-66ac23b8b581.png" 
                alt="Wealthcore Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-xl">Wealthcore</span>
                <span className="text-base text-gray-300">Capital Advisory Private Limited</span>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Empowering businesses with strategic financial insights that drive growth and ensure compliance. 
              Your trusted partner in financial and tax advisory across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Insights", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Industries", path: "/industries" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-gold transition-colors text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-white text-xl mb-4">Contact Info</h3>
            <div className="space-y-3 text-base text-gray-300">
              <p>Email: Info.wealthcoreadvisory@gmail.com</p>
              <p>Phone: +91 8200310274</p>
              <p>Address: B-113, Bhatar Trade centre, bhatar char rasta, Surat, Gujarat - 395017</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-base">
            © 2025 Wealthcore Capital Advisory Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-gray-300 hover:text-gold text-base transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-300 hover:text-gold text-base transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-300 hover:text-gold text-base transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
