'use client'

import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append('username', email)
      formData.append('password', password)
  
      const response = await axios.post('http://127.0.0.1:8000/login', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      console.log('Logged in:', response.data)
      router.push('dashboard')
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-wide">
          Welcome Back!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-accent text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{' '}
          <Link href="/signup">
            <span className="text-primary hover:underline">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );


}

