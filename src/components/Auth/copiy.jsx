import { useState } from 'react';

export default function RegisterPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Decorative elements with opacity */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-purple-600 rounded-full opacity-15 blur-2xl"></div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          
          {/* Logo section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 bg-opacity-50 rounded-2xl border border-gray-700 border-opacity-30 backdrop-blur-sm mb-4">
              <div className="text-white font-mono text-lg font-bold tracking-wider">ERROR_</div>
            </div>
          </div>

          {/* Form container with glass morphism effect */}
          <div className="bg-gray-900 bg-opacity-30 backdrop-blur-xl rounded-3xl border border-gray-700 border-opacity-20 p-8 shadow-2xl">
            
            {/* Toggle buttons */}
            <div className="flex mb-8 bg-gray-800 bg-opacity-40 rounded-2xl p-1">
              <button 
                onClick={() => setShowLogin(false)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  !showLogin 
                    ? 'bg-white bg-opacity-20 text-white shadow-lg transform scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                Register
              </button>
              <button 
                onClick={() => setShowLogin(true)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  showLogin 
                    ? 'bg-white bg-opacity-20 text-white shadow-lg transform scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                Login
              </button>
            </div>

            {/* Register Form */}
            {!showLogin ? (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Surname"
                      className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="number"
                      placeholder="Age"
                      className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                    />
                  </div>
                  <div>
                    <select className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50">
                      <option value="" className="bg-gray-800">Gender</option>
                      <option value="male" className="bg-gray-800">Male</option>
                      <option value="female" className="bg-gray-800">Female</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 bg-opacity-90 hover:from-blue-500 hover:to-blue-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:scale-[1.02] hover:-translate-y-1">
                  Create Account
                </button>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600 border-opacity-30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-6 bg-gray-900 bg-opacity-60 text-gray-400 rounded-full backdrop-blur-sm">or continue with</span>
                  </div>
                </div>

                <button className="w-full bg-gray-800 bg-opacity-40 hover:bg-opacity-60 border border-gray-600 border-opacity-30 text-white py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3 hover:scale-[1.02] hover:-translate-y-1">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            ) : (
              /* Login Form */
              <div className="space-y-5">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only" />
                    <div className="relative">
                      <div className="w-5 h-5 bg-gray-700 bg-opacity-50 rounded-md border border-gray-600 border-opacity-30"></div>
                      <div className="absolute inset-0 w-5 h-5 bg-blue-600 bg-opacity-80 rounded-md opacity-0 transition-opacity duration-200"></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-400">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200">Forgot password?</a>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 bg-opacity-90 hover:from-blue-500 hover:to-blue-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:scale-[1.02] hover:-translate-y-1">
                  Sign In
                </button>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600 border-opacity-30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-6 bg-gray-900 bg-opacity-60 text-gray-400 rounded-full backdrop-blur-sm">or continue with</span>
                  </div>
                </div>

                <button className="w-full bg-gray-800 bg-opacity-40 hover:bg-opacity-60 border border-gray-600 border-opacity-30 text-white py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3 hover:scale-[1.02] hover:-translate-y-1">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              By continuing, you agree to our{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}