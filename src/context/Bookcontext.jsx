import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const BookContext = new createContext();

//Context oluşturarak dataya tüm componentlerden erişim sağlar
export const BookProvider = ({ children }) => {
    const [bookList, setBookList] = useState([]);
    const [searchBookName, setSearchBookName] = useState('a');

    const values = {
        bookList,
        setBookList,
        searchBookName,
        setSearchBookName,
    };

    useEffect(() => {
        // Kitapları almak için asenkron bir fonksiyon oluştur ve set eder
        const fetchBooks = async () => {
            try {
                if (searchBookName) {
                    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchBookName}`);
                    setBookList(data.items);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchBooks();
    }, [searchBookName]);

    return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

export const useBook = () => useContext(BookContext);