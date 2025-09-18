import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Data:', { email, password });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden flex items-center justify-center p-4">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/30 via-transparent to-pink-50/30"></div>
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-600">Sign in to your BlogSpace account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/70 text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:shadow-lg focus:shadow-lg hover:-translate-y-0.5 outline-none"
              placeholder="Enter your email or username"
              disabled={isLoading}
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/70 text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:shadow-lg focus:shadow-lg hover:-translate-y-0.5 outline-none"
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
          >
            {isLoading && (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
            )}
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
            >
              Forgot your password?
            </a>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-300"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage