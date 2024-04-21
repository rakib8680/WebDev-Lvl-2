import Image from "next/image";
// import nextImage from '../../assets/next-js.png' // Using relative path
import nextImage from '@/assets/next-js.png'  // Using alias path or absolute path

const GalleryPage = () => {
  return (
     <div>
         <h1 className="text-4xl text-center">Image Optimizations</h1>
         <h2 className="text-center text-2xl">Regular Image Tag</h2>
         <img className="mx-auto" src="https://nextjs.org/api/docs-og?title=Components%20%3CImage%3E" alt="next image" />
         <br />
          <h2 className="text-center text-2xl">Next.js Image Component</h2>
          <Image className="mx-auto"   src="https://nextjs.org/api/docs-og?title=Components%20%3CImage%3E" alt="next image"  width={850} height={850}/>
         <br />
          <h2 className="text-center text-2xl">Local Image Import</h2>
          <Image className="mx-auto"   src={nextImage} alt="next image"  width={850} height={850}/>
     </div>
  )
};

export default GalleryPage;