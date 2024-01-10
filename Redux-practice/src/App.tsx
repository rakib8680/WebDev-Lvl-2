import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className=" flex gap-5 border border-purple-800 bg-purple-200 p-10">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-rose-600 text-white px-4 py-1 text-2xl font-semibold rounded-sm"
        >
          Decrement
        </button>
        <h1 className="font-bold text-4xl">{count}</h1>
        <button
          onClick={() => dispatch(increment())}
          className="bg-lime-600 text-white px-4 py-1 text-2xl font-semibold rounded-sm"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementBy(5))}
          className="bg-lime-600 text-white px-4 py-1 text-2xl font-semibold rounded-sm"
        >
          By-5
        </button>
      </div>
    </div>
  );
};

export default App;
