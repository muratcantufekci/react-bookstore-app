import React from 'react'
import { useBook } from '../context/Bookcontext';
import Book from './Book';

//Dataları context üzerinden çeker ve Book componentine gönderir
const Books = () => {
    const { bookList } = useBook();
    return (
        <div className='flex flex-wrap justify-between bg-slate-700 p-4 gap-3 pt-8'>
            {
                bookList.map(item => (
                    <Book key={item.id} name={item.volumeInfo.title} author={item.volumeInfo.authors} publishDate={item.volumeInfo.publishedDate} img={item.volumeInfo.imageLinks?.smallThumbnail} id={item.id} />
                ))
            }
        </div>
    )
}

export default Books