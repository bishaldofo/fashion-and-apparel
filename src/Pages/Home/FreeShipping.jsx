import { FaTruck, FaHeadphones } from "react-icons/fa";

const FreeShipping = () => {
   return (
      <div className="max-w-7xl py-10 m-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card card-compact bg-base-100 rounded-none p-10 space-y-3">
               <div className="text-center"><FaTruck className="text-5xl m-auto"></FaTruck></div>
               <div className="text-center space-y-3">
                  <h2 className="text-center text-xl font-bold">Free Shipping</h2>
                  <p>Get the style you love with the added perk of free shipping. Shop now, and we'll deliver your fashion finds to your doorstep at no extra cost!
                  </p>
                  <div className="card-actions justify-center">
                     <button className="btn btn-primary rounded-none bg-transparent border-none text-black hover:text-white hover:bg-black">View more</button>
                  </div>
               </div>
            </div>
            <div className="card card-compact bg-base-100 rounded-none p-10 space-y-3">
               <div className="text-center"><FaHeadphones className="text-5xl m-auto"></FaHeadphones></div>
               <div className="text-center space-y-3">
                  <h2 className="text-center text-xl font-bold">Free Returns</h2>
                  <p>Shop worry-free with our hassle-free returns policy. If your purchase isn't perfect, enjoy free returns within our generous window of flexibility.
                  </p>
                  <div className="card-actions justify-center">
                     <button className="btn btn-primary rounded-none bg-transparent border-none text-black hover:text-white hover:bg-black">View more</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FreeShipping;