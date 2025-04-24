
import { Link } from "react-router-dom";
import { Shield, CreditCard, Lock, TrendingUp } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Protect Your Transactions with <span className="text-indigo-600">AI-Powered</span> Fraud Detection
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                CardGuard uses advanced machine learning algorithms to detect and prevent credit card fraud in real-time, keeping your finances secure.
              </p>
              <Link
                to="/detection"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all inline-flex items-center"
              >
                Try Fraud Detection <CreditCard className="ml-2" size={18} />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Credit Card Security" 
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How CardGuard Protects You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Protection</h3>
              <p className="text-gray-600">Our system analyzes transactions instantly, stopping fraud before it happens.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Lock className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
              <p className="text-gray-600">Advanced encryption and security protocols keep your financial data safe.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <TrendingUp className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
              <p className="text-gray-600">Our AI continuously learns and adapts to new fraud patterns and techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to secure your transactions?</h2>
          <p className="text-xl mb-8 text-blue-100">Try our fraud detection system today and experience peace of mind with every transaction.</p>
          <Link
            to="/detection"
            className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all inline-flex items-center"
          >
            Start Detection <CreditCard className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
