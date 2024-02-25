import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SettingStylish() {

    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');

    useEffect (()=>{
        const sessionData = localStorage.getItem('userSession');

        if (sessionData) {
            const {id, username, loggedIn, expirationTime } = JSON.parse(sessionData);
            //console.log(loggedIn,expirationTime, new Date().getTime() < expirationTime);
            if (loggedIn && new Date().getTime() < expirationTime) {
                setUsername(username);
            }else{
                navigate('/login');
            }
        }else{
            navigate('/');
        }
    });

  return (
    <>
        <div class="container">
            <br/>
            <br/>
            <br/>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-4">
                    <h1 class="text-center mt-2">Settings</h1>
                    <div class="mt-4">
                        <p class="text-center mt-2">{username}</p>
                        <h1 class="text-center mt-2" style={{"font-size": "2em"}}>O Bhiiya, Kaam Chal riya he abhi.</h1>
                        {/* <div class="form-group ">
                            <input type="submit" value='5' class="btn btn-secondary btn-block"/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SettingStylish