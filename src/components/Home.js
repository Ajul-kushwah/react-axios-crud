import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {

  const [username, setUsername] = useState(false);

  useEffect (()=>{
      const sessionData = localStorage.getItem('userSession');

      if (sessionData) {
          const {id, username, loggedIn, expirationTime } = JSON.parse(sessionData);
          //console.log(loggedIn,expirationTime, new Date().getTime() < expirationTime);
          if (loggedIn && new Date().getTime() < expirationTime) {
              setUsername(true);
          }
      }
  });
    
    return (
    <>
    <br/>
    <br/>

    

      <nav className="navbar navbar-expand navbar-light bg-white mb-4 shadow border border-1">
        <div className="container">
          
          <a href="/" className="btn btn-floating btn-lg" style={{color: 'black', textDecoration: 'none', fontFamily: 'Itim, cursive', fontWeight: 'bold'}}>
            <i className="fas fa-laugh-wink rotate-n-15 pr-1" style={{color: 'black', fontSize: '25px'}} aria-hidden="true"/>
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
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link" href="#what-I-use">What I use</a>
              </li>
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link" href="#services">Steps</a>
              </li>
              
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link" href="#screenshots">Screenshots</a>
              </li>
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              
              <li className="nav-item">
                <Link to='/login'>
                  <button className="nav-links mr-3 btn btn-secondary">Login</button>
                </Link>
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
            <div className="col-md-5 sm-sdfsmt-5 main-text">
              <span>Hello I'm</span>
              <h1 className='main-text-h1' 
                  style={{textDecoration: 'none', 
                          fontFamily: 'Itim, cursive', 
                          fontSize:'50px', 
                          fontWeight: 'bold'}}>
                Crud App
              </h1>
              
              <p>made <small>by </small>
              <a href='https://ajul-kushwah.github.io/'>@ajulkushwah</a> 
              using React with beautiful UI.
              </p>
  
              <button type="button" className="btn btn-dark btn-lg">
                Read more
              </button>
              <button type="button" 
                      className="btn btn-outline-light btn-lg ml-2"
                      data-bs-toggle="modal" 
                      data-bs-target="#videoModal">
                Play video
              </button>
            </div>
            <div className="col-md-5 text-center">
              <img className='img-fluid' width='80%'
                src="img/coding-monochromatic-e1c05.svg"
                alt="Header"
              />
              {/* 
              coding-outline-34b88.svg web-developer-outline.svg and 
              pic/home-crud.PNG*/}
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

        {/* modal code */}
        <div class="modal fade" id="videoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-dark" id="staticBackdropLabel2">Play Video</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-dark">
                Video me hi dekh lo sab kuch tum, 
                fir mene banaya kaayko he, chup chaap login karo 
                valid email se otp se verify karo, or fir use karo - 
                batana jarur ki kaisa laga. 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Samajh gaya</button>
              </div>
            </div>
          </div>
        </div>
        {/* end modal */}
      </div>
  
      {/* <div className="companies">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>React Web App</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat 
                eaque quisi deserunt laborum 
                expedita sit eos qulestias odit veritatis.
              </p>
              <a href="https://react.dev/" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div> */}

      {/* features */}
        <section class="feature gradientt" id='what-I-use'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg> */}
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 text-center">
                <img className='img-fluid' src="img/mobile-view/crud-gif.gif" width='80%' alt="" />
              </div>
              {/* img - web-developer-outline.svg */}
              <div class="col-md-6">
                <h1 class="my-3">What I use & Learn</h1>
                <p class="my-4">
                  I have used react, axios, Bootstrap for creating this 
                  beautiful UI crud application/web app.
                </p>
                <ul>
                  <li>React - javaScript library</li>
                  <li>Axios - for handling API</li>
                  <li>Bootstrap - for UI</li>
                  <li>mockapi.io - free API</li>
                  <li>emailJS.com - for sending mail</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <img src='img/wave.png' className='img-fluid' /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" 
            fill-opacity="1" 
            d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,224C672,213,768,203,864,197.3C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg> */}

          <br />
          <br />
          <p className='line'></p>
          <br />


          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#000"
              fill-opacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg> */}
        </section>
    
        <section className="companies">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h1>React</h1>
                <p>A JavaScript library for web and native user interfaces.
                </p>
                <a href="https://react.dev/" className="btn btn-outline-secondary btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
  
      {/* steps  */}
      <div className="services gradient" id="services">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L34.3,106.7C68.6,117,137,139,206,122.7C274.3,107,343,53,411,53.3C480,53,549,107,617,117.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,154.7C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div className="container">
          {/* step 1 */}
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
          {/* step 2 */}
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
              <img src="img/presentation-two-color.svg" alt="" />
            </div>
            {/* img - landing_page/revenue_.svg */}
          </div>

          <div className="row align-items-center justify-content-center flex-column-reverse flex-md-row">  
            <div className="col-md-5">
              {/* img - landing_page/marketing.svg */}
              <img src="img/coding-monochromatic.svg" width='80%' className='img-fluid' alt="" />
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
         
  
        <div className="row align-items-center justify-content-center">  
          <div className="col-md-5">
            <button type="button" className="btn btn-outline-light mb-3">
              Step 5
            </button>
  
            <h1>Search & filter</h1>
  
            <p>
              also can search and filter data by name, email, age and id.
            </p>
          </div>
          <div className="col-md-5">
            <img src="img/search-engine-monochromatic-da990.svg" alt="" width="80%" />
          </div>
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

      {/* gallary */}
  
        <section class="gallery" id='screenshots'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
            <path fill="#fff" fill-opacity="1" d="M0,128L120,128C240,128,480,128,720,122.7C960,117,1200,107,1320,101.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>
          <div class="container">
            <div class="row">
              <div class="col-md-10">
                <h1>Check our latest awesome creative work</h1>
                <p>
                  It's crafted with the latest trend of design &amp; coded with all
                  modern approaches. It's a robust &amp; multi-dimensional usable
                  template
                </p>
              </div>
            </div>
            <div class="row my-3 g-3">
              <div class="col-md-4">
                <img src="img/mobile-view/login-otp.jpg" alt="Gallery-img" class="img-fluid img-box" />
              </div>
              <div class="col-md-4">
                <img src="img/mobile-view/home.jpg" alt="Gallery-img" class="img-fluid img-box" />
              </div>
              <div class="col-md-4">
                <img src="img/mobile-view/create.jpg" alt="Gallery-img" class="img-fluid img-box" />
              </div>
            </div>
            <div class="row my-3 g-3">
              <div class="col-md-4">
                <img src="img/mobile-view/update2.jpg" alt="Gallery-img" class="img-fluid img-box" />
              </div>
              <div class="col-md-4">
                <img src="img/mobile-view/search.jpg" alt="Gallery-img" class="img-fluid img-box" />
              </div>
              <div class="col-md-4">
                <img src="img/mobile-view/logout.jpg" alt="Gallery-img" class="img-fluid img-box" />
              </div>
            </div>
            <div class="row my-3 g-3">
              <div class="col-md-4">
                <img src="img/mobile-view/dropdown2.jpg" alt="Gallery-img" class="img-fluid img-box" />
              </div>
              <div class="col-md-4">
                <img src="img/mobile-view/read-item2.jpg" alt="Gallery-img" class="img-fluid img-box" />
              </div>
              <div class="col-md-4">
                <img src="img/mobile-view/404error2.png" alt="Gallery-img" class="img-fluid img-box" />
              </div>
            </div>
            <div class="row mt-5 justify-content-end">
              <div class="col-md-2">
                <button type="button" 
                        class="btn btn-outline-secondary"
                        data-bs-toggle="modal" 
                        data-bs-target="#photosModal">
                  See all works
                </button>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,128L120,128C240,128,480,128,720,122.7C960,117,1200,107,1320,101.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </svg>

          {/* modal code */}
         
          <div class="modal fade" id="photosModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Project Screenshots</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Sab kuch yahi dekh longe kya, 
                  chup chaap login karo or use karke dekho.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Samajh gaya</button>
                </div>
              </div>
            </div>
          </div>

        </section>

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
              <button type="submit" 
                      className="btn btn-outline-secondary"
                      data-bs-toggle="modal" 
                      data-bs-target="#contactModal">
                Send
              </button>
  
              </form>
            </div>
            <div className="col-md-5">
              <img src="img/landing_page/handshake.svg" alt="Contact" />
            </div>
          </div>
        </div>

        {/* modal contact code */}
        <div class="modal fade" id="contactModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>aisa thodi na hota he, footer(sabse neeche)  me jo 
                social link di he unpe contact karo</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Samajh gaya</button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <br/>
      <footer className="gradient mt-auto">
          <div className="container-fluid text-center">
            <div className='row'>
              <div className='col-md-5'>
                <span>
                  Copyright &copy;
                  <a className="text-white mr-1" href="https://ajul-kushwah.github.io/">ajul kushwah</a>
                  2024
                </span>
              </div>
              <div className='col-md-5'>
                <p className=''>
                  {/* social link */}
                  <a href="mailto:ajulkushwah@gmail.com" class="social-link" target="_blank" rel="noreferrer">
                    <i class="fab fa-google-plus"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ajul-kushwah/" class="social-link" target="_blank" rel="noreferrer">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/Ajul-kushwah" class="social-link" target="_blank" rel="noreferrer">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="https://www.youtube.com/@ajulkushwah6066" class="social-link" target="_blank" rel="noreferrer">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/ajulkushwah/" class="social-link" target="_blank" rel="noreferrer">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/ajul.kushwah/" class="social-link" target="_blank" rel="noreferrer">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="http://wa.me/?phone=918085555743&text=Hi Ajul" class="social-link" target="_blank" rel="noreferrer">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
      </footer>
      
    </>
  )
}

export default Home