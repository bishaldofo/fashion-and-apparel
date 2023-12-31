import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const AddProduct = () => {
   const [brand, setBrand] = useState('');
   const { loading } = useContext(AuthContext)
   
   if (loading) {
      return <div className="h-screen flex items-center justify-center">
      <span className="loading loading-dots loading-lg"></span>
   </div>
   }

   const handleAddProduct = event => {
      event.preventDefault();
      const form = event.target;
      const productName = form.productName.value;
      const productPhoto = form.productPhoto.value;
      const brandName = form.brandName.value;
      const price = form.price.value;
      const ratings = form.ratings.value;
      const description = form.description.value;

      const product = { productName, productPhoto, brandName, price, ratings, description }
      console.log(product);

      fetch('http://localhost:5000/products', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(product)
      })
         .then(res => res.json())
         .then(data => {
            if (data.insertedId) {
               console.log(data)
               form.reset()
               Swal.fire(
                  'Good job!',
                  'Product added Successfully!',
                  'success'
               )
            }
         })
   }

   return (
      <div>
         <div className="max-w-7xl m-auto pt-20 pb-40 px-4">
            <div className="p-5 border space-y-4">
               <p className="text-xl font-semibold">Add product here</p>
               <form onSubmit={handleAddProduct} className="card-body p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="form-control">
                        <label className="label p-0">
                           <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                        <label className="label p-0">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="productPhoto" placeholder="Product Photo URL" className="input input-bordered" required />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     
                     <div className="form-control mt-5">
                        <select name="brandName" className="select select-bordered w-full">
                           <option disabled selected>Brand</option>
                           <option>Nike</option>
                           <option>Adidas</option>
                           <option>Gucci</option>
                           <option>Zara</option>
                           <option>H&M</option>
                           <option>Levi's</option>
                        </select>
                     </div>

                     <div className="form-control">
                        <label className="label p-0">
                           <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                        <label className="label p-0">
                           <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered" required />
                     </div>
                  </div>

                  <div className="form-control mt-3">
                     <textarea name="description" placeholder="Short description" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                  </div>

                  <div className="form-control mt-2">
                     <button className="btn btn-primary rounded-none w-40 bg-[#1F2937] border-none text-white hover:text-black hover:bg-white">Add Product</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddProduct;