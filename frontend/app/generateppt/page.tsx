export default function generateppt() {
    return (
        <form className="flex flex-col mx-auto p-4 max-w-[500px] m-4 gap-4 mt-32 rounded-xl bg-white border-2">
            <div className="text-center text-4xl ">Generate PPT</div>
            <input type="file" name="images" multiple className="mt-4"/>
            <button type="submit" className="bg-blue-500 py-2 px-4 mt-8 text-white rounded-lg text-xl mb-4">Generate</button>
        </form>
    );
}