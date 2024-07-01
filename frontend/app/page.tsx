export default function Home() {
  return (
    <main className="flex flex-col items-center text-center justify-center h-[40rem] gap-8 p-2">
      <div className="text-5xl mb-8">Welcome to InkPPT</div>
      <div className="text-3xl">Convert blueprints to presentations with InkPPT</div>
      <button className="text-xl bg-green-600 p-2 text-white rounded-xl cursor-pointer">Generate PPT</button>
    </main>
  );
}
