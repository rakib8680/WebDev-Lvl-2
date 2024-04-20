import Footer from "@/components/Shared/Footer";
import { ReactNode } from "react";




const layout = ({children} : {children: ReactNode}) => {
  return (
     <div>
         <div className="min-h-96">
         {children}
         </div>
         <Footer/>
     </div>
  )
};

export default layout;