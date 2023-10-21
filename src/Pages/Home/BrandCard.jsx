import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { name, image, title } = brand || {};

  return (
    <div>
      <div className="card rounded-md bg-base-100 border py-8 shadow-lg">
        <Link to={`/brand/${name}`}> {/* Use a different path */}
          <figure>
            <img className="h-20" src={image} alt={name} />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center">{title}</h2>
            <p className="text-center text-xl font-bold">{name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
