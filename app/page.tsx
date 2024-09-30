'use client'

import Link from 'next/link';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Money Manager</title>
        <meta name="description" content="Manage your finances easily" />
      </Head>

      <div className="container mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to Money Manager</h1>
          <p className="text-lg text-gray-600 mt-4">
            Take control of your finances today. Sign up to start tracking your expenses and income, or log in if you already have an account.
          </p>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center mt-8">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg p-10 w-full max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-4">Effortlessly Manage Your Money</h2>
            <p className="text-lg mb-8">
              Monitor your income, expenses, and savings in one easy-to-use app. Whether you&apos;re saving for the future or managing your monthly budget, we&apos;re here to help.
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <Link href="pages/signup" className="bg-white text-blue-500 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 shadow-lg transition">
                Get Started - Sign Up
              </Link>
              <Link href="pages/login" className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition">
                Already have an account? Log In
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Track Expenses</h3>
            <p className="text-gray-600 mt-2">
              Easily monitor your daily expenses and see where your money is going.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Monitor Income</h3>
            <p className="text-gray-600 mt-2">
              Keep track of all your sources of income, and always know your financial position.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Generate Reports</h3>
            <p className="text-gray-600 mt-2">
              Get detailed insights into your spending and saving patterns with custom reports.
            </p>
          </div>
        </section>

        <footer className="text-center mt-12">
          <p className="text-gray-500">© 2024 Money Manager App. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
