import React from 'react'
import { Link } from "react-router-dom";

const Book = ({ name, author, img, publishDate, id }) => {
    // Her bir ürünü temsil eder propstan gelen verileri yerlerine yerleştiri ve detay route u oluşturur
    return (
        <Link to={`/book/${id}`} className='flex flex-col items-center gap-6 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl w-30 overflow-hidden'>
            <img src={img} alt={name} />
            <div className='flex flex-col gap-3 p-2'>
                <h6 className='text-lg font-semibold'>{name}</h6>
                <p>{author}</p>
                <span>{publishDate}</span>
            </div>
        </Link>
    )
}

export default Book