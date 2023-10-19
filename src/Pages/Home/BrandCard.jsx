import { Link } from "react-router-dom";

const BrandCard = ({brand}) => {
   const {name, image, title} = brand || {}
   return (
      <div>
         <Link>
            <div className="card rounded-md bg-base-100 border py-8 shadow-lg">
               <figure><img className="h-20" src={image} alt={name} /></figure>
               <div className="card-body text-center">
                  <h2 className="text-center ">{title}</h2>
                  <p className="text-center text-xl font-bold">{name}</p>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default BrandCard;