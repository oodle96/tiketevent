import React from 'react'

function Login() {
  return (
    <div>
        <div className='d-flex align-items-center app-bg'>
            <div className='container full px-0 d-flex flex-column align-items-center justify-content-center'>
                <div className='d-flex flex-column align-items-center justify-content-start bg-white py-3 w-25 rounded-box'> 
                    <div className='container mb-3'>
                        <h3 className='py-2'>Login</h3>
                        <div className='my-2'>
                            <label for="inputEmail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"></input>
                        </div>
                        <div className='my-2'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <label for="inputPassword" class="form-label">Kata Sandi</label>
                                <a href='/reset'>Lupa kata sandi?</a>
                            </div>
                            <input type="password" class="form-control" id="inputPassword" aria-describedby="passwordHelp"></input>
                        </div>
                        <button className='btn btn-primary my-2'>Login</button>
                        <div className='container'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <text>Belum punya akun? </text>
                                <a className='mx-1' href='/signup'>Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login