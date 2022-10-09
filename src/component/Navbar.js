import React from 'react'
import Logo from '../assets/logo.png'
import { FaUser } from 'react-icons/fa'

function Navbar() {
  return (
    <div className="d-flex justify-content-center bg-white">
      <div className="mw-nav d-flex justify-content-between py-3 mx-5 w-100">
        <div className='d-flex align-items-center'>
          <a href='/' className="col">
            <img src={Logo} className="img" alt="logo1"/>
          </a>
        </div>
          <div className='d-flex align-items-center'>
            <a className='text-black urbanist mx-3' href='/'>
              Tentang Kami
            </a>
            <a className='text-black urbanist mx-3' href='/'>
              Biaya
            </a>
            <a className='text-black urbanist mx-3' href='/'>
              Hubungi Kami
            </a>
          </div>
          <div d-flex>
            <button className='btn btn-light mx-1'>
              <a className='text-black urbanist' href='/signup'><FaUser/> Masuk</a>
            </button>
            <button className='btn btn-primary mx-1'>
              <a className='text-white mx-2 urbanist' href='/signup'>Daftar</a>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Navbar