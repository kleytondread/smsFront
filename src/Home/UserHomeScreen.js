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
        <div>

            <div className="grey-layer fa-2x shadow">
                <span style={{ paddingRight: '290px' }} >
                    <Link to='/userprofile'>
                        <i class="fas fa-user bright-yellow" title="Profile"></i>
                    </Link>
                </span>
                <span style={{ paddingRight: '25px' }}><i class="fas fa-user-plus" title="Add User"></i></span>
                <span style={{ paddingRight: '25px' }} ><i class="fas fa-comment-alt"></i></span>
                <span style={{ paddingRight: '860px' }}><i class="fas fa-ellipsis-v"></i></span>
                <span><i class="fas fa-ellipsis-v"></i></span>
            </div>
            <div>
                <div className="contact-list shadow" >
                    <div style={{ height: "45px", paddingLeft: "12px", paddingTop: "8px", backgroundColor: "#e5e5e5" }}>
                        <i class="fas fa-search" title="Search"
                            style={{ position: 'absolute', paddingTop: '5px', paddingLeft: "10px", color: "#545454" }}></i>
                        <input className="search-bar" type="text" placeholder="Search" />
                    </div>

                </div>
                <div className="message-board shadow">
                    <div className="chat-room">
                        
                    </div>
                    <div className="send-message-field">
                        <div>
                            <form>
                                <input className="send-message-bar" type="text" placeholder="Message..."/>
                                <span class="fa-stack fa-2x" style={{ color: '#cecece', left :'20px'}}>
                                    <i class="fas fa-circle fa-stack-2x" style={{ color: '#cecece'}} ></i>
                                    <i class="fas fa-paper-plane fa-stack-1x fa-inverse" type="submit" title="Send Text"></i>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}