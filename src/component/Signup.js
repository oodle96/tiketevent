import React from 'react'

function Signup() {
  return (
    <div>
        <div className='d-flex position-fixed w-100 h-100 align-items-center bg-blue'>
            <div className='container full px-0 d-flex flex-column align-items-center justify-content-center w-25'>
                <div className='d-flex flex-column align-items-center justify-content-start bg-white p-4 border cont-rounded w-100'> 
                    <div className='container w-100'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h4 className='py-2'>Daftar</h4>
                            <a className='text-primary' href='/'>Log In</a>
                        </div>
                        <div className='my-2'>
                            <label for="inputEmail" class="form-label text-black text-bold fs-6 text mb-0">EMAIL</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
                                
                            </input>
                        </div>

                        <div className='my-2'>
                            <label for="inputEmail" class="form-label text-black text-bold fs-6 text mb-0">Password</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
                                
                            </input>
                        </div>

                        <div className='my-2'>
                            <label for="inputEmail" class="form-label text-black text-bold fs-6 text mb-0">VerifyPassword</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
                                
                            </input>
                        </div>
                        <button className='btn btn-primary w-100 mt-4'>Daftar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup