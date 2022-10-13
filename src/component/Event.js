import React from 'react'
import '../styles/Event.css'
import BannerEvent from '../assets/tiket-banner.png'
import IcoMaps from '../assets/ico/maps.png'
import IcoDate from '../assets/ico/date.png'
import ShowHideTabs from './ShowHideTabs'
import Slider3 from './Slider3'

function Event() {
  return (
    <div className='container d-flex align-items-center justify-content-center'>
        <div className='mw-maxcontent d-flex flex-column align-items-center justify-content-center'>
            <div className='d-flex mw-tiket'>
                <img className='img-fluid' src={BannerEvent}/>
            </div>
            
            <div className='my-4 d-flex w-100'>
                <ShowHideTabs/>
            </div>
            

            <div className='d-flex w-100 align-items-center justify-content-center border cont-rounded mb-5'>
                <div className='d-flex flex-column p-5 w-100'>
                    <h2>Tiket</h2>
                    <div className='my-3'>
                        <h5>UMKM Festival Indonesia Vol.3</h5>
                        <div className='d-flex align-items-center my-3'>
                            <img src={IcoMaps} className='img-fluid me-2'/>
                            <p className='m-0 text-gray '>Jatim Expo, Surabaya </p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src={IcoDate} className='img-fluid me-2'/>
                            <p className='m-0 text-gray '>9 Sept, 2022 </p>
                        </div>
                    </div>
                    <button className='btn btn-primary w-100 text-white mt-1'>Beli Tiket</button>
                </div>
            </div>

            <div className='my-5 d-flex w-100'>
                <Slider3/>
            </div>

        </div>
    </div>
  )
}

export default Event