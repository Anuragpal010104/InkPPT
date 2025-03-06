"use client"

import API from "@/lib/api";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";

export default function signup() {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const handleSignupFormRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement)
        const username = formData.get('username')
        const email = formData.get('email')
        const password = formData.get('password')

        const data = {email,username,password};

        try {
            const res = await axios.post(API.SIGNUP, data)
            if(res.data.success)
            {
                router.push('/login')
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSignupFormRequest}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800">Create Account</h1>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Choose a username"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200"
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <button
            type="button"
            // onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <FcGoogle size={24} />
            <span className="font-medium text-gray-700">Sign up with Google</span>
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
        // <form className="flex flex-col mx-auto p-4 max-w-[500px] m-4 gap-4 mt-32 rounded-xl bg-white border-2" onSubmit={handleSignupFormRequest}>
        //     <div className="text-center text-4xl">Sign Up</div>
        //     <input id="email" name="email" type="email" placeholder="Email" className="p-3 mt-8 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
        //     <input id="username" name="username" type="text" placeholder="Username" className="p-3 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
        //     <input id="password" name="password" type="password" placeholder="Password" className="p-3 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
        //     <div className="mx-5 text-sm font-light text-gray-600">Already have an account? <Link href="login" className="text-blue-500 underline">Login</Link></div>
        //     <button type="submit" className="bg-blue-500 py-2 px-4 mt-8 text-white rounded-lg text-xl mb-4">Signup</button>
        // </form>
    );
}