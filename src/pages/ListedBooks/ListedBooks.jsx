import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getReadBooks } from "../../utilities/utilities";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedBooks = getReadBooks();
    setReadBooks(storedBooks);
  }, []);

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h2 className="text-3xl font-extrabold font-work-sans text-center mt-6 mb-10 bg-gray-100 py-2 rounded-xl">
        Books
      </h2>

      <div className="flex justify-center items-center mb-10">
        <select className="select max-w-xs bg-customGreen font-semibold font-work-sans text-lg text-white">
          <option disabled selected>
          Sort By
          </option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
      </div>

      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>

        <Link
          to="wishlist"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
