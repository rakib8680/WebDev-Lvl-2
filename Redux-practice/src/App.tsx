import ShowEmoji from "./components/Ui/ShowEmoji";
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-10">
      <div className=" flex gap-5 border border-purple-800 bg-purple-200 p-10">
        <button
          onClick={() => dispatch(decrementBy(5))}
          className="bg-rose-600 text-white px-2 py-3 text-lg font-semibold rounded-full"
        >
          By-5
        </button>
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
          className="bg-lime-600 text-white px-2 py-3 text-lg font-semibold rounded-full"
        >
          By-5
        </button>
      </div>
      <ShowEmoji count={count} />
    </div>
  );
};

export default App;
