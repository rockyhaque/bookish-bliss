import toast from "react-hot-toast";

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