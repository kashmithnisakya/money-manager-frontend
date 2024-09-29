'use client'

import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Signup() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:8000/users', { name, email, password })
      console.log('Signed up:', response.data)
      router.push('login')
    } catch (error) {
      console.error('Signup error:', error)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Sign Up Title */}
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-wide">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-accent text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account? */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link href="login">
            <span className="text-primary hover:underline">Log in</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
