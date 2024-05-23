import { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";
import { getReadBooks } from "../../utilities/utilities";


const ReadBooksTab = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getReadBooks();
        setReadBooks(storedBooks)
    }, [])

    if(readBooks.length < 1){
        return <div className="flex min-h-[calc(100vh-630px)] w-full justify-center items-center">No data found in Read Tab</div>
      }


    return (
        <div>
            {
               readBooks.map(readBook => (
                <ReadBook readBook = {readBook} key={readBook.id}></ReadBook>
               )) 
            }
        </div>
    );
};

export default ReadBooksTab;