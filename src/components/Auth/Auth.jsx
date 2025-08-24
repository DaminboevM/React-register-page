import { useState } from "react"
import axios from "axios"

function Auth() {
  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [registerData, setRegisterData] = useState({
    fullName: "",
    surname: "",
    age: "",
    gender: "",
    email: "",
    password: ""
  })

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  // Register
  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        fullName: registerData.fullName,
        surname: registerData.surname,
        age: parseInt(registerData.age),
        gender: registerData.gender,
        email: registerData.email,
        password: registerData.password
      })

      console.log('Registration successful:', response.data)
      setIsLogin(true)
      setRegisterData({
        fullName: "",
        surname: "",
        age: "",
        gender: "",
        email: "",
        password: ""
      })

    } catch (error) {
      console.error('Registration failed:', error)
      setError(error.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Login
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe
      })

      console.log('Login successful:', response.data)
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }


    } catch (error) {
      console.error('Login failed:', error)
      setError(error.response?.data?.message || 'Login failed. Please check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleAuth = () => {
    window.location.href = 'http://localhost:3000/auth/google'
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-[#06090E] relative overflow-hidden text-white'>
      <div className="flex flex-col items-center justify-between shadow-2xl border p-[50px]">
        <div className="bg-[#111721] p-[20px] blur-[4px] rounded-2xl hover:-translate-y-0.5 hover:bg-opacity-0 hover:blur-[-2px]">
          <h1 className="font-bold text-3xl">ERRROR_</h1>
        </div>

        <div className="">
          <div className="text-white rounded-2xl flex justify-around items-center my-[30px] bg-[#111721]">
            <button onClick={() => setIsLogin(false)} className={`px-[100px] py-[20px] m-[2px] rounded-2xl ${!isLogin ? 'bg-[#41464F] bg-opacity-20 text-white shadow-lg transform scale-105' : 'text-gray-400 hover:bg-opacity-10'}`}>Register</button>
            <button onClick={() => setIsLogin(true)} className={`px-[100px] py-[20px] m-[2px] rounded-2xl ${isLogin ? 'bg-[#41464F] bg-opacity-20 text-white shadow-lg transform scale-105' : 'text-gray-400 hover:bg-opacity-10'}`}>Login</button>
          </div>

          {/* Xato xabarini ko'rsatish */}
          {error && (
            <div className="mb-4 p-3 bg-red-600 bg-opacity-20 border border-red-500 border-opacity-30 rounded-2xl text-red-300 text-center">
              {error}
            </div>
          )}

          {!isLogin ? (
            // Register Form
            <form onSubmit={handleRegister} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={registerData.fullName}
                    onChange={handleRegisterChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="surname"
                    value={registerData.surname}
                    onChange={handleRegisterChange}
                    placeholder="Surname"
                    required
                    className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    name="age"
                    value={registerData.age}
                    onChange={handleRegisterChange}
                    placeholder="Age"
                    required
                    min="1"
                    max="120"
                    className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                  />
                </div>
                <div>
                  <select
                    name="gender"
                    value={registerData.gender}
                    onChange={handleRegisterChange}
                    required
                    className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                  >
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
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  placeholder="Email"
                  required
                  className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  placeholder="Password"
                  required
                  minLength="6"
                  className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 bg-opacity-90 hover:from-blue-500 hover:to-blue-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:scale-[1.02] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600 border-opacity-30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-6 bg-gray-900 bg-opacity-60 text-gray-400 rounded-full backdrop-blur-sm">or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleAuth}
                className="w-full bg-gray-800 bg-opacity-40 hover:bg-opacity-60 border border-gray-600 border-opacity-30 text-white py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3 hover:scale-[1.02] hover:-translate-y-1"
              >
                <i className="fab fa-google"></i>
                <span>Continue with Google</span>
              </button>
            </form>
          ) : (
            // Login Form
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Email"
                  required
                  className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Password"
                  required
                  className="w-full bg-gray-800 bg-opacity-40 border border-gray-600 border-opacity-30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-70 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-opacity-50"
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={loginData.rememberMe}
                    onChange={handleLoginChange}
                    className="sr-only"
                  />
                  <div className="relative">
                    <div className={`w-5 h-5 rounded-md border border-gray-600 border-opacity-30 ${loginData.rememberMe ? 'bg-blue-600 bg-opacity-80' : 'bg-gray-700 bg-opacity-50'}`}>
                      {loginData.rememberMe && (
                        <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="ml-3 text-sm text-gray-400">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200">Forgot password?</a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 bg-opacity-90 hover:from-blue-500 hover:to-blue-600 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:scale-[1.02] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600 border-opacity-30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-6 bg-gray-900 bg-opacity-60 text-gray-400 rounded-full backdrop-blur-sm">or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleAuth}
                className="w-full bg-gray-800 bg-opacity-40 hover:bg-opacity-60 border border-gray-600 border-opacity-30 text-white py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3 hover:scale-[1.02] hover:-translate-y-1"
              >
                <i className="fab fa-google"></i>
                <span>Continue with Google</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth