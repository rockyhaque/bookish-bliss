import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
  const {id, name, author, category, image, publisher, rating, tags} = book;
  return (
    <Link to={`/book/${id}`} className="bg-base-100 shadow-sm p-8 rounded-2xl border-2 border-gray-200 transition hover:scale-105 hover:border-customGreen hover:border-opacity-60">
      <div className="px-20 py-10 bg-gray-100 flex justify-center items-center rounded-2xl">
        <img
          src={image}
          alt="img"
          className="rounded-xl h-60"
        />
      </div>
      <div className="flex my-6 font-work-sans"> 
        {
          tags.map((tag) => <p key={tag} className="text-customGreen bg-green-50 font-bold px-4 py-1 rounded-full mr-3">{tag}</p>)
        }
      </div>
      <div className="space-y-2">
        <h2 className="card-title font-playfair-display font-extrabold">{name}</h2>
        <p className="font-work-sans">By: {author}</p>
        <hr className="border-dashed border-gray-100 font-work-sans" />
        <div className="flex justify-between font-work-sans">
          <h6>{category}</h6>
          <div className="flex gap-3 items-center">
            <p>{rating}</p>
            <CiStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
