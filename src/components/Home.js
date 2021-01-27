import React, { Component } from "react";
import axios from "axios";
import { Link, BrowserRouter } from "react-router-dom";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        this.setState({
            users: result.data
        });
    }

    componentDidMount() {
        this.loadUsers();
    }

    deleteUser = async e => {
        await axios.delete(`http://localhost:3001/users/${e.id}`)
        this.loadUsers();
    }

    render() {
        return (
            <div className="py-4" style={{width:1200, display:"inline-block"}}>
                <table className="table border shadow">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map( (user, index) => (
                                <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className='btn btn-primary mr-2' to={`/user/view/${user.id}`}>View</Link>
                                    <Link className='btn btn-outline-primary mr-2' to={`/user/edit/${user.id}`}>Edit</Link>
                                    <Link className='btn btn-danger' to='' onClick={ e => this.deleteUser(user)}>Delete</Link> 
                                </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home