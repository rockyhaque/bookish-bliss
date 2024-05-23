import { Link, useLoaderData } from "react-router-dom";
import { saveReadBook } from "../../utilities/utilities";

const Book = () => {
  const book = useLoaderData();
  console.log(book);

  const { id, name, author, category, image, publisher, rating, tags, review, totalPages, yearOfPublishing } =
    book;

    const handleRead = (book) => {
      saveReadBook(book)
      console.log(book);
    }

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center gap-20 px-5 md:px-2 lg:px-0">
      <div className="w-full md:1/2 lg:1/2 px-28 py-16 bg-gray-100 flex justify-center items-center rounded-2xl">
        <img src={image} className="rounded-xl max-h-[550px]" alt="book" />
      </div>
      <div className="w-full md:1/2 lg:1/2 space-y-4">
        <h2 className="card-title font-playfair-display font-extrabold text-3xl">
          {name}
        </h2>
        <p className="font-work-sans text-xl">By: {author}</p>
        <hr className="border-solid border-gray-100 font-work-sans" />
        <h6 className="font-work-sans text-lg">{category}</h6>
        <p className="font-work-sans">
          <span className="font-bold text-xl">Review: </span>
          {review}
        </p>

        {/* tags */}
        <div className="flex my-6 font-work-sans">
        <span className="font-bold text-xl mr-8">Tag</span>
          {tags.map((tag) => (
            <p
              key={tag}
              className="text-customGreen bg-green-50 font-bold px-4 py-1 rounded-full mr-3"
            >
              #{tag}
            </p>
          ))}
        </div>

        <hr className="border-solid border-gray-100 font-work-sans" />

        <div className="flex gap-16 font-work-sans">
            <div className="space-y-2">
                <p>Number of Pages:</p>
                <p>Publisher:</p>
                <p>Year of Publishing:</p>
                <p>Rating:</p>
            </div>
            <div className="space-y-2 font-bold">
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
            </div>
        </div>

        <div className="space-x-5 font-bold font-work-sans">
            <Link onClick={() => handleRead(book)} className="btn bg-white border-2 border-slate-300 font-bold">Read</Link>
            <Link className="btn bg-sky-300 border-none font-bold text-white">Wishlist</Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
