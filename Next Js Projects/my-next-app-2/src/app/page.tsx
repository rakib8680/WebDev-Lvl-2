/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "Home Page",
  description: "This is the Home Page of Next.js App",
};

type TShoe = { id: string; title: string; description: string; price: number };

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    // next:{
    //   revalidate: 30   // for SSG (Static Site Generation)
    // },
    cache: "no-store", // for SSR (Server Side Rendering)
  });
  const Shoes = await res.json();

  // throw new Error("Error from HomePage.tsx file");

  return (
    <div>
      <h1 className="text-4xl text-center pt-28">Welcome To Next js App</h1>
      <div className="grid grid-cols-4 place-items-center py-10 space-y-5">
        {Shoes.map((shoe: TShoe) => (
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{shoe.title}</h2>
              <p>{shoe.description}</p>
              <p>Price: ${shoe.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">Details</button>
                <button className="btn btn-success text-green-100">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
