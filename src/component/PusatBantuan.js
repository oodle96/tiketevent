import React from 'react'
import Logo from '../assets/logo-help.png'
import SuitCase from '../assets/ico/suitcase.png'
import SuitCaseSmall from '../assets/ico/suitcase-sm.png'
import Dollar from '../assets/ico/dollar.png'
import DollarSmall from '../assets/ico/dollar-sm.png'
import MoneySmall from '../assets/ico/money-sm.png'
import '../styles/PusatBantuan.css'

function PusatBantuan() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>

        <div className='m-5 d-flex flex-column align-items-center justify-content-center h-25'>
            <img className='m-2'src={Logo}/>
            <h1 className='font-bold-2 m-2'>Pusat Bantuan</h1>
        </div>

        <div className='d-flex flex-column align-items-center justify-content-center height-35'>
            <h3 className='urbanist d-flex justify-content-center align-items-center my-3'>Pilihan Pertanyaan</h3>
            <div class="container text-center">
                <div class="row row-lg-1">
                    <div class="col">
                        <button className='btn btn-light max-btn-faq border cont-rounded font-bold-1'>
                            <img className='mx-2 pb-1' src={SuitCaseSmall}/>
                            Biaya
                        </button>
                    </div>
                    <div class="col">
                        <button className='btn btn-light max-btn-faq border cont-rounded font-bold-1'>
                            <img className='mx-2 pb-1' src={DollarSmall}/>
                            Refund
                        </button>
                    </div>
                    <div class="col">
                        <button className='btn btn-light max-btn-faq border cont-rounded font-bold-1'>
                            <img className='mx-2 pb-1' src={MoneySmall}/>
                            Kerja Sama
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='d-flex align-items-center justify-content-center my-5'>
            <div className='d-flex flex-column align-items-center justify-content-center font-bold-2 me-5'>
                <img className='img-fluid m-4' src={SuitCase}/>
                Biaya
            </div>
            <div className='d-flex flex-column justify-content-center ms-5'>
                <p className='m-0'>Berapa fee yang harus di bayar oleh</p>
                <p className='m-0'>pembeli tiket (diluar harga tiket) ?</p>
                <h3 className='font-bold-1 mt-3 mb-0'>Service Fee 4%</h3>
                <h3 className='font-bold-1 my-3'>Biaya Admin 4%</h3>
                <h3 className='font-bold-1'>Biaya Lainnya</h3>
                <text className='text-gray font-small'>Biaya Lainnya tergantung dari metode pembayaran yang anda pilih.</text>
            </div>
        </div>

        <div className='d-flex align-items-center justify-content-center my-5'>
            <div className='d-flex flex-column align-items-center justify-content-center font-bold-2 me-5'>
                <img className='img-fluid m-4' src={Dollar}/>
                Refund
            </div>
            <div className='d-flex flex-column justify-content-center ms-5'>
                <p className='m-0'>Berapa fee yang harus di bayar oleh</p>
                <p className='m-0'>pembeli tiket (diluar harga tiket) ?</p>
                <h3 className='font-bold-1 mt-3 mb-0'>Service Fee 4%</h3>
                <h3 className='font-bold-1 my-3'>Biaya Admin 4%</h3>
                <h3 className='font-bold-1'>Biaya Lainnya</h3>
                <text className='text-gray font-small'>Biaya Lainnya tergantung dari metode pembayaran yang anda pilih.</text>
            </div>
        </div>
    </div>
  )
}

export default PusatBantuan