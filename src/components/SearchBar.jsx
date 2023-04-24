import React, { useState } from 'react'
import { useBook } from '../context/Bookcontext'

const SearchBar = () => {
  const { setSearchBookName } = useBook()
  const [inputValue, setInputValue] = useState('')

  const inputChangeHandler = (e) => { // her input girildiğinde değerin atamasını yapar
    setInputValue(e.currentTarget.value)
  }

  const submitHandler = (e) => { // kullanıcı submit ettiğinde context üzerine kitap adını gönderir ve girilmiş değeri sıfırlar
    e.preventDefault()
    setSearchBookName(inputValue)
    setInputValue('')
  }

  return (
    <div className="bg-searchbar p-40">
      <h1 className='mb-2 text-4xl font-extrabold py-6 text-slate-50 text-center'>BOOKSTORE APP</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' placeholder='Search books' value={inputValue} onChange={inputChangeHandler} />
      </form>
    </div>
  )
}

export default SearchBar