import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginStyled } from './Login.styled';
import { useLogin } from '../../Hooks/Login/useLogin';
import { useRegister } from '../../Hooks/Login/useRegister';

const Login = () => {
  const navigate = useNavigate();

  // Sử dụng hook useLogin và useRegister
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit: handleLoginSubmit,
  } = useLogin();

  const {
    username: registerUsername,
    password: registerPassword,
    employeeId,
    handleUsernameChange: handleRegisterUsernameChange,
    handlePasswordChange: handleRegisterPasswordChange,
    handleEmployeeIdChange,
    handleSubmit: handleRegisterSubmit,
  } = useRegister();

  // Xử lý chuyển đổi giữa trang đăng nhập và trang đăng ký
  const handleToggleForm = () => {
    const checkbox = document.getElementById('reg-log');
    if (checkbox.checked) {
      navigate('/');
    } else {
      navigate('/');
    }
  };

  return (
    <LoginStyled>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-4">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                  onClick={handleToggleForm}
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Username"
                              value={username}
                              onChange={handleUsernameChange}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Password"
                              value={password}
                              onChange={handlePasswordChange}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="" className="btn mt-4" onClick={handleLoginSubmit}>Login</a>
                          <p className="mb-0 mt-4 text-center">
                            <a href="" className="link">Welcome to ABC Company</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-3 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              placeholder="Username"
                              value={registerUsername}
                              onChange={handleRegisterUsernameChange}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Password"
                              value={registerPassword}
                              onChange={handleRegisterPasswordChange}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Employee Id"
                              value={employeeId}
                              onChange={handleEmployeeIdChange}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="" className="btn mt-4" onClick={handleRegisterSubmit}>Register</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
