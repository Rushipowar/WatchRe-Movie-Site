import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex space-x-4 border m-3 p-4 items-center rounded-full fixed top-0 z-10 bg-zinc-50'>

        <h1 className="font-bold text-lg text-gray-500">Watch<span className="font-bold text-lg text-orange-500">Re.</span></h1>

        <Link to="/" className='font-bold pl-32 text-lg hover:text-orange-500'>Home</Link>

        <Link to="/watchlist" className='font-bold pl-3 text-lg hover:text-orange-500'>WatchList</Link>
    </div>
  )
}

export default Navbar