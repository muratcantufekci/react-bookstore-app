import React from 'react'
import Books from '../../components/Books'
import SearchBar from '../../components/SearchBar'

//Homepage
const Home = () => {
    return (
        <>
            <SearchBar />
            <Books />
        </>
    )
}

export default Home