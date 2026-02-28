
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Home()
{
    return(<>
            <div className="container-fluid  p-3 shadow bg-light sticky-top">
    <div className="row ">
      <div className="col-12 d-flex justify-content-between ">
        <h3 className="fw-bold fs-2 ">LUMINA</h3>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about us">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#menu">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reviews">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div id="home" className="hero-section text-center">
    <div className="container">
      <h1 className="display-3 fw-bold mb-4">Taste the Extraordinary</h1>
      <p className="lead mb-5">
        Experience culinary excellence in the heart of the city.
      </p>
    </div>
  </div>
    </>)
}


function Aboutus()
{
    return(<>
             <section id="about us" className="py-5 py-lg-5 bg-light">
    <div className="container">
      <h2 className="section-title display-5 fw-bold text-center mb-5">
        About US
      </h2>
      <div className="row align-items-center g-5 ">
        <div className="col-lg-6">
          <img src="img/ab.jpg" className="img-fluid rounded-2 shadow" />
        </div>
        <div className="col-lg-6">
          <p className="lead">
            Since 2018, Spice Haven has been serving the most authentic Indian
            cuisine in the city using traditional recipes and the freshest
            ingredients.
          </p>
          <p>
            Our chefs bring decades of experience from different regions of
            India — from the spicy streets of Andhra to the royal kitchens of
            Rajasthan and the coastal flavors of Kerala.
          </p>
          <div className="row mt-4">
            <div className="col-6">
              <h5>
                <i className=" text-primary me-2" />
                Opening Hours
              </h5>
              <p>
                Mon–Sun
                <br />
                12:00 – 23:00
              </p>
            </div>
            <div className="col-6">
              <h5>
                <i className=" text-primary me-2" />
                Location
              </h5>
              <p>
                123 Flavor Street
                <br />
                Ahmedabad, Gujarat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>)
}


function MenuItem(props)
{
  return(
      <div className="col-md-6 col-lg-3">
              <div className="card h-100  shadow-sm">
                <img src={props.img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{props.title}
                     <span className="float-end">{props.price}</span>
                  </h5>
                  <p className="card-text text-muted small">
                    {props.detail}
                  </p>
                </div>
              </div>
            </div>) 
}
function Menu()
{
    return(<>
             <section className="py-5 py-lg-5" id="menu">
    <div className="container">
      <h2 className="section-title text-center display-5 fw-bold mb-5">
        Our Menu
      </h2>
      <div className="tab-content">
        <div className="tab-pane fade show active">
          <div className="row g-4">
            <MenuItem img='img/tika.jpg' title='Paneer Tikka' price='₹320' detail='Marinated cottage cheese grilled in tandoor'/>
            <MenuItem img='img/dal.jpg' title='Dal Makhani' price='₹280' detail='Slow-cooked black lentils in a creamy, buttery tomato gravy.'/>
            <MenuItem img='img/garlik.jpg' title='Garlic Naan ' price='₹85' detail='Leavened clay oven bread topped with fresh garlic and
                    coriander.'/>
            <MenuItem img='img/malai.jpg' title='Malai Kofta ' price='₹320' detail='A rich and creamy alternative to paneer dishes.'/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>)
}


function GalleryItem(props)
{
  return(
       <div className="col-4">
          <img
            src={props.img}
            className="img-fluid shadow"
            alt="Gallery 1"
          />
        </div>)
 }

function Gallery()
{
    return(<>
            <section id="gallery" className="py-5 bg-light">
    <div className="container">
      <h2 className="section-title text-center display-5 fw-bold mb-5">
        Gallery
      </h2>
      <div className="row g-4">
       
        <GalleryItem img='img/dhosa.jpg'/>
        <GalleryItem img='img/kajukari.jpg'/>
        <GalleryItem img='img/bhaji.jpg'/>
        <GalleryItem img='img/tika.jpg'/>
        <GalleryItem img='img/malai.jpg'/>
        <GalleryItem img='img/garlik.jpg'/>
             </div>
    </div>
  </section>
    </>)
}
function Service()
{
   return(<>
     <section
    id="features"
    className="section-padding bg-dark-custom text-center mt-4">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3 className="h1">🌿</h3>
          <h4>Fresh Ingredients</h4>
          <p className="text-secondary">
            Sourced daily from local organic farms.
          </p>
        </div>
        <div className="col-md-4">
          <h3 className="h1">👨‍🍳</h3>
          <h4>Master Chefs</h4>
          <p className="text-secondary">
            Award-winning culinary experts with global experience.
          </p>
        </div>
        <div className="col-md-4">
          <h3 className="h1">🍷</h3>
          <h4>Exquisite Wine</h4>
          <p className="text-secondary">
            A curated collection of the world's finest vintages.
          </p>
        </div>
      </div>
    </div>
  </section>
   </>)
}

function ReviewItem(props)
{
  return(
      <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <p className="fst-italic">
               {props.detail}
              </p>
              <div className="d-flex align-items-center mt-3">
                <div>
                  <h6 className="mb-0">{props.name}</h6>
                  <small className="text-muted">{props.rating}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
function Review()
{
    return(<>
         <section id="reviews" className="py-5 bg-light">
    <div className="container">
      <h2 className="section-title text-center display-5 fw-bold mb-5">
        Reviews
      </h2>
      <div className="row g-4">
        <ReviewItem detail='Best butter chicken Ive ever had outside Punjab' name='Priya Sharma' rating='★★★★★'/>
        <ReviewItem detail='The food was fresh, flavorful, and beautifully presented.' name='Janvi Patel' rating='★★★★★'/>
        <ReviewItem detail='The food quality was average and took longer than expected to be served.' name='Rahi Patel' rating='★★★★★'/>
       
      </div>
    </div>
  </section>
    </>)
}

function Contact()
{
    return(<>
         <section id="contact" className="py-5">
    <div className="container">
      <h2 className="section-title text-center display-5 fw-bold mb-5">
        Get in Touch
      </h2>
      <div className="row g-5">
        <div className="col-lg-12">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Your Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-lg px-5">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>)
}

function Footer_page()
{
    return(<>
         <footer className="footer py-4">
    <div className="container">
      <div className="row text-start">
        <div className="col-lg-6  mb-4">
          <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#home" className="text-decoration-none text-reset">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about us" className="text-decoration-none text-reset">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#menu" className="text-decoration-none text-reset">
                Menu
              </a>
            </li>
            <li className="mb-2">
              <a href="#features" className="text-decoration-none text-reset">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#gallery" className="text-decoration-none text-reset">
                Gallery
              </a>
            </li>
            <li className="mb-2">
              <a href="#reviews" className="text-decoration-none text-reset">
                Reviews
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="text-decoration-none text-reset">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-6  mb-5">
          <h5 className="text-uppercase fw-bold mb-3">Contact Info</h5>
          <p>
            <i className="fas fa-map-marker-alt me-2" /> 123 Flavor Street,
            Ahmedabad
          </p>
          <p>
            <i className="fas fa-envelope me-2" /> hello@spicehaven.in
          </p>
          <p>
            <i className="fas fa-phone me-2" />
            +91 98765 43210
          </p>
          <p>12:00 – 23:00 (Everyday)</p>
        </div>
      </div>
    </div>
  </footer>
    </>)
}
function Website()
{
    return(<>
    
  {/* home */}
    <Home/>

  {/* about us */}
    <Aboutus/>

  {/*  MENU  */}
    <Menu/>
  {/* GALLERY  */}
     <Gallery/>
  {/*  Servic */}
    <Service/>
  {/*  REVIEWS  */}
    <Review/>
  {/*  CONTACT*/}
      <Contact/>
  {/* footer */}
        <Footer_page/>
    </>);
}
 

root.render(<Website/>);
