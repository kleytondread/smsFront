import React from 'react';
import { Link } from 'react-router-dom';

export function Register(prop){
    const [errorInLogin, setErrorInLogin] = React.useState (false);
    const [errorInPassword, setErrorInPassword] = React.useState (false);
    const [errorInConfirmPassword, setErrorInConfirmPassword] = React.useState (false);
    const [errorInFirstName, setErrorInFirstName] = React.useState (false);
    const [errorInEmail, setErrorInEmail] = React.useState (false);
    const [form,setForm] = React.useState({
        login: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const trySubmit =(e)=>{
        e.preventDefault();
        let err = false;
        if(!form.login){
            setErrorInLogin(true);
            err = true;
        } else if(!form.password){
            setErrorInPassword(true);
            err = true;
        } else if(form.confirmPassword!==form.password){
            setErrorInConfirmPassword (true);
            err = true;
        }else if (!form.firstName){
            setErrorInFirstName (true);
            err = true;
        }else if (!form.email){
            setErrorInEmail(true);
            err = true;
        }
        
        if(err)
            return;
        setErrorInLogin(false);
        setErrorInPassword(false);
        setErrorInConfirmPassword(false);
        setErrorInFirstName(false);

        if(prop.onRegister)
            prop.onRegister(form);
    };
    const updateComponent = ()=>{
        setForm({login: form.login, 
            password: form.password, 
            confirmPassword: form.confirmPassword,
            firstName: form.firstName, 
            lastName: form.lastName, 
            email: form.email
        })
    }
    const updateLogin = (e)=>{
        form.login = e.target.value;
        updateComponent();
    }
    const updatePassword = (e)=>{
        form.password = e.target.value;
        updateComponent();
    }
    const updateConfirmPassword =(e)=>{
        form.confirmPassword = e.target.value;
        updateComponent();
    }
    const updateFirstName = (e)=>{
        form.firstName = e.target.value;
        updateComponent();
    }
    const updateLastName = (e)=>{
        form.lastName = e.target.value;
        updateComponent();
    }
    const updateEmail = (e)=>{
        form.email = e.target.value;
        updateComponent();
    }
    return(
        <div>
        <h2>Sign in</h2>
        <form onSubmit={trySubmit}>
            <div className="from-group">
                <label>Username</label>
                <input type="text" name="login" value={form.login} onChange={updateLogin}  className={"form-control"+(errorInLogin ? " is-invalid" : "")}/>
                <div className="invalid-feedback">
                    You must fill in the username field.
                </div>
            </div>
            <div className="from-group">
                <label>Password</label>
                <input type="password" value={form.password} onChange={updatePassword} className={"form-control"+(errorInPassword ? " is-invalid" : "")}/>
                <div className="invalid-feedback">
                    You must fill in the password field.
                </div>
            </div>
            <div className="from-group">
                <label>Confirm Password</label>
                <input type="password" value={form.confirmPassword} onChange={updateConfirmPassword} className={"form-control"+(errorInConfirmPassword ? " is-invalid" : "")}/>
                <div className="invalid-feedback">
                    This field needs be be equal to your Password.
                </div>
            </div>
            <div>
                <label>First name</label>
                <input type="text" value={form.firstName} onChange={updateFirstName} className={"form-control"+(errorInFirstName ? " is-invalid" : "")} />
                <div className="invalid-feedback">
                    You need to have a first name.
                </div>
            </div>
            <div>
                <label>Last name</label>
                <input type="text" value={form.lastName} onChange={updateLastName} className={"form-control"} />
            </div>
            <div>
                <label>Email address</label>
                <input type="text" value={form.email} onChange={updateEmail} className={"form-control"+(errorInEmail ? " is-invalid" : "")} />
                <div className="invalid-feedback">
                    You need to have an email.
                </div>
            </div>
            <div className="form-group mt-2">
                 <button class="btn btn-success w-100">Register</button>
            </div>
            <div className="form-group">
                <Link to='/login'>
                    <button class="btn btn-outline-secondary w-100">Go Back</button>
                </Link>
            </div>
            
        </form>
    </div>
    );
}