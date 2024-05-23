import { useEffect, useState } from "react";
import { getWishListBooks } from "../../utilities/utilities";
import WishlistBook from "../WishlistBook/WishlistBook";

const WishlistBooksTab = () => {
    const [wishlistBooks, setWishlistBooks] = useState([])

    useEffect(() => {
        const storedWishlistBooks = getWishListBooks();
        setWishlistBooks(storedWishlistBooks)
    }, [])

    if(wishlistBooks.length < 1){
        return <div className="flex min-h-[calc(100vh-630px)] w-full justify-center items-center">No data found in Wishlist Tab</div>
    }

    console.log(wishlistBooks);
    return (
        <div>
            {
                wishlistBooks.map(wishlistBook => (
                    <WishlistBook wishlistBook={wishlistBook} key={wishlistBook.id}></WishlistBook>
                ))
            }
        </div>
    );
};

export default WishlistBooksTab;