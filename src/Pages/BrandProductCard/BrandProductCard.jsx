import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BrandProductCard = () => {
  const { brand } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/products/brand/${brand}`)

      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBrandProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [brand]);

  if (loading) {
    return <div className="h-screen flex items-center justify-center">
    <span className="loading loading-dots loading-lg"></span>
 </div>
  }

  return (
    <div className="max-w-7xl m-auto">
      <div className="py-20">
         <h1 className="text-2xl font-semibold mb-10">Brand: {brand}</h1>
         <div className="product-list grid grid-cols-2 md:grid-cols-4 gap-6">
         {brandProducts.length === 0 ? (
            <div>No products found for this brand.</div>
            )
            :
            (
               brandProducts.map((product) => (
               <div key={product._id}>
                  <div className="card rounded-none card-compact bg-base-100 shadow-xl">
                     <figure><img className="h-80 w-full object-cover" src={product.productPhoto} alt={product.productName} /></figure>
                     <div className="card-body">
                        <h2 className="text-lg font-semibold">{product.productName}</h2>
                        <div className="card-actions">
                           <button className="btn btn-primary bg-black rounded-none text-white border-none">Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </div>
            ))
         )}
         </div>  
      </div>
    </div>
  );
};

export default BrandProductCard;
