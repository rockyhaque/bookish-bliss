import Blogs from "./pages/Blogs/Blogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import ListedBooks from "./pages/ListedBooks/ListedBooks";
import PagesToRead from "./pages/PagesToRead/PagesToRead";

function App() {
  return (
    <div>
      <Home></Home>
      <ListedBooks></ListedBooks>
      <PagesToRead></PagesToRead>
      <Blogs></Blogs>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
