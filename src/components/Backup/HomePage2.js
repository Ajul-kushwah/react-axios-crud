import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function HomeStylish() {

    const navigate = useNavigate();
    
    return (
    <>
                
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          
          <a href="/" className="btn btn-floating btn-lg" style={{color: 'black', textDecoration: 'none', fontFamily: 'Itim, cursive', fontWeight: 'bold'}}>
            <i className="fas fa-laugh-wink rotate-n-15" style={{color: 'black', fontSize: '25px'}} aria-hidden="true"/>
            ReactCrud
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end text-white"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#terms">Terms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-links mr-3 btn btn-secondary" href="/login">Login</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="page-header gradient" id="home">
        <div className="container pt-3">
          <br/>
          <br/>
          <div className="row align-items-center justify-content-center flex-column-reverse flex-md-row">
            <div className="col-md-5">
              <h1>Social Media Service</h1>
              <h4> Provider</h4>
  
              <p>#1 SMM PANEL IN THE
                WORLD
                Smmanil.com  is simply the fastest, cheapest, 
                BIGGEST panel in the SMM World.
              </p>
  
              <button type="button" className="btn btn-outline-dark btn-lg">
                Read more
              </button>
              <button type="button" className="btn btn-secondary btn-lg">
                Play video
              </button>
            </div>
            <div className="col-md-5">
              <img
                src="img/coding-outline-34b88.svg"
                alt="Header"
              />
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,112C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
  
      <div className="companies">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>React Web App</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat 
                eaque quo reprehenderit officia libero soluta, nisi deserunt laborum 
                expedita sit eos quas aliquid non vel quae, molestias odit veritatis.
              </p>
              <a href="https://react.dev/" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="services gradient" id="services">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L34.3,106.7C68.6,117,137,139,206,122.7C274.3,107,343,53,411,53.3C480,53,549,107,617,117.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,154.7C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <button type="button" className="btn btn-outline-light mb-3">
                Step 1
              </button>
  
              <h1>Login with OTP</h1>
  
              <p>
                verify with sent OTP on email & login.
              </p>
            </div>
            <div className="col-md-5">
              <img src="img/landing_page/coding_.svg" alt="" />
            </div>
          </div>
          <div className="row align-items-center justify-content-center flex-column-reverse flex-md-row">  
            <div className="col-md-5">
              <img src="img/landing_page/marketing.svg" alt="" />
            </div>
            <div className="col-md-5">
              <button type="button " className="btn btn-outline-light mb-3">
                Step 2
              </button>
  
              <h1>Create</h1>
  
              <p>
                add data such as [Name, Age, Email].
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">  
            <div className="col-md-5">
              <button type="button" className="btn btn-outline-light mb-3">
                Step 3
              </button>
  
              <h1>Read</h1>
  
              <p>
                list of data will show - with update & delete functionality button.
              </p>
            </div>
            <div className="col-md-5">
              <img src="img/landing_page/revenue_.svg" alt="" />
            </div>
          </div>
          <div className="row align-items-center justify-content-center flex-column-reverse flex-md-row">  
            <div className="col-md-5">
              <img src="img/landing_page/marketing.svg" alt="" />
            </div>
            <div className="col-md-5">
              <button type="button " className="btn btn-outline-light mb-3">
                Step 4
              </button>
  
              <h1>Update & Delete</h1>
  
              <p>
                can update & delete existing data.
              </p>
            </div>
          </div>
        </div>
  
        <div className="row align-items-center justify-content-center">  
          <div className="col-md-5">
            <button type="button" className="btn btn-outline-light mb-3">
              Step 5
            </button>
  
            <h1>Search & filter</h1>
  
            <p>
              also can search and filter data by name, email,age and id.
            </p>
          </div>
          <div className="col-md-5">
            <img src="img/search-engine-monochromatic-da990.svg" alt="" />
          </div>
        </div>
  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L34.3,106.7C68.6,117,137,139,206,122.7C274.3,107,343,53,411,53.3C480,53,549,107,617,117.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,154.7C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
  
      <div className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <form method="POST" action="">
               
              <h1>Contact us:</h1>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"
                  >Comments :</label
                >
                <textarea
                  className="form-control"
                  name="comments"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Please write your query or suggestions."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-secondary">
                Send
              </button>
  
              </form>
            </div>
            <div className="col-md-5">
              <img src="img/landing_page/handshake.svg" alt="Contact" />
            </div>
          </div>
        </div>
      </div>
  
          <div className="gradient">
              <div className="container-fluid text-center">
                  <span>
                  Copyright &copy;
                  <a className="text-white" href="https://ajul-kushwah.github.io/">ajul kushwah</a>
                  2024
                  </span>
              </div>
          </div>
      
    
    </>
  )
}

export default HomeStylish