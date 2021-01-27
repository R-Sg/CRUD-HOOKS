import React, {useState, useEffect}from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'

const EditUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })
    const {name, username, email} = user;
    const id  = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id.id}`)
        setUser(result.data)
    }

    const changeValue = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }


    const updateData = async e => {
        e.preventDefault()
        const result =  await axios.put(`http://localhost:3001/users/${id.id}`, user)
        history.push("/")
    }

    return (
        <div>
            <div class="container register">
                <div class="row" >
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>Now you are on edit user page/component, you can just Edit a user.</p>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Edit A User</h3>
                                <div class="row register-form">
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name *" value={name} name="name" onChange={e => changeValue(e)} />
                                        </div>                                        
                                        <div class="form-group"> 
                                            <input type="text" class="form-control" placeholder="UserName *" value={username} name="username" onChange={e => changeValue(e)} />
                                        </div>                                    
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Your Email *" value={email} name="email" onChange={e => changeValue(e)} />
                                        </div>
                                        <input type="submit" onClick={e => updateData(e)} class="btnRegister"  value="Update" />
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

export default EditUser;