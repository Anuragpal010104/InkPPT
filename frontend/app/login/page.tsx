"use client"

import API from "@/lib/api";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function login() {

    const router = useRouter();

    const handleLoginFormRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement)
        const username = formData.get('lusername')
        const password = formData.get('lpassword')

        const data = {username,password}

        try {
            const res = await axios.post(API.LOGIN,data)
            if(res.data.access)
            {
                localStorage.setItem("ink_ppt_access_token",res.data.access)
                router.push('/generateppt')
            }
        } catch(err) {
            console.log(err)

        }
    }

    return (

        <form className="flex flex-col mx-auto p-4 max-w-[500px] m-4 gap-4 mt-32 rounded-xl bg-white border-2" onSubmit={(e) => handleLoginFormRequest(e)}>
            <div className="text-center text-4xl ">Log In</div>
            <input id="lusername" name="lusername" type="text" placeholder="username" className="p-3 mt-8 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <input id="lpassword" name="lpassword" type="password" placeholder="password" className="p-3 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <div className="mx-5 text-sm font-light text-gray-600">Don't have an account? <Link href="signup" className="text-blue-500 underline">Signup</Link></div>
            <button type="submit" className="bg-blue-500 py-2 px-4 mt-8 text-white rounded-lg text-xl mb-4">Login</button>
        </form>
    );
}