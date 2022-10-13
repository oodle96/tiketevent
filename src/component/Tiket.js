import React from 'react'
import BannerEvent from '../assets/tiket-banner.png'
import '../styles/Event.css'

function Tiket() {
  return (
    <div className='container d-flex align-items-center justify-content-center'>
        <div className='mw-maxcontent d-flex flex-column align-items-center justify-content-center'>
            <div className='d-flex mw-tiket mb-5'>
                <img className='img-fluid' src={BannerEvent}/>
            </div>          

            <div className='d-flex w-100 align-items-center justify-content-center border cont-rounded my-4'>
                <div className='d-flex flex-column p-5 w-100'>
                    <h2>Pilih Kategori</h2>
                    <div className='my-5'>
                        <div className='d-flex mb-5 bg-blue p-3 '>
                            <h5 className='fs-6 text w-40 m-0'>Type Ticket</h5>
                            <h5 className='fs-6 text w-25 m-0'>Harga per Tiket</h5>
                            <h5 className='fs-6 text w-10 m-0'>QTY</h5>
                            <h5 className='fs-6 text w-25 m-0'>Jumlah</h5>
                        </div>
                        <div className='d-flex mb-5 p-3 border-bottom'>
                            <h5 className='fs-6 text w-40'>Presale Konser BTS (INDOOR SENAYAN)</h5>
                            <p className='fs-6 text w-25'>Rp 850.000</p>
                            <div class="dropdown w-10">
                                <button class="btn btn-light dropdown-toggle py-0 px-3 border " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    0
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <p className='fs-6 text w-25'>Rp. 850.000.000</p>
                        </div>

                        <div className='d-flex mb-5 px-3 pb-3 border-bottom'>
                            <h5 className='fs-6 text w-40'>Presale Konser BTS (INDOOR SENAYAN)</h5>
                            <p className='fs-6 text w-25'>Rp 850.000</p>
                            <div class="dropdown w-10">
                                <button class="btn btn-light dropdown-toggle py-0 px-3 border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    0
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <p className='fs-6 text w-25'>Rp. 850.000.000</p>
                        </div>

                        <div className='d-flex px-3 pb-3 border-bottom'>
                            <h5 className='fs-6 text w-40'>GA (STANDING) - EARLY ENTRY</h5>
                            <p className='fs-6 text w-25'>Rp 850.000</p>
                            <div class="dropdown w-10">
                                <button class="btn btn-light dropdown-toggle py-0 px-3 border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    0
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <p className='fs-6 text w-25'>Rp. 850.000.000</p>
                        </div>
                    </div>

                    <button className='btn btn-primary w-100 text-white mt-1'>Beli Sekarang</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Tiket