import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
   const [brand, setBrand] = useState('');
   const product = useLoaderData()

   const navigate = useNavigate()

   const {_id, productName, productPhoto, brandName, price, ratings, description} = product || {}

   const updateProduct = event => {
      event.preventDefault();
      const form = event.target;
      const productName = form.productName.value;
      const productPhoto = form.productPhoto.value;
      const brandName = form.brandName.value;
      setBrand(brandName)
      const price = form.price.value;
      const ratings = form.ratings.value;
      const description = form.description.value;

      const updatedProduct = { productName, productPhoto, brandName, price, ratings, description }
      console.log(updatedProduct);

      fetch(`http://localhost:5000/products/${_id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(updatedProduct)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            form.reset()
            Swal.fire(
               'Good job!',
               'Product updated Successfully!',
               'success'
            )
         })
   }

   return (
      <div>
         <div className="max-w-7xl m-auto pt-20 pb-40 px-4">
            <div className="p-5 border space-y-4">
               <p className="text-xl font-semibold">Add product here</p>
               <form onSubmit={updateProduct} className="card-body p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="form-control">
                        <label className="label p-0">
                           <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="productName" placeholder="Product Name" defaultValue={productName} className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                        <label className="label p-0">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="productPhoto" placeholder="Product Photo URL" defaultValue={productPhoto} className="input input-bordered" required />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     
                     <div className="form-control mt-5">
                        <select name="brandName" className="select select-bordered w-full" defaultValue={brand}>
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
                        <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                        <label className="label p-0">
                           <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name="ratings" placeholder="Ratings" defaultValue={ratings} className="input input-bordered" required />
                     </div>
                  </div>

                  <div className="form-control mt-3">
                     <textarea name="description" placeholder="Short description" defaultValue={description} className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                  </div>

                  <div className="form-control mt-2">
                     <button className="btn btn-primary rounded-none w-40 bg-[#1F2937] border-none text-white hover:text-black hover:bg-white">Update Product</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default UpdateProduct;