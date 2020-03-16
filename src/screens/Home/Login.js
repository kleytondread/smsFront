import React from 'react';
import { Link } from 'react-router-dom';

export function Login(prop){
    const [errorInLogin, setErrorInLogin] = React.useState (false);
    const [errorInPassword, setErrorInPassword] = React.useState (false);
    const [form,setForm] = React.useState({
        login: '',
        password: ''
    });
    const trySubmit =(e)=>{
        e.preventDefault();
        if(!form.login){
            setErrorInLogin(true);
            return;
        } else if(!form.password){
            setErrorInPassword(true);
            return;
        }
        setErrorInLogin(false);
        setErrorInPassword(false);
        if(prop.onLogin)
            prop.onLogin(form);
    };
    const updateComponent =  ()=>{
        setForm({login: form.login, password: form.password})
    }
    const updateLogin = (e)=>{
        form.login = e.target.value;
        updateComponent();
    }
    const updatePassword = (e)=>{
        form.password = e.target.value;
        updateComponent();
    }
    return(
    <div>
        <h2>Sign in</h2>
        <form onSubmit={trySubmit}>
            <div className="from-group">
                <label>Login</label>
                <input type="text" name="login" value={form.login} onChange={updateLogin}  className={"form-control"+(errorInLogin ? " is-invalid" : "")}/>
                <div className="invalid-feedback">
                    You must fill in the login field.
                </div>
            </div>
            <div className="from-group">
                <label>Password</label>
                <input type="password" value={form.password} onChange={updatePassword} className={"form-control"+(errorInPassword ? " is-invalid" : "")}/>
                <div className="invalid-feedback">
                    You must fill in the password field.
                </div>
            </div>
            <div className="form-check">
                <input className="form-check-input" id="remember" type="checkbox"/>
                <label className="form-check-label" htmlFor="remember">Remember me </label>
            </div>
            <div className="form-group mt-2">
                 <button className="btn btn-success w-100">Log in</button>
            </div>
            <div className="form-group">
                <Link to='/register'>
                    <button className="btn btn-outline-secondary w-100" >Sign Up</button>
                </Link>
               
            </div>
            
        </form>
    </div>
    );
}