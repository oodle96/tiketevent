import React from 'react'

function Signup() {
  return (
    <div>
        <div className='d-flex align-items-center app-bg'>
            <div className='container full px-0 d-flex flex-column align-items-center justify-content-center'>
                <div className='d-flex flex-column align-items-center justify-content-start bg-white py-3 w-25 rounded-box'> 
                    <div className='container mb-3'>
                        <h3 className='py-2'>Sign Up</h3>
                        <div className='my-2'>
                            <label for="inputName" class="form-label">Nama</label>
                            <input type="name" class="form-control" id="inputName" aria-describedby="nameHelp"></input>
                        </div>
                        <div className='my-2'>
                            <label for="inputPhone" class="form-label">Nomor Telepon</label>
                            <input type="phone" class="form-control" id="inputPhone" aria-describedby="phoneHelp"></input>
                        </div>
                        <div className='my-2'>
                            <label for="inputEmail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"></input>
                        </div>
                        <div className='my-2'>
                            <label for="inputPassword" class="form-label">Kata Sandi</label>
                            <input type="password" class="form-control" id="inputPassword" aria-describedby="passwordHelp"></input>
                        </div>
                        <button className='btn btn-primary my-2'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup