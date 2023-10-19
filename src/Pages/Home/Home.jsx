import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "./BrandCard";
import FreeShipping from "./FreeShipping";

const Home = () => {

   const allBrand = useLoaderData()

   console.log(allBrand)

   return (
      <div>
         <Banner></Banner>
         <div className="py-20 px-5">
            <h1 className="text-2xl md:text-5xl text-center font-semibold">Discover Top Brands</h1>
            <p className="text-center mt-6 m-auto w-full lg:max-w-3xl">Explore our curated selection of top fashion brands, from athletic gear to high-end luxury, and find your perfect style statement. Elevate your wardrobe with Nike, Gucci, and more.</p>
            <div className="max-w-7xl m-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {
                  allBrand.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
               }
            </div>
         </div>
         <FreeShipping></FreeShipping>
      </div>
   );
};

export default Home;