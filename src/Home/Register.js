import React from 'react';
import { Link } from 'react-router-dom';

export function Register(prop) {
    const [errorInLogin, setErrorInLogin] = React.useState(false);
    const [errorInPassword, setErrorInPassword] = React.useState(false);
    const [errorInConfirmPassword, setErrorInConfirmPassword] = React.useState(false);
    const [errorInFirstName, setErrorInFirstName] = React.useState(false);
    const [errorInEmail, setErrorInEmail] = React.useState(false);
    const [form, setForm] = React.useState({
        userName: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const trySubmit = (e) => {
        e.preventDefault();
        let err = false;
        if (!form.userName) {
            setErrorInLogin(true);
            err = true;
        } else if (!form.password) {
            setErrorInPassword(true);
            err = true;
        } else if (form.confirmPassword !== form.password) {
            setErrorInConfirmPassword(true);
            err = true;
        } else if (!form.firstName) {
            setErrorInFirstName(true);
            err = true;
        } else if (!form.email) {
            setErrorInEmail(true);
            err = true;
        }

        if (err)
            return;
        setErrorInLogin(false);
        setErrorInPassword(false);
        setErrorInConfirmPassword(false);
        setErrorInFirstName(false);

        if (prop.onRegister)
            prop.onRegister(form);
    };
    const updateComponent = () => {
        setForm({
            userName: form.userName,
            password: form.password,
            confirmPassword: form.confirmPassword,
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email
        })
    }
    const updateLogin = (e) => {
        form.userName = e.target.value;
        updateComponent();
    }
    const updatePassword = (e) => {
        form.password = e.target.value;
        updateComponent();
    }
    const updateConfirmPassword = (e) => {
        form.confirmPassword = e.target.value;
        updateComponent();
    }
    const updateFirstName = (e) => {
        form.firstName = e.target.value;
        updateComponent();
    }
    const updateLastName = (e) => {
        form.lastName = e.target.value;
        updateComponent();
    }
    const updateEmail = (e) => {
        form.email = e.target.value;
        updateComponent();
    }
    return (
        <div>
            <div className="w-100 d-flex justify-content-center">
                <img src='https://jobs.solides.com/assets/img/logos_empresas/logo__pitang.png' width="180px" style={{ padding: '15px' }} alt="Pitang Logo" />
            </div>
            <div id="red-stripe" />
            <div id="form" className="border-0 shadow p-3 mb-5 bg-white rounded">
                <div>
                    <span>
                        <Link to='/login'>
                            <i class="fas fa-arrow-left fa-2x"
                                title="Voltar"
                                style={{ float: 'left', paddingTop: '5px', paddingRight: '10px', color: '#cbcbcb' }} />
                        </Link>
                    </span>
                    <span>
                        <h2 className='form-title'>REGISTER</h2>
                    </span>
                </div>
                <form onSubmit={trySubmit} style={{ fontSize: '14px', paddingTop: '5px' }}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="userName" value={form.userName} onChange={updateLogin} className={"form-control" + (errorInLogin ? " is-invalid" : "")} />
                        <div className="invalid-feedback">
                            You must fill in the username field.
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={form.password} onChange={updatePassword} className={"form-control" + (errorInPassword ? " is-invalid" : "")} />
                        <div className="invalid-feedback">
                            You must fill in the password field.
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" value={form.confirmPassword} onChange={updateConfirmPassword} className={"form-control" + (errorInConfirmPassword ? " is-invalid" : "")} />
                        <div className="invalid-feedback">
                            This field needs be be equal to your Password.
                        </div>
                    </div>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" value={form.firstName} onChange={updateFirstName} className={"form-control" + (errorInFirstName ? " is-invalid" : "")} />
                        <div className="invalid-feedback">
                            You need to have a first name.
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" value={form.lastName} onChange={updateLastName} className={"form-control"} />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="text" value={form.email} onChange={updateEmail} className={"form-control" + (errorInEmail ? " is-invalid" : "")} />
                        <div className="invalid-feedback">
                            You need to have an email.
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" id="acceptTermsService" type="checkbox" />
                        <label className="form-check-label" htmlFor="acceptTermsService">I accept the Terms of Service </label>
                    </div>
                    <div className="form-group mt-2">
                        <button class="btn-pitang green-btn">REGISTER</button>
                    </div>
                </form>
            </div>
        </div>
    );
}