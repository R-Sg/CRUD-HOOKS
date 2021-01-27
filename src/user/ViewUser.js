import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const ViewUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })
    const { id } = useParams();
    const {name, username, email} = user;

    const loadUser = async () => {
        const response = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(response.data)
    }

    useEffect( () => {
        loadUser();
    })

    const goBack = e => {
        e.preventDefault()
        history.push("/")
        
    }
 
    return (
        <div>
        <div class="container register">
            <div class="row" >
                <div class="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                    <h3>Welcome</h3>
                    <p>Now you are on view user page/component, you can just Edit a user.</p>
                </div>
                <div class="col-md-9 register-right">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 class="register-heading">View A User Detail</h3>
                            <div class="row register-form">
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name *" value={name} name="name" />
                                    </div>                                        
                                    <div class="form-group"> 
                                        <input type="text" class="form-control" placeholder="UserName *" value={username} name="username" />
                                    </div>                                    
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Your Email *" value={email} name="email" />
                                    </div>
                                    <input type="submit" onClick={e => goBack(e)} class="btnRegister"  value="Go to Home" />
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

export default ViewUser