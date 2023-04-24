import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

//Product Detail page
const BookDetail = () => {
    //parametreden gelen değeri okur 
    const [bookDetail, setBookDetail] = useState(null);
    const { id } = useParams()

    //api a detay için istek atar
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const { data } = await axios(`https://www.googleapis.com/books/v1/volumes/${id}`)
                setBookDetail(data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchBook();
    }, [id]);

    //ilgili değerleri yerine basar ve detay sayfasını oluşturur
    return (
        <div className='bg-slate-700 p-10 h-screen flex flex-col gap-6 items-center'>
            {
                bookDetail &&
                <div className='flex flex-col items-center gap-6 bg-white border border-gray-200 rounded-lg shadow md:flex-row overflow-hidden w-full h-1/2'>
                    <img src={bookDetail.volumeInfo.imageLinks.thumbnail} alt={bookDetail.volumeInfo.title} className='h-full object-cover' />
                    <div className='flex flex-col gap-3 p-2'>
                        <h6 className='text-lg font-semibold'>Title: {bookDetail.volumeInfo.title}</h6>
                        <p>Publisher: {bookDetail.volumeInfo.publisher}</p>
                        <p>Categories: {bookDetail.volumeInfo.categories}</p>
                        <span>{bookDetail.volumeInfo.pageCount} Pages</span>
                        <a href={bookDetail.saleInfo.buyLink} target="_blank" rel="noopener noreferrer">Click To Buy!</a>
                    </div>
                </div>
            }

            <Link to={'/'} className='bg-white p-4 rounded-lg'>Go To Homepage</Link>
        </div>
    )
}

export default BookDetail