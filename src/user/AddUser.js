import React, {useEffect, useState} from "react";
import './AddUser.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const {name, username, email} = user;

    const addData = async e => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3001/users', user)
        console.log(response.data)
        history.push('/')
    }

    const changeValue = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div class="container register">
                <div class="row" >
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>Now you are on add user page/component, you can just add a user.</p>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Add User</h3>
                                <div class="row register-form">
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name *" value={name} name="name" onChange={e => changeValue(e)}/>
                                        </div>
                                        
                                        <div class="form-group"> 
                                            <input type="text" class="form-control" placeholder="UserName *" value={username} name="username" onChange={e => changeValue(e)}/>
                                        </div>
                                    
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Your Email *" value={email} name="email" onChange={e => changeValue(e)}/>
                                        </div>
                                        <input type="submit" onClick={e => addData(e)} class="btnRegister"  value="Submit"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddUser