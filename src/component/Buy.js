import React from 'react'
import Delva from '../assets/delva.png'

function Buy() {
  return (
    <div>
        <div className='d-flex banner-bg'>
            <div className='container full d-flex flex-column justify-content-center'>
                <div className='d-flex flex-column py-4 justify-content-center'>
                    <h1 className='text-yellow'>UMKM FESTIVAL</h1>
                    <h1 className='text-white'>INDONESIA.</h1>
                    <div className='d-flex my-3'>
                        <text className='text-white'>Powered by:</text>
                        <div>
                            <img className='img-fluid logo-delva mw-25 mx-2'src={Delva}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex align-items-center app-bg'>
        <div className='container full px-0 d-flex flex-column align-items-center justify-content-center'>
            <div className='d-flex flex-column align-items-center justify-content-start bg-white my-3 w-50 rounded-box'> 
                <div className='container mb-3'>
                    <h5 className='py-2'>UMKM Festival Indonesia Vol.3</h5>
                    <h6 className='py-2'>Deskripsi</h6>
                    <text className='description'>Ultranauts prepare yourselves! ULTRA Beach returns to the shores of Bali on September 29-30 at  @discoverykartikaplaza for the 4th edition of #UltraBeachBali The #UltraBeachBali lineup is here! Who’s joining us for our 4th edition?Tickets on sale now!
                    </text>
                </div>  
            </div>
            <div className='d-flex flex-column align-items-center justify-content-start bg-white my-3 w-50 rounded-box'> 
                <div className='container mb-3'>
                    <h5 className='py-2'>Tiket</h5>
                    <h6 className='py-2'>UMKM Festival Indonesia Vol.3</h6>
                    <h6 className='description my-2'>
                        Jatim Expo, Surabaya
                    </h6>
                    <h6 className='description my-2'>
                        9 Sept, 2022
                    </h6>
                    <div className='d-flex justify-content-between my-2'>
                        <h6>Tipe Ticket</h6>
                        <h6>Presale</h6>
                    </div>
                    <div className='d-flex justify-content-between my-2'>
                        <h6>Rp.40.000/pax</h6>
                        <div className='d-flex'>
                            <button className='btn btn-light'> - </button>
                            <text>1</text>
                            <button className='btn btn-light'> + </button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between my-2'>
                        <h6>Sub Total</h6>
                        <h6>Rp.40.000</h6>
                    </div>
                    <button className='btn btn-primary my-2'>Checkout</button>
                </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Buy