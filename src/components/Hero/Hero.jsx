import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-around items-center bg-gray-100 -mt-4 min-h-[500px] rounded-3xl ">
      <div className="">
        <h1 className="text-5xl font-playfair-display text-black font-bold mb-9">New reads to revitalize <br /> your bookshelf</h1>
        <Link to="/listedBooks">
          <button className="btn bg-customGreen font-bold text-white">View The List</button>
        </Link>
      </div>
      <div>
        <img className="w-72" src="https://i.ibb.co/nQzmgSV/book-1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
