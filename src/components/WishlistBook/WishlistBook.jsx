import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { PiNewspaperLight } from "react-icons/pi";

const WishlistBook = ({ wishlistBook }) => {
  const {
    id,
    name,
    author,
    category,
    image,
    publisher,
    tags,
    review,
    totalPages,
    rating,
    yearOfPublishing,
  } = wishlistBook;

  return (
    <div>
      <div className="flex gap-6 p-4 border rounded-xl mt-6">
        <div className="px-8 py-6 bg-gray-100 flex justify-center items-center rounded-2xl w-52">
          <img src={image} className="rounded-xl max-h-[172px]" alt="book" />
        </div>
        <div className="space-y-3">
          <h2 className="card-title font-playfair-display font-extrabold">
            {name}
          </h2>
          <p className="font-work-sans">By: {author}</p>

          <div className="flex">
            {/* tags */}
            <div className="flex my-2 font-work-sans">
              <span className="font-bold text-xl mr-6">Tag</span>
              {tags.map((tag) => (
                <p
                  key={tag}
                  className="text-customGreen bg-green-50 font-bold px-4 py-1 rounded-full mr-3"
                >
                  #{tag}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-3 ml-3 font-work-sans">
              <IoLocationOutline />
              <p>
                <span>Year of Publishing: </span>
                {yearOfPublishing}
              </p>
            </div>
          </div>

          <div className="flex gap-12 font-work-sans pb-2">
            <div className="flex items-center gap-3">
              <LuUsers />
              <p>
                <span>Publisher: </span>
                {publisher}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PiNewspaperLight />
              <p>
                <span>Page: </span>
                {totalPages}
              </p>
            </div>
          </div>

          <hr className="border-solid border-gray-100 font-work-sans " />

          <div className="flex font-work-sans space-x-5 pt-2">
            <div className="bg-sky-50 px-5 py-2 rounded-full">
              <p className="text-sky-500">
                Category: <span>{category}</span>
              </p>
            </div>
            <div className="bg-orange-50 px-5 py-2 rounded-full">
              <p className="text-orange-500">
                Rating: <span>{rating}</span>
              </p>
            </div>
            <div className="bg-customGreen text-white px-5 py-2 rounded-full">
              <p>View Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistBook;
