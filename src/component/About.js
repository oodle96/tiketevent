import React from 'react'
import Logo from '../assets/e-logo.png'
import '../styles/About.css'

function About() {
  return (
    <div>
      <div className='d-flex flex-column align-items-center justify-content-center container bg-banner-about'>
        <div className='w-50 container m-5 px-5'>
          <div className='d-flex flex-column mx-4'>
            <h1 className='text-white font-banner m-0'>
              Create Your Event
            </h1>
            <h1 className='text-white font-banner'>
              with Tike
              <img src={Logo}/>
              vent
            </h1>
            <p className='text-white font-banner-sm m-0'>
              Lebih dari 30.000 Tiket telah terjual
            </p>
            <p className='text-white font-banner-sm m-0'>
              di tiketevent.com
            </p>
          </div>
        </div>
      </div>
      <div className='container d-flex align-items-center justify-content-center mt-5'>
        <div className='mt-3'>
          <h1 className='container urbanist'>Tentang Kami</h1>
          <div className='container text-gray urbanist'>
            <p className='m-0'>
              TIKET EVENT adalah platform yang yang berfokus pada Ticketing Management Service.
            </p>
            <p className='m-0'>
              Kami mendukung seluruh penyelenggara event mulai dari distribusi & manajemen tiket, hingga penyediaan laporan 
            </p>
            <p>
              analisa event di akhir acara.
            </p>
          </div>
          <div className='container text-gray urbanist'>
          <p className='m-0'>
            Situs kami juga telah menjual lebih dari 30.000 Tiket sejak situs ini di luncurkan (20 September 2022).
            </p>
            <p className='m-0'>
              Dengan menggunakan sistem pembayaran yang Flexibel akan lebih memudahkan anda untuk memilih sistem
            </p>
            <p>
              pembayaran yang anda mau. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About