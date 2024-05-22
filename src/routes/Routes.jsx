import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import Blogs from "../pages/Blogs/Blogs";
import ContactUs from "../pages/ContactUs/ContactUs";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Book from "../pages/Book/Book";

// Define the loader for the book detail page
const bookDetailsLoader = async ({params}) => {
  const response = await fetch('../../public/booksData.json');
  const books = await response.json();
  const bookId = parseInt(params.id);
  const book = books.find(b => b.id === bookId);

  if(!book){
    throw new Error('Book not found');
  }
  return book;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../../public/booksData.json')
      },
      {
        path: "/book/:id",
        element: <Book></Book>,
        loader: bookDetailsLoader
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
