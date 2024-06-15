import React from 'react'

function Pagination({pageNum, netxPage, previousPage }) {
  return (
    <div className='text-md flex justify-center text-white bg-black p-2'>
 
        <div onClick={previousPage} className='px-8 cursor-pointe'><i class="fa fa-backward hover:text-yellow-300 duration-300"></i> </div>
        <div className='font-extrabold text-yellow-300'>{pageNum}</div>
        <div onClick={netxPage} className='px-8 cursor-pointer'><i class="fa fa-forward hover:text-yellow-300 duration-300"></i></div>
    </div>
  )
}

export default Pagination