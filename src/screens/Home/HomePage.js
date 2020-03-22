import React from 'react';
import './Home.css';
import { Login } from './Login';
import { Register } from './Register';
import axios from 'axios';
import { Route } from 'react-router-dom';

export class HomePage extends React.Component{
    constructor(){
        super();
        this.state={
            showRegister: false
        };
    }t
    async tryLogin(form){
        console.log (form);
        await axios.get('http://localhost:8080/user',{
            userName : form.Login,
            password : form.password
        }).then();
    }
    async tryRegister(form){
        console.log(form);
        await axios.post('http://localhost:8080/user',{
            login : form.login,
            userName : form.Login, //não tá funcionando, ele não é enviado na JSON
            password : form.password,
            firstName : form.firstName,
            lastName : form.lastName,
            email : form.email,
            status : 'Ativo'
        }).then();
    }

    goToLogin(){
        this.setState({showRegister: false});
    }
    goToRegister(){
        this.setState({showRegister : true});
    }
    renderLogin(){
        return <Login onLogin={(form)=>this.tryLogin(form)} onRegister={()=>this.goToRegister()} />;
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
            </div>
        );
    }
}
