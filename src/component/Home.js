import React from 'react'
import { Row } from 'react-bootstrap'
import Event1 from '../assets/event-091022.png'
import '../styles/Home.css'
import { FaCalendarAlt, FaDollarSign, FaStar } from 'react-icons/fa'
import DefaultBanner from '../assets/default-event.png'
import ExBanner from '../assets/exbanner.png'
import ExPp from '../assets/expp.png'
import VectPerson from '../assets/vector-person.png'

import Slider from '../component/Slider.jsx'

function Home() {
  return (
    <div>
        <div className='d-flex bg-blue align-items-center justify-content-center'>
            <div className='container p-0'>
                <Slider/>
            </div>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
            <div className='max-header d-flex flex-column align-items-center justify-content-center cont-rounded bg-blueocean mt-n1'>
                <div className='d-flex align-items-center justify-content-center'>
                    <h4 className='urbanist my-3 text-white'><FaStar/> Top Selling</h4>
                </div>
                <div className='d-flex align-items-center justify-content-between border cont-rounded mx-0 bg-white row row-cols-md-3 row-cols-1'>
                    <div className='d-flex'>
                        <div className='d-flex align-items-center justify-content-between w-100 py-2'>
                            <div className='d-flex'>
                                <img src={ DefaultBanner } className='img-fluid' alt='bannerdefault' />
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center w-100 ps-2'>
                                <text className='d-flex w-100'>UMKM Festival Indonesia Vol 3</text>
                                <div className='d-flex w-100 justify-content-between'>
                                    <div className='d-flex flex-column'>
                                        <text className='text-gray'><FaCalendarAlt />  9 September 2022</text>
                                        <text className='text-gray mt-2'><FaDollarSign />  Rp 40.000</text>
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <a href='/tiketevent/event'>
                                            <button className='btn btn-primary'>Beli Tiket</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-top-0 border-bottom-0'>
                        <div className='d-flex align-items-center justify-content-between w-100 py-2'>
                            <div className='d-flex'>
                                <img src={ DefaultBanner } className='img-fluid' alt='bannerdefault' />
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center w-100 ps-2'>
                                <text className='d-flex w-100'>UMKM Festival Indonesia Vol 3</text>
                                <div className='d-flex w-100 justify-content-between'>
                                    <div className='d-flex flex-column'>
                                        <text className='text-gray'><FaCalendarAlt />  9 September 2022</text>
                                        <text className='text-gray mt-2'><FaDollarSign />  Rp 40.000</text>
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <a href='/tiketevent/event'>
                                            <button className='btn btn-primary'>Beli Tiket</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex align-items-center justify-content-between w-100 py-2'>
                            <div className='d-flex'>
                                <img src={ DefaultBanner } className='img-fluid' alt='bannerdefault' />
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center w-100 ps-2'>
                                <text className='d-flex w-100'>UMKM Festival Indonesia Vol 3</text>
                                <div className='d-flex w-100 justify-content-between'>
                                    <div className='d-flex flex-column'>
                                        <text className='text-gray'><FaCalendarAlt />  9 September 2022</text>
                                        <text className='text-gray mt-2'><FaDollarSign />  Rp 40.000</text>
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <a href='/tiketevent/event'>
                                            <button className='btn btn-primary'>Beli Tiket</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
        <div className='container-lg mt-5'>
            <div className='d-flex flex-column col p-4'>
                <div className='d-flex position-relative'>
                    <h1 className='urbanist my-4'>Featured Event</h1>
                </div>
                <div className='border cont-rounded'>
                    <div className='d-flex align-items-center justify-content-center w-100'>
                        <div className='d-flex flex-column align-items-center justify-content-center px-3 py-3'>
                            <div className='d-flex mw-100'>
                                <img src={ Event1 } className='img-fluid rounded 'alt='banner1' />
                            </div>
                            <h5 className='d-flex w-100 my-2'>UMKM Festival Indonesia Vol 3</h5>
                            <div className='d-flex w-100 justify-content-between'>
                                <div className='d-flex flex-column'>
                                    <text className='text-gray'><FaCalendarAlt />  9 September 2022</text>
                                    <text className='text-gray mt-2'><FaDollarSign />  Rp 40.000</text>
                                </div>
                                <div className='d-flex align-items-end'>
                                    <a href='/tiketevent/event'>
                                        <button className='btn btn-primary'>Beli Tiket</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        <div className='container d-flex flex-column align-items-center justify-content-center full-height'>
            <h1 className='urbanist d-flex justify-content-center align-items-center'>Upcoming Event</h1>
                <div className='row row-cols-md-3 row-cols-1 d-flex align-items-center justify-content-center'>
                    <div className='border cont-rounded p-0 max-card m-2'>
                        <img src={ExBanner} className='img-fluid' alt='exbanner'/> 
                        <div className='container d-flex flex-column px-3'>
                            <text className='text-gray mt-2'>9 September 2022</text>
                            <h6 className='d-flex my-1 w-100'>UMKM Festival Indonesia Vol 3</h6>
                            <text className='mb-2'>Rp 40.000</text>
                            <a href='/tiketevent/event'>
                                <button className='btn btn-primary mb-3'>Beli Tiket</button>
                            </a>
                        </div>
                    </div>
                    <div className='border cont-rounded p-0 max-card m-2'>
                        <img src={ExBanner} className='img-fluid' alt='exbanner'/> 
                        <div className='container d-flex flex-column px-3'>
                            <text className='text-gray mt-2'>9 September 2022</text>
                            <h6 className='d-flex my-1 w-100'>UMKM Festival Indonesia Vol 3</h6>
                            <text className='mb-2'>Rp 40.000</text>
                            <a href='/tiketevent/event'>
                                <button className='btn btn-primary mb-3'>Beli Tiket</button>
                            </a>
                        </div>
                    </div>
                    <div className='border cont-rounded p-0 max-card m-2'>
                        <img src={ExBanner} className='img-fluid' alt='exbanner'/> 
                        <div className='container d-flex flex-column px-3'>
                            <text className='text-gray mt-2'>9 September 2022</text>
                            <h6 className='d-flex my-1 w-100'>UMKM Festival Indonesia Vol 3</h6>
                            <text className='mb-2'>Rp 40.000</text>
                            <a href='/tiketevent/event'>
                                <button className='btn btn-primary mb-3'>Beli Tiket</button>
                            </a>
                        </div>
                    </div>
                </div>
            
        </div>

        <div className='d-flex align-items-center justify-content-center p-5 full-height'>
            <Row xs={1} md={2} >
                <div className='d-flex'>
                    <img src={VectPerson} className='img-fluid p-3' alt='vectperson'/>
                </div>
                <div className='d-flex flex-column align-items-start justify-content-center'>
                    <h1 className='urbanist text-bold mt-2'>Kerja sama dengan biaya mulai dari 3% ?</h1>
                    <text className='text-gray'>Pelajari lebih lanjut bagaimana kamu bisa menambah penghasilan dengan menjadi Organizer. 
                        Mulai dari pengadaan event, monetisasi pengembangan konten secara professional, 
                        hingga pemasaran dan penjualan tiket
                    </text>
                    <button className='btn btn-primary px-4 mt-3'>Selengkapnya </button>
                </div>
            </Row>
        </div>

        <div className='d-flex flex-column align-items-center justify-content-center full-height'>
            <h1 className='urbanist d-flex justify-content-center align-items-center mt-5 mb-3'>Testimoni dari Mereka</h1>
            <div className='row row-cols-md-3 row-cols-1 d-flex align-items-center justify-content-center'>
                <div className='border cont-rounded m-2 p-4 max-card'>
                    <div className='d-flex flex-column px-2'>
                        <div className='d-flex'>
                            <img src={ ExPp }className='img-fluid' alt='img-profile' />
                            <div className='d-flex flex-column p-2 ms-2'>
                                <h6 className='m-0'>Joey Taylor</h6>
                                <text className='text-gray font-12'>Chief Social Media</text>
                            </div>
                        </div>
                        <text className='mt-2 w-100 text-gray urbanist'>
                            Nowadays, it isn't uncommon to see
                            lenders rapidly adopting a digital
                            lending strategy to streamline the
                            the landing process
                        </text>
                    </div>
                </div>
                <div className='border cont-rounded m-2 p-4 max-card'>
                    <div className='d-flex flex-column px-2'>
                        <div className='d-flex'>
                            <img src={ ExPp }className='img-fluid' alt='img-profile' />
                            <div className='d-flex flex-column p-2 ms-2'>
                                <h6 className='m-0'>Joey Taylor</h6>
                                <text className='text-gray font-12'>Chief Social Media</text>
                            </div>
                        </div>
                        <text className='mt-2 w-100 text-gray urbanist'>
                            Nowadays, it isn't uncommon to see
                            lenders rapidly adopting a digital
                            lending strategy to streamline the
                            the landing process
                        </text>
                    </div>
                </div>
                <div className='border cont-rounded m-2 p-4 max-card'>
                    <div className='d-flex flex-column px-2'>
                        <div className='d-flex'>
                            <img src={ ExPp }className='img-fluid' alt='img-profile' />
                            <div className='d-flex flex-column p-2 ms-2'>
                                <h6 className='m-0'>Joey Taylor</h6>
                                <text className='text-gray font-12'>Chief Social Media</text>
                            </div>
                        </div>
                        <text className='mt-2 w-100 text-gray urbanist'>
                            Nowadays, it isn't uncommon to see
                            lenders rapidly adopting a digital
                            lending strategy to streamline the
                            the landing process
                        </text>
                    </div>
                </div>
            </div>   
        </div>
    </div>
    </div>
  )
}

export default Home