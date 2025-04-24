
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-lg font-semibold">CardGuard</span>
          </div>
          
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>Advanced credit card fraud detection system</p>
            <p className="text-sm text-gray-400 mt-1">Protecting your transactions with AI</p>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} CardGuard. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
