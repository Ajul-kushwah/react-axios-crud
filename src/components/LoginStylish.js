import axios from 'axios';
import emailjs from '@emailjs/browser'; // npm i @emailjs/browser
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';
import Popper from 'popper.js';

function Login() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    //const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    
    function generateOTP() {
        // Generate a random number between 100000 (inclusive) and 999999 (inclusive)
        return Math.floor(Math.random() * 900000) + 100000;
    }
    
    function sendOTPOnMail(to_name, to_email, otp){
        
        (function(){
            emailjs.init("be3bwCIRZsE9C6r6F"); // Account Public Key
        })();
        
        var params = {
            from_name: "React Crud App - Luja",
            to: to_email,
            to_name: to_name,
            subject: "New message from Chat Application",
            reply_to: "lujahawhsuk02@gmail.com",
            message: `Please login with OTP -  ${otp}`
        };
        
        var serviceID = "service_akctvhd"; // Email Service ID
        var templateID = "template_020grhd"; // Email Template ID
        emailjs.send(serviceID, templateID, params)
        .then( res => {
            alert("OTP sent on Your Email Successfully");
        })
        .catch();
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var randomSixDigitNumber = generateOTP();
    
        // Print the random number
        //console.log(randomSixDigitNumber);
        axios.post('https://64626dbb7a9eead6facf11a0.mockapi.io/user', {
            email: email,
            otp: randomSixDigitNumber
        }).then((response) => {
            //console.log(response.data);
            //navigate('/');
            document.getElementById('sendotp').style.display = 'none'; 
            document.getElementById("email").disabled = true;
            document.getElementById('otp').style.display = 'block';
            document.getElementById('resend-otp').style.display = 'block';
            document.getElementById('verifyotp').style.display = 'block';

            const sessionData = {
                id:response.data.id,
                email: response.data.email
            };
            localStorage.setItem('userID', JSON.stringify(sessionData));

            //sendOTPOnMail("Brother or Unki Sister", response.data.email, randomSixDigitNumber);
            alert(`please login with OTP -  ${randomSixDigitNumber}`);
        }).catch((err) => {
            console.log(err);
        });
    }

    const verifyOTP = (e) => {
        e.preventDefault();
        const sessionData = localStorage.getItem('userID');

        if (sessionData) {
            const {id, email} = JSON.parse(sessionData);
            if (id >0 && email!=null) {
                //console.log(JSON.parse(sessionData));
                //console.log(id);
                axios.get(`https://64626dbb7a9eead6facf11a0.mockapi.io/user/${id}`)
                .then((response) => {
                    //navigate('/');
                    //console.log(response.data);
                    //console.log(name);
                    if(Number(name) === Number(response.data.otp)){
                        alert("Email verified Successfully....");
                        const userSessionData = {
                            id:response.data.id,
                            username: response.data.email,
                            loggedIn: true,
                            // Set session expiration time (e.g., 30 minutes)
                            expirationTime: new Date().getTime() + 30 * 60 * 1000 // 30 minutes from now
                        };
                        localStorage.setItem('userSession', JSON.stringify(userSessionData));
                        navigate('/');
                    }else{
                        alert("Invalid OTP.");
                    }
                }).catch((err) => {
                    console.log(err);
                });
            } 
        }
    }

    useEffect(() => {
        const sessionData = localStorage.getItem('userSession');

        if (sessionData) {
            const {id, username, loggedIn, expirationTime } = JSON.parse(sessionData);
            //console.log(loggedIn,expirationTime, new Date().getTime() < expirationTime);
            if (loggedIn && new Date().getTime() < expirationTime) {
                navigate('/');
            }else{
                navigate('/login');
            }
        }
    }, [])

    return (
        <>
            <div class="container">
                <br/>
                <br/>
                <br/>
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-4">
                        <h1 class="text-center mt-2">Login</h1>
                        <div class="mt-4">
                            <form class="" onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input type='email' id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                                </div>
                                
                                <div class="form-group ">
                                    <input type="submit" id="sendotp" class="btn btn-secondary btn-block" value="Send OTP"/>
                                </div>
                                
                            </form>
                            
                            <form class="" onSubmit={verifyOTP}>
                                
                                <div class="input-group mb-3">
                                    <input type="text" id="otp" style={{display:"none"}}  placeholder='OTP' onChange={(e) => setName(e.target.value)}  className='form-control' aria-describedby="resend-otp" required/>
                                    <button onClick={handleSubmit} class="btn btn-outline-secondary" id="resend-otp" style={{display:"none"}} type="button">resend?</button>
                                </div>
                                
                                <div class="form-group ">
                                    <input type="submit" id="verifyotp" style={{display:"none"}}  class="btn btn-secondary btn-block" value="Verify OTP"/>
                                </div>
 
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Login
