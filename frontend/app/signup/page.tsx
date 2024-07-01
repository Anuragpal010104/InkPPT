import Link from "next/link";

export default function signup() {

    return (

        <form className="flex flex-col mx-auto p-4 max-w-[500px] m-4 gap-4 mt-32 rounded-xl bg-white border-2">
            <div className="text-center text-4xl ">Sign Up</div>
            <input id="lemail" type="email" placeholder="Email" className="p-3 mt-8 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <input id="lusername" type="text" placeholder="Username" className="p-3 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <input id="lpassword" type="password" placeholder="Password" className="p-3 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <div className="mx-5 text-sm font-light text-gray-600">Already have an account? <Link href="login" className="text-blue-500 underline">Login</Link></div>
            <button type="submit" className="bg-blue-500 py-2 px-4 mt-8 text-white rounded-lg text-xl mb-4">Signup</button>
        </form>
    );
}