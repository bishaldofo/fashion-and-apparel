import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
   const product = useLoaderData()

   const {productName, productPhoto, brandName, price, ratings, description} = product || {}
   return (
      <div className="max-w-7xl m-auto">
         <div className="py-20">
            <div className="card m-auto rounded-none grid grid-cols-1 md:grid-cols-2 card-side bg-base-100 shadow-xl">
               <figure className=""><img className="h-full w-full" src={productPhoto} alt={productName}/></figure>
               <div className="p-5 space-y-3">
                  <h2 className="card-title">{productName}</h2>
                  <p className="text-base font-semibold">Brand: {brandName}</p>
                  <p className="text-base font-semibold">Ratings: {ratings}/5</p>
                  <p className="text-base font-semibold">Price: {price}</p>
                  <p className="text-base">{description}</p>
                  <div className="card-actions mt-3">
                     <button className="btn btn-primary rounded-none w-40 bg-[#1F2937] border-none text-white hover:text-black hover:bg-white">Add To Cart</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;