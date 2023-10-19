const Banner = () => {
   return (
      <div>
         <div className="hero" style={{backgroundImage: 'url(https://i.ibb.co/MCVycMx/main-big-banner-1-1-1.webp)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="max-w-screen-2xl m-auto">
               <div className="hero-content py-8 md:py-10 lg:py-40 text-neutral-content justify-start">
                  <div className="max-w-2xl">
                     <h1 className="mb-5 text-2xl md:text-5xl font-bold">Elevate Your Style with Our Latest Collection</h1>
                     <p className="mb-5">Unveil the latest trends in fashion and elevate your wardrobe with our exquisite range of apparel and accessories. From classic elegance to cutting-edge style, find your perfect fashion statement here.</p>
                     <button className="btn btn-primary bg-black border-0 text-white">Shop Now!</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;