import toast from "react-hot-toast";

// Read Functionality
export const getReadBooks = () => {
    let readbooks = [];
    const storedReadBooks = localStorage.getItem('readbooks');
    if(storedReadBooks){
        readbooks = JSON.parse(storedReadBooks)
    }
    return readbooks;
}

export const saveReadBook = readBook => {
    let readbooks = getReadBooks()
    const isExist = readbooks.find(b => b.id === readBook.id)
    if(isExist){
        return toast.error('Already added to your Read Book List')
    }
    readbooks.push(readBook)
    localStorage.setItem('readbooks', JSON.stringify(readbooks))
    toast.success('Added to your Read Book list Successfully')
}

export const deleteReadBook = id => {
    let readBooks = getReadBooks();
    const remaining = readBooks.filter(b => b.id !== id)
    localStorage.setItem('readBooks', JSON.stringify(remaining));
    toast.success('Deleted from Read Book list!')
}


// Wishlist Functionality
export const getWishListBooks = () => {
    let wishListBooks = []
    const storedwishListBooks = localStorage.getItem('wishListBooks')
    if(storedwishListBooks){
        wishListBooks = JSON.parse(storedwishListBooks)
    }
    return wishListBooks;
}

export const saveWishListBook = wishListBook => {
    let wishListBooks = getWishListBooks();
    const isExist = wishListBooks.find(b => b.id === wishListBook.id);
    if(isExist){
        return toast.error('Already added to your Wishlist Books');
    }
    wishListBooks.push(wishListBook)
    localStorage.setItem('wishListBooks', JSON.stringify(wishListBooks))
    toast.success('Added to your Wishlist Books Successfully')
}

export const deleteWishListBook = id => {
    let wishListBooks = getWishListBooks();
    const remaining = wishListBooks.filter(b => b.id !== id)
    localStorage.setItem('wishListBooks', JSON.stringify(remaining));
    toast.success('Deleted from Wishlist!')
}