import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import { FaUser } from 'react-icons/fa'
import Login from './Login.js'
import { Modal } from 'react-bootstrap';

function Navbar() {

  const [modalShow, setModalShow] = useState(false);


  return (
    <div className="d-flex justify-content-center bg-white">
      <div className="mw-nav d-flex justify-content-between py-3 mx-5 w-100">
        <div className='d-flex align-items-center'>
          <a href='/tiketevent' className="col">
            <img src={Logo} className="img" alt="logo1"/>
          </a>
        </div>
          <div className='d-flex align-items-center'>
            <a className='text-black urbanist mx-3' href='/tiketevent/about'>
              Tentang Kami
            </a>
            <a className='text-black urbanist mx-3' href='/tiketevent/pusat-bantuan'>
              Biaya
            </a>
            <a className='text-black urbanist mx-3' href='/tiketevent'>
              Hubungi Kami
            </a>
          </div>
          <div d-flex>
            <button className='btn btn-light mx-1'  onClick={() => setModalShow(true)}>
              <a className='text-black urbanist'><FaUser/> Masuk</a>
            </button>
            <button className='btn btn-primary mx-1'>
              <a className='text-white mx-2 urbanist' href='/tiketevent/signup'>Daftar</a>
            </button>
          </div>
      </div>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </div>
  )
}

export default Navbar