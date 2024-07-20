"use client"

import API from "@/lib/api";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function signup() {

    const router = useRouter()

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

        <form className="flex flex-col mx-auto p-4 max-w-[500px] m-4 gap-4 mt-32 rounded-xl bg-white border-2" onSubmit={handleSignupFormRequest}>
            <div className="text-center text-4xl">Sign Up</div>
            <input id="email" name="email" type="email" placeholder="Email" className="p-3 mt-8 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <input id="username" name="username" type="text" placeholder="Username" className="p-3 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <input id="password" name="password" type="password" placeholder="Password" className="p-3 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <div className="mx-5 text-sm font-light text-gray-600">Already have an account? <Link href="login" className="text-blue-500 underline">Login</Link></div>
            <button type="submit" className="bg-blue-500 py-2 px-4 mt-8 text-white rounded-lg text-xl mb-4">Signup</button>
        </form>
    );
}