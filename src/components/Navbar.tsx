
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-700 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">CardGuard</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-blue-100 transition-colors">
              Home
            </Link>
            <Link to="/detection" className="text-white hover:text-blue-100 transition-colors">
              Fraud Detection
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
