import React from 'react'
import '../styles/Event.css'

function ShowHideTabs() {
  return (
    <div className='d-flex flex-column w-100 my-4 mw-tiket'>
        <div className='d-flex w-100 border-bottom'>
            <div className='d-flex p-5 w-25 justify-content-center text-primary urbanist font-bolder'>
                Deskripsi
            </div>
        </div>
        <div className='d-flex flex-column w-100 my-5 urbanist text-gray px-2 fs-6 text'>
            <p className='m-0'>
            Woke Up Fest is an original music festival by CK Star Entertainment 
            </p>
            <p className='m-0'>
            The Woke Up Fest or simply WUF is meant to ‘awake’ our awareness of varieties or “the colourfulness” 
            of things around us that have been there all along, through cross-genre musics and fun activities. 
            </p>
            <p></p>
            <p className='m-0'>
            Woke Up Fest 2023’s purpose is to “really wake” everyone up in the beginning of the year.
            </p>
        </div>
    </div>
  )
}

export default ShowHideTabs
