
import { useState } from "react";
import axios from "axios";
import { Shield, AlertTriangle, CreditCard, CheckCircle, XCircle, Info, ArrowRight } from "lucide-react";

const DetectionPage = () => {
  const [formData, setFormData] = useState({
    DH: "",
    DL: "",
    ratio: "",
    repeat: "",
    used_chip: "",
    used_pin: "",
    online: "",
  });

  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHint, setShowHint] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validate inputs
    const emptyFields = Object.entries(formData).filter(([_, value]) => value === "");
    
    if (emptyFields.length > 0) {
      alert("Please fill all fields before submission");
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await axios.post("https://creditcardapi-t1ry.onrender.com/predict", {
        ...Object.fromEntries(
          Object.entries(formData).map(([k, v]) => [k, parseFloat(v)])
        ),
      });
      setResult(response.data.fraud === 1 ? "fraud" : "safe");
    } catch (err: any) {
      alert(`Error: ${err.message}`);
      setResult("error");
    } finally {
      setIsLoading(false);
    }
  };

  const getHint = (field: string) => {
    const hints: Record<string, string> = {
      DH: "Distance From Home",
      DL: "Distance From Last Transaction",
      ratio: "Ratio to median of previous purchases",
      repeat: "1 if repeat retailer, 0 if not",
      used_chip: "1 if chip was used, 0 if not",
      used_pin: "1 if PIN was used, 0 if not",
      online: "1 if online transaction, 0 if not"
    };
    
    return hints[field] || "No hint available";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center mb-3">
            <Shield className="h-8 w-8 text-indigo-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Fraud Detection</h1>
          </div>
          <p className="text-gray-600">Analyze transaction details for potential fraud</p>
        </div>
        
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-6 text-white relative">
            <CreditCard className="absolute opacity-10 right-4 top-4 h-24 w-24" />
            <h2 className="text-xl font-medium">Transaction Analysis</h2>
            <p className="text-blue-100 mt-1 text-sm">Enter transaction details to check for potential fraud</p>
          </div>
          
          {/* Form */}
          <div className="p-6">
            <div className="space-y-4">
              {Object.keys(formData).map((key) => (
                <div key={key} className="relative">
                  <label 
                    htmlFor={key} 
                    className="block text-sm font-medium text-gray-700 mb-1 capitalize"
                  >
                    {key.replace("_", " ")}
                    <button 
                      className="ml-1 text-gray-400 hover:text-indigo-500"
                      onClick={() => setShowHint(showHint === key ? null : key)}
                    >
                      <Info size={14} />
                    </button>
                  </label>
                  
                  {showHint === key && (
                    <div className="text-xs bg-blue-50 p-2 rounded-md text-gray-600 mb-2">
                      {getHint(key)}
                    </div>
                  )}
                  
                  <input
                    id={key}
                    type="number"
                    name={key}
                    value={formData[key as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder={`Enter ${key.replace("_", " ")}`}
                    required
                  />
                </div>
              ))}
            </div>
            
            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`mt-6 w-full flex items-center justify-center py-3 px-4 rounded-md text-white font-medium 
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all'}
              `}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="h-4 w-4 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center">
                  Analyze Transaction 
                  <ArrowRight size={16} className="ml-2" />
                </div>
              )}
            </button>
          </div>
        </div>
        
        {/* Result Card - only shown when there's a result */}
        {result && (
          <div className={`mt-6 p-6 rounded-xl shadow-lg flex items-center 
            ${result === 'safe' 
              ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white' 
              : result === 'fraud' 
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' 
                : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
            }`}
          >
            {result === 'safe' ? (
              <>
                <CheckCircle size={32} className="mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Transaction Safe</h3>
                  <p className="text-sm opacity-90">This transaction appears legitimate</p>
                </div>
              </>
            ) : result === 'fraud' ? (
              <>
                <AlertTriangle size={32} className="mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Fraud Alert</h3>
                  <p className="text-sm opacity-90">This transaction has been flagged as potentially fraudulent</p>
                </div>
              </>
            ) : (
              <>
                <XCircle size={32} className="mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Error Occurred</h3>
                  <p className="text-sm opacity-90">Unable to process your request</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetectionPage;
