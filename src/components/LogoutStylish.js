import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function LogoutStylish() {

    const navigate = useNavigate();
    
    const [seconds, setSeconds] = useState(10);

    var timer;
    useEffect (()=>{
        timer = setInterval(()=>{
            setSeconds(seconds-1);
            if(seconds==1){
                navigate('/login');
            }
        }, 1000)

        return ()=> clearInterval(timer);
    });

  return (
    <>
        <div class="container">
            <br/>
            <br/>
            <br/>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-4">
                    <h1 class="text-center mt-2">Logout</h1>
                    <div class="mt-4">
                        <p class="text-center mt-2">Please wait, we are redirecting on login page.</p>
                        <h1 class="text-center mt-2" style={{"font-size": "12em"}}>{seconds}</h1>
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

export default LogoutStylish