import { useState } from "react"



function Auth() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-[#06090E] relative overflow-hidden  text-white'>
      <div className="flex flex-col items-center justify-between shadow-2xl border p-[50px]">
        <div className="bg-[#111721] p-[20px] blur-[4px] rounded-2xl hover:-translate-y-0.5 hover:bg-opacity-0 hover:blur-[-2px]">
          <h1 className="font-bold text-3xl">ERRROR_</h1>
        </div>

        <div className="">
          <div className="text-white  rounded-2xl flex justify-around items-center my-[30px] bg-[#111721]">
            <button onClick={() => setIsLogin(false)} className={`px-[100px] py-[20px] m-[2px] rounded-2xl ${!isLogin ? 'bg-[#41464F] bg-opacity-20 text-white shadow-lg transform scale-105' : 'text-gray-400 hover:bg-opacity-10'}`}>Regiser</button>
            <button onClick={() => setIsLogin(true)} className={`px-[100px] py-[20px]  m-[2px] rounded-2xl ${isLogin ? 'bg-[#41464F] bg-opacity-20 text-white shadow-lg transform scale-105' : 'text-gray-400 hover:bg-opacity-10'}`}>Login</button>
          </div>

          {!isLogin ? (
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
                    className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                  />
                </div>
                <div>
                  <select className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50">
                    <option value="" disabled className="bg-gray-800">Gender</option>
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
                <i class="fa-brands fa-google"></i>
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
                    {/* <div className="absolute w-5 h-5 bg-blue-600 bg-opacity-80 rounded-md opacity-0 transition-opacity duration-200"></div> */}
                  </div>
                  <span className="ml-3 text-sm text-gray-400">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200">Forgot password?</a>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 bg-opacity-90 hover:from-blue-500 hover:to-blue-600 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:scale-[1.02] hover:-translate-y-1">
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
                <i class="fa-brands fa-google"></i>
                <span>Continue with Google</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth