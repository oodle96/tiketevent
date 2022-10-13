import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
    return (
    <div className='w-50'>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
            <div className='modal-body m-0 p-0 d-flex flex-column align-items-center justify-content-center border cont-rounded'>
                <div className='d-flex flex-column align-items-center justify-content-start bg-white p-4 w-100'> 
                    <div className='container w-100'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h4 className='py-2'>Login</h4>
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
                        <button className='btn btn-primary w-100 mt-4'>Daftar</button>
                    </div>
                </div>
            </div>
      </Modal>
      </div>
    );
  }

export default Login