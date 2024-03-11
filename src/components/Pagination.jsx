import React from 'react'

function Pagination({pageNum, netxPage, previousPage }) {
  return (
    <div className='text-md flex justify-center text-white bg-orange-500 p-2'>

        <div onClick={previousPage} className='px-6 cursor-pointer'><i class="fa fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNum}</div>
        <div onClick={netxPage} className='px-6 cursor-pointer'><i class="fa fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination