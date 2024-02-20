import emailjs from '@emailjs/browser';
import React from 'react'

function SendEmail() {
  


    function sendOTP(to_name, to_email, otp){
        console.log(to_name, to_email, otp);
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
            message: `Hi ${to_name}, please login with OTP -  ${otp}`
        };
        
        var serviceID = "service_akctvhd"; // Email Service ID
        var templateID = "template_020grhd"; // Email Template ID
        emailjs.send(serviceID, templateID, params)
        .then( res => {
            alert("OTP sent on Your Email Successfully");
        })
        .catch();
    }

    // return (
    //     <div>SendEmail</div>
    // )
}


export default SendEmail

// Function to start a session for the authenticated user
// function startSession(username) {
//     // Set session data
//     const sessionData = {
//         username: username,
//         loggedIn: true,
//         // Set session expiration time (e.g., 30 minutes)
//         expirationTime: new Date().getTime() + 30 * 60 * 1000 // 30 minutes from now
//     };

//     // Store session data in localStorage
//     localStorage.setItem('userSession', JSON.stringify(sessionData));
// }

// // Function to check if a session exists and is still valid
// function checkSession() {
//     // Retrieve session data from localStorage
//     const sessionData = localStorage.getItem('userSession');

//     if (sessionData) {
//         const { username, loggedIn, expirationTime } = JSON.parse(sessionData);
        
//         // Check if session is still valid
//         if (loggedIn && new Date().getTime() < expirationTime) {
//             // Session is valid, return username
//             return username;
//         } else {
//             // Session has expired or user is not logged in
//             // Clear session
//             endSession();
//             return null;
//         }
//     } else {
//         // Session does not exist
//         return null;
//     }
// }

// // Function to end the user session
// function endSession() {
//     // Remove session data from localStorage
//     localStorage.removeItem('userSession');
// }

// // Example usage:
// // Starting a session
// startSession('exampleUser');

// // Checking if the session is still valid
// const authenticatedUser = checkSession();
// if (authenticatedUser) {
//     console.log("User is authenticated:", authenticatedUser);
// } else {
//     console.log("User session has expired or user is not logged in.");
// }

// // Ending the session (logging out)
// endSession();


