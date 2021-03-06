import React from 'react';
import './Home.css';
import { Login } from './Login';
import { UserHomeScreen } from './UserHomeScreen';
import { Register } from './Register';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { UserProfileScreen } from '../Components/UserProfileScreen.js';

export class HomePage extends React.Component{
    constructor(){
        super();
        this.state={
            showRegister: false
        };
    }t
    tryLogin(form){
        console.log (form);
        if(!!form){
            return this.renderUserHomeScreen();
        }else{
        }
        await axios.post('http://localhost:8080/user',{
            userName : form.userName    ,
            password : form.password
        }).then();
    }
    async tryRegister(form){
        console.log(form);
        await axios.post('http://localhost:8080/user',{
            //login : form.login,
            userName : form.userName, //não tá funcionando, ele não é enviado na JSON
            password : form.password,
            firstName : form.firstName,
            lastName : form.lastName,
            email : form.email,
            status : 'Ativo'
        }).then();
    }
    renderUserHomeScreen(){
        return <UserHomeScreen/>;
    }
    renderUserProfileScreen(){
        return <UserProfileScreen/>;
    }
    /*goToLogin(){
        this.setState({showRegister: false});
    }
    goToRegister(){
        this.setState({showRegister : true});
    }*/
    renderLogin(){
        return <Login onLogin={(form)=>this.tryLogin(form)}/>;
    }
    renderRegister(){
        return <Register onRegister={(form)=>this.tryRegister(form)}/>;
    }
    render(){
        return (
            <div className="home-page">
                <Route path='/' exact>
                    <Login/>
                </Route>
                <Route path ='/login'>
                    {this.renderLogin()}
                </Route>
                <Route path ='/register'>
                    {this.renderRegister()}
                </Route>
                <Route path='/user'>
                    {this.renderUserHomeScreen()}
                </Route>
                <Route path='/userprofile'>
                    {this.renderUserProfileScreen()}
                </Route>
            </div>
        );
    }
}
