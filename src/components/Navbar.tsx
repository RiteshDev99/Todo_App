import React from 'react'

function Navbar() {
  return (
    <nav className='bg-green-500 flex justify-between px-20 py-5 '>
        <h3 className='font-bold text-xl '>iTODO</h3>
        <div className=" flex gap-10 font-bold">
            <h4 className='hover:text-xl '>Home</h4>
            <h4 className='hover:text-xl'>About</h4>
            <h4 className='hover:text-xl'>Help</h4>
        </div>
    </nav>
  )
}

export default Navbar