import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BrandProductCard = () => {
  const { brand } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/brand/${brand}`)

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
        <div>
          <div>
          <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {brandProducts.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="hero h-[40vh]" style={{backgroundImage: `url(${product.productPhoto})`}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                      <div className="max-w-md space-y-3">
                        <p className="text-2xl font-bold">{product.productName}</p>
                        <h2 className="text-xl font-semibold">{product.brandName}</h2>
                        <button className="btn rounded-none bg-[#1F2937] border-none text-white hover:text-black hover:bg-white">Shop now!</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-10 mt-20">Brand: {brand}</h1>
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
                      <h2 className="text-xl font-semibold">{product.brandName}</h2>
                      <p className="text-base font-bold">{product.productName}</p>
                      <p className="text-base font-bold">Price: ${product.price}</p>
                      <p className="text-base font-bold">Ratings: {product.ratings}/5</p>
                        <div className="grid grid-cols-2 gap-6 my-5">
                            <Link to={`/updateProduct/${product._id}`}>
                                <button className="btn w-full rounded-none bg-[#1F2937] border-none text-white hover:text-black hover:bg-white">Update</button>
                            </Link>
                            <Link to={`/productDetails/${product._id}`}>
                                <button className="btn w-full rounded-none bg-[#1F2937] border-none text-white hover:text-black hover:bg-white">Details</button>
                            </Link>
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
