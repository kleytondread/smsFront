import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


export function Login(prop) {
    const [errorInLogin, setErrorInLogin] = React.useState(false);
    const [errorInPassword, setErrorInPassword] = React.useState(false);
    const [form, setForm] = React.useState({
        userName: '',
        password: ''
    });
    const trySubmit = (e) => {
        e.preventDefault();
        if (!form.userName) {
            setErrorInLogin(true);
            return;
        } else if (!form.password) {
            setErrorInPassword(true);
            return;
        }
        setErrorInLogin(false);
        setErrorInPassword(false);
        if (prop.onLogin)
            prop.onLogin(form);
    };
    const updateComponent = () => {
        setForm({ userName: form.userName, password: form.password })
    }
    const updateLogin = (e) => {
        form.userName = e.target.value;
        updateComponent();
    }
    const updatePassword = (e) => {
        form.password = e.target.value;
        updateComponent();
    }
    return (
        <div>
            <div className="w-100 d-flex justify-content-center">
                <img src='https://jobs.solides.com/assets/img/logos_empresas/logo__pitang.png' width="180px" style={{ padding: '15px' }} alt="Pitang Logo" />
            </div>
            <div id="red-stripe" />
            <div id="form" className="border-0 shadow p-3 mb-5 bg-white rounded">
                <i class="glyphicon glyphicon-cloud"></i>

                <h2 className='form-title'>SIGN IN</h2>
                <form onSubmit={trySubmit} style={{ fontSize: '14px' }}>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" name="userName" value={form.userName} onChange={updateLogin} className={"form-control" + (errorInLogin ? " is-invalid" : "")} />
                        <div className="invalid-feedback">
                            You must fill in the login field.
                </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={form.password} onChange={updatePassword} className={"form-control" + (errorInPassword ? " is-invalid" : "")} />
                        <div className="invalid-feedback">
                            You must fill in the password field.
                </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" id="remember" type="checkbox" />
                        <label className="form-check-label" htmlFor="remember">Remember me </label>
                    </div>
                    <div className="form-group mt-2">
                        <Link to='/user'>
                            <button className="btn-pitang green-btn">SIGN IN</button>
                        </Link>
                    </div>
                    <div className="form-group">
                        <Link to='/register'>
                            <button className="btn-pitang white-btn">SIGN UP</button>
                        </Link>

                    </div>

                </form>
            </div>
        </div>
    );
}