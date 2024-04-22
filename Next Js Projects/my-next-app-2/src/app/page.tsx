import Image from "next/image";

export const metadata = {
  title: "Home Page",
  description: "This is the Home Page of Next.js App",
};

const HomePage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos",{
    next:{
      revalidate: 30
    }
  });
  const allData = await res.json();

  return (
    <div>
      <h1 className="text-4xl text-center pt-28">Welcome To Next js App</h1>
      <div className="grid grid-cols-4 place-items-center">
      {allData.slice(0,10).map((data) => (
        <div key={data.id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default HomePage;
