import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';


function Create() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://64626dbb7a9eead6facf11a0.mockapi.io/crud', {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/read');
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
        const sessionData = localStorage.getItem('userSession');

        if (sessionData) {
            const {id, username, loggedIn, expirationTime } = JSON.parse(sessionData);
            console.log(loggedIn,expirationTime, new Date().getTime() < expirationTime);
            if (loggedIn && new Date().getTime() < expirationTime) {
                navigate('/create');
            }else{
                navigate('/login');
            }
        }else{
            navigate('/');
        }
        //getData();
    }, [])

    return (
        <>
            <div class="container">
                <br/>
                <br/>
                <br/>
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-4">
                        <h1 class="text-center mt-2">Create</h1>
                        <div class="mt-4">
                            <form class="" onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}  className='form-control' required/>
                                </div>
                                <div class="form-group">
                                    <input type='number' placeholder='Age' onChange={(e) => setAge(e.target.value)} className='form-control' required/>
                                </div>
                                <div class="form-group">
                                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' required/>
                                </div>
                                {/*<div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                    <a href="" class="forget-password">forget password?</a>
                                </div>
                                */}
                                <br/>
                                {/* Neither is this */}
                                <div class="form-group ">
                                    <input type="submit" class="btn btn-secondary btn-block bg-secondary bg-gradient" value="Submit"/>
                                </div>
                                
                                <div class="form-group">
                                    <Link to='/read'>
                                        <a href="" class="text-center text-secondary">wanna read data?</a>
                                    </Link>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Create