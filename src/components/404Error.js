import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function PageNotFound() {

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
                    <h1 class="text-center mt-2">Page Not Found</h1>
                    <div class="mt-4">
                        <p class="text-center fw-normal mt-2">Har kuch kyu daal riya he be</p>
                        
                        <img src='img/mobile-view/404.png' width='100%'/>
                        {/* <h1 class="text-center mt-2" style={{"font-size": "12em"}}>404</h1> */}
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

export default PageNotFound