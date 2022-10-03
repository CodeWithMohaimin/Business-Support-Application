import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="navbar w-4/5 bg-gray-200 m-auto flex justify-between items-center">
        <div className="navLogo text-4xl font-bold text-black">
          Mohaimin
        </div>
        <div className="navLink ">
          <a className=' p-3' href="#Home">Home</a>
          <a href="#Home">Find a doctor</a>
          <a href="#Home">Apps</a>
          <a href="#Home">Testimonials</a>
          <a href="#Home">About us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
