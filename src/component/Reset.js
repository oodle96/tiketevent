import React from 'react'

function Reset() {
  return (
<div>
    <div className='d-flex align-items-center app-bg'>
        <div className='container full px-0 d-flex flex-column align-items-center justify-content-center'>
            <div className='d-flex flex-column align-items-center justify-content-start bg-white py-3 w-25 rounded-box'> 
                <div className='container mb-3'>
                    <h3 className='py-2'>Reset Kata Sandi</h3>
                    <text>Masukan Email kamu dan kamu akan mendapatkan link untuk mereset kata sandi.</text>
                    <div className='my-4'>
                        <label for="inputEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"></input>
                    </div>
                    <button className='btn btn-primary my-2'>Kirim</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Reset