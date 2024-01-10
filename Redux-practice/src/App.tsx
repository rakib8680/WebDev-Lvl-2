const App = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className=" flex gap-5 border border-purple-800 bg-purple-200 p-10">
        <button className="bg-rose-600 text-white px-4 py-1 text-2xl font-semibold rounded-sm">
          Decrement
        </button>
        <h1 className="font-bold text-4xl">0</h1>
        <button className="bg-lime-600 text-white px-4 py-1 text-2xl font-semibold rounded-sm">
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;