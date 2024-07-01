export default function login() {

    return (

        <form className="flex flex-col mx-auto p-4 max-w-[500px] m-4 gap-4 mt-32 rounded-xl bg-white border-2">
            <div className="text-center text-4xl ">Log In</div>
            <input id="lusername" type="text" placeholder="username" className="p-3 mt-8 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <input id="lpassword" type="password" placeholder="password" className="p-3 mx-3 bg-gray-100 border focus:border-blue-500 focus:border-2 outline-none"/>
            <div className="mx-5 text-sm font-light text-gray-600">Don't have an account? Sign up</div>
            <button type="submit" className="bg-blue-500 py-2 px-4 mt-8 text-white rounded-lg text-xl">Login</button>
        </form>
    );
}