import { useLoaderData } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import BookCard from "../../components/BookCard/BookCard";

const Home = () => {

    const books = useLoaderData();

    return (
        <div>
            <Hero></Hero>

            {/* Books Section */}
            <section>
                <h2 className="text-3xl font-extrabold font-playfair-display text-center mt-16 mb-10">Books</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5 md:px-2 lg:px-0">
                    {
                        books.map(book => <BookCard key={books.id} book={book}></BookCard>)
                    }
                </div>
                
            </section>
            
        </div>
    );
};

export default Home;