import React from 'react'
import logofooter from '../assets/logo.png'
import '../styles/Footer.css'
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import { FaRegPhoneAlt } from 'react-icons/fa'

function Footer() {
  return (
    <div className='d-flex mw-100 justify-content-center'>
        <div className='mw-nav d-flex justify-content-center w-100'>
            <div className='mw-footer d-flex position-relative align-items-center justify-content-between w-100'>
                <div className='d-flex container'>
                    <div className='d-flex align-items-center'>
                        <img src={logofooter} className='img-fluid' alt='logo2' />
                    </div>  
                </div>
                <div className='container d-flex align-items-start justify-content-end my-3'>
                    <div className='d-flex flex-column max-content px-5'>
                        <div class="urbanist footer-title my-3">
                            Kontak
                        </div>
                        <div>
                            <li className='my-2'>
                                <text className='footer-text'><FaPhoneAlt/> +62 856 988 8777</text>
                            </li>
                            <li className='my-2'>
                                <text className="footer-text"><FaRegEnvelope/> timdelvadigital@gmail.com</text>
                            </li>
                        </div>
                    </div>
                    <div className='d-flex flex-column max-content'>
                        <div class="urbanist footer-title my-3">
                            Dukungan
                        </div>
                        <div>
                            <li className='my-2'>
                                <a className='text-black' href='/'>How to Buy</a>
                            </li>
                            <li className='my-2'>
                                <a className="text-black" href='/'>FAQ</a>
                            </li>
                            <li className='my-2'>
                                <a className="text-black" href='/'>Syarat dan Ketentuan</a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer