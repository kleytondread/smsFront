import React from 'react';
import '../Home/Home.css';
import { Link } from 'react-router-dom';

export function UserProfileScreen() {
    return (
        <div id="mother" classe="border-0 shadow p-3 mb-5 bg-white rounded">
            <div className='grey-layer fa-2x'>
                <span>
                    <Link to='/user'>
                        <i class="fas fa-arrow-left light-grey" title="Voltar"></i>
                    </Link>
                </span>
            </div>
            <div>
                <div className='contact-list shadow'>
                    <div style={{height: '400px', width: '470px'}}>
                        <img className='picture-round align-center' src="https://pngimage.net/wp-content/uploads/2018/06/flat-user-icon-png-2.png"></img>
                    </div>
                    <div style={{paddingLeft: '20px'}}>
                        <button className="border-0 shadow p-3 mb-5 bg-white rounded" style={{margin: "auto 30%", color: '#8d8d8d', fontWeight: "bold"}}> CHANGE PICTURE</button>
                    </div>
                </div>
                <div className='message-board form-profile shadow' style={{color: '#9e9e9e'}}>
                    <h1>Profile</h1>
                    <form>
                        <div className="form-group row col-5">
                            <label>Username</label>
                            <input type="text" name="userName" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <div className="col-4">
                                <label>First Name</label>
                                <input type="text" name="firstName" className="form-control"/>
                            </div>
                            <div className="col-7">
                                <label>Last Name</label>
                                <input type="text" name="lastName" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-4">
                                <label>Telephone</label>
                                <input type="text" name="telephone" className="form-control" placeholder="(99) 999-999-999"/>
                            </div>
                            <div className="col-7">
                                <label>Email</label>
                                <input type="text" name="email" className="form-control" placeholder="exemple@exemple.com"/>
                            </div>
                        </div>
                        <div style={{padding: '12px 20px 0px 0px' }}>
                            <span style={{float: 'left', paddingRight: '400px'}}>
                            <button className="border-0 shadow" 
                                style={{color: '#ffffff', backgroundColor: '#9e9e9e', height:'40px', width: '200px', fontWeight: "bold"}}> CHANGE PASSWORD</button>
                            </span>
                            <span>
                                <button className="border-0 shadow" 
                                style={{color: '#ffffff', backgroundColor: '#3e8a28', height:'40px', width: '150px', fontWeight: "bold"}}> SUBMIT</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}