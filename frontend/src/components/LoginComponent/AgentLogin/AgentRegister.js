
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AgentRegisterService } from '../../../Service/AgentService/AgentRegisterService';

function AgentRegister() {
    const [futsalName, setFutsalName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleAgentRegister = async (event) => {
      event.preventDefault();

    try {
      await AgentRegisterService(futsalName,contact , email , address , name , password);


      navigate('/agentlogin');
    } catch (error) {
      alert('Cannot Signup');
      console.log(error);
    }
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: "25px" }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up for Futsal
                </p>
                <form onSubmit={handleAgentRegister} className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                      
                    className="form-control"
                    value={futsalName}
                    onChange={(e) => setFutsalName(e.target.value)}
                      />
                      <label className="form-label" >
                        Futsal Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"

                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" >
                        Your Email
                      </label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
  className="form-control"
  type="number"
  value={contact}
  
  onChange={(e) => setContact(e.target.value)}
                      />
                      <label className="form-label" >
                        Contact Number
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                      
                    className="form-control"
                    value={name}
                    onChange={(e) => setUsername(e.target.value)}
                      />
                      <label className="form-label" >
                        Username
                      </label>
                    </div></div>
                    <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                      
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                      />
                      <label className="form-label" >
                      Address
                      </label>
                    </div></div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                       
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" >
                        Password
                      </label>
                    </div>
                  </div>
                  
            
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>);

}
export default AgentRegister;