import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AgentLoginService } from '../../../Service/AgentService/AgentLoginService';

function AgentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleAgentLogin = async (event) => {
    event.preventDefault();

    if (email && password) {
      try {
        const userData = await AgentLoginService(email, password);
        console.log(userData); // Log the response for debugging
        navigate('/agentdashboard');
      } catch (error) {
        setErrorMessage('Invalid email or password');
      }
    } else {
      setErrorMessage('Please fill in all fields');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 me-0">
              <div className="card bg-light custom-card-width">
                <div className="card-body">
                  <form onSubmit={handleAgentLogin}>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                      <p
                        className="lead fw-bold text-primary"
                        style={{ fontSize: '24px' }}
                      >
                        Futsal LogIn
                      </p>
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Login
                      </button>
                      {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                      )}
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{' '}
                        <Link to="/agentregister" className="link-danger">
                          Register
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentLogin;
