import React from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';

export function UserHomeScreen() {
    /*const [form, setForm] = React.useState({
        text : '',
        sender: '',
        recipient: ''
    });

    const trySendMessage = (e) =>{
        e.preventDefault();

        if(!form.text){
            return;
        }else{
            sendMessage(form);
        }

    }
    async function sendMessage (form) {
        await axios.post('http://localhost:8080/user', {
            text: form.text
        }).then();
    }
    const updateMessage = (e) =>{
        form.text = e.target.value;
        setForm ({text: form.text});
    } 
    const getSender = () =>{
        //something to que sender id (maybe a get request)
    }*/
    return (
        <div className="shadow1">

            <div className="grey-layer fa-2x shadow1">
                <div className="dropdown" style={{ paddingRight: '250px' }} >
                    <Link to='/userprofile'>
                        <i class="fas fa-user bright-yellow" title="Profile"></i>
                    </Link>
                </div>
                <div className="dropdown spacing-icon icon-color">
                    <i class="fas fa-user-plus" title="Add User"></i>
                    <div class="dropdown-content">
                        <a href="http://google.com"><i class="fas fa-plus" style={{color: '#4d8a4c'}}></i> by Username</a>
                        <a href="http://google.com"><i class="fas fa-plus" style={{color: '#4d8a4c'}}></i> by Email</a>
                    </div>
                </div>
                <div className="dropdown spacing-icon icon-color">
                    <i class="fas fa-comment-alt"></i>
                    <div class="dropdown-content">
                        <a href="http://google.com">Link 1</a>
                        <a href="http://google.com">Link 2</a>
                        <a href="http://google.com#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="dropdown spacing-icon icon-color">
                        <i class="fas fa-ellipsis-v"></i>
                        <div class="dropdown-content" style={{ right: '0px' }}>
                            <a href="http://google.com">About<i class="fas fa-info-circle align-icon-right"></i></a>
                            <a href="http://google.com">Help <i class="fas fa-question-circle align-icon-right"></i></a>
                            <a href="/login">Sign out<i class="fas fa-sign-out-alt align-icon-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="dropdown" style={{ paddingRight: '820px' }}></div>
                <div className="dropdown spacing-icon icon-color">
                    <i class="fas fa-ellipsis-v"></i>
                    <div class="dropdown-content" style={{ right: '10px' }}>
                        <a href="http://google.com">Delete message</a>
                        <a href="http://google.com">Clear chat</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="contact-list shadow" >
                    <div style={{ height: "45px", paddingLeft: "12px", paddingTop: "8px", backgroundColor: "#e5e5e5" }}>
                        <i class="fas fa-search" title="Search"
                            style={{ position: 'absolute', paddingTop: '5px', paddingLeft: "10px", color: "#545454" }}></i>
                        <input className="search-bar" type="text" placeholder="Search" />
                    </div>

                </div>
                <div className="message-board">
                    <div className="chat-room">

                    </div>
                    <div className="send-message-field">
                        <div>
                            <form>
                                <input className="send-message-bar" type="text" placeholder="Message..." />
                                <span class="fa-stack fa-2x" style={{ color: '#cecece', left: '20px' }}>
                                    <i class="fas fa-circle fa-stack-2x" style={{ color: '#a2a2a2' }} ></i>
                                    <i class="fas fa-paper-plane fa-stack-1x fa-inverse icon-color" type="submit" title="Send Text"></i>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}