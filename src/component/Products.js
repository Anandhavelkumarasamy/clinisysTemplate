import React from 'react';
import classes from '../component/Task2.module.css';
import values from '../component/Product.module.css';
import logo from '../component/assests/logo 1.png';
import serch from '../component/assests/Group 15.png';
import phone from '../component/assests/eva_phone-call-outline.png';
import image1 from '../component/assests/Group 5.png';
import image2 from '../component/assests/Group 349 (1).png';
import image3 from '../component/assests/Group 7 (1).png';
import image4 from '../component/assests/Group 3.png';
import productimage1 from '../component/assests/productsassests/Group 617.png';
import productimage2 from '../component/assests/productsassests/image 20.png';
import productimage3 from '../component/assests/productsassests/image 21.png';
import productimage4 from '../component/assests/productsassests/image 22.png';
import productimage5 from '../component/assests/productsassests/image 23.png';
import productimage6 from '../component/assests/productsassests/image 24.png';
import productimage7 from '../component/assests/productsassests/image 25.png';
import productimage8  from '../component/assests/productsassests/image 26.png';
import productimage9 from '../component/assests/productsassests/image 27.png';
import productimage10 from '../component/assests/productsassests/image 28.png';
import productimage11 from '../component/assests/productsassests/Group 618.png';
import productimage12 from '../component/assests/productsassests/Star 101.png';
import productimage13 from '../component/assests/productsassests/Star 110.png';
import productimage14 from  '../component/assests/productsassests/Group 416.png';
import productimage15  from '../component/assests/productsassests/Group 21.png';
import productimage16 from '../component/assests/productsassests/Group 69.png';
import productimage17 from '../component/assests/productsassests/Group 33.png';
import productimage18 from '../component/assests/productsassests/Group 70.png';
import productimage19 from '../component/assests/productsassests/Group 19.png';
import productimage20 from '../component/assests/productsassests/Group 71.png';


import images78 from '../component/assests/Frame (2).png';

import images80 from '../component/assests/Frame (3).png';
import images81 from '../component/assests/Frame (4).png';
import images82 from '../component/assests/Frame (5).png';

import images83 from '../component/assests/Line 14.png';
import images84 from '../component/assests/Group 104.png';
import images85 from '../component/assests/Vector (1).png';
import images86 from '../component/assests/Group 105 (1).png';

import images87 from '../component/assests/Frame (6).png';
import images88 from '../component/assests/Group 107.png';
import images89 from '../component/assests/Frame (7).png';
import images90 from '../component/assests/Vector (2).png';
import images91 from '../component/assests/payment 1.png';
import images92 from '../component/assests/Frame (9).png';



export default function Products() {
  return (
    <div>
    <div className={`container-fluid ${classes.navbarBrand}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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

          <div className={`collapse navbar-collapse ${classes.navitem}`} id="navbarNav">
            <ul className="navbar-nav col-lg-8 d-flex ">
              <li className="nav-item">
                <a className="nav-link" href="#fg">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#jk">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#bn">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hjk">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gh">Contact us</a>
              </li>
            </ul>

            <div className=" col-lg-4 d-flex justify-content-lg-end ">
              <span
                className={`${classes.navbartext}`}
              >
                 Order History  
              </span>
              <span className={`${classes.navbartexts} `}>
                Logout
              </span>
            </div>
          </div>
        </div>
      </nav>
      </div>

  {/* below navbar */}
  <div className="row align-items-center p-5 ">


  <div className="col-lg-3  col-12 ">
    <img className={`navbar-text ${ classes.logo}`} src={logo} alt='adf'></img>
  </div>

{/* 
  <div className="col-lg-5  col-md-12  col-sm-12">

<div className={`row ${classes.outercontainer}`} >
  <div className='col-lg-4 col-md-12 col-sm-12
    '>
      <div className="dropdown">
  <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton">
    All Categories
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#ghjk">Action</a>
  
  </div>
</div></div>
  <div className='col-lg-6 col-md-6  col-sm-12'>
  <input type="text" placeholder='What dou you need?' className={`${classes.inputBox}`}></input>
  </div>
</div>
<div className={` col-lg-2 col-md-2  col-sm-2   btn btn-warning text-white  ${classes.btn}`}>
     
    <button className="btn ">
       <img src={serch} alt='adf'></img>
        <i className="search "></i>
      </button>
    </div>
</div> */}

<div  className="col-lg-5  col-12  col-sm-12 ">

<div  className="input-group ">
  <button  className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All Categories</button>
  <ul  className="dropdown-menu ">
    <li><a  className="dropdown-item" href="#jnn">Action before</a></li>
    <li><a  className="dropdown-item" href="#jmn">Another action before</a></li>
    <li><a  className="dropdown-item" href="#js">Something else here</a></li>
    <li><a  className="dropdown-divider" href="jnsd">jnjik</a></li>
    <li><a  className="dropdown-item" href="#nn ">Separated link</a></li>
  </ul>
  <input type="text"  className="form-control" aria-label="Text input with 2 dropdown buttons"/>
  <button  className="btn btn-outline-secondary" type="button"  aria-expanded="false" style={{backgroundColor:'orange'}}><img src={serch} alt="jds"/></button>
    
</div>
</div>


 
  
  <div className="col-lg-4  col-12">
    <div className='row'>
    <div className ="col-6">
    
      <h4 className={classes.phone}>
      <img src={phone} className={`${classes.phoneimage}`} alt='adf'></img>&nbsp;Call Us
      </h4>
      +91 6723452678
    </div>
    <div className={`col-6 ${classes.slash}`}>
      <img src={image1} className={classes.images} alt='adf'></img>
      <img src={image2} className={classes.images} alt='adf'></img>
      <img src={image3} className={classes.images} alt='adf'></img>
      <img src={image4} className={classes.images} alt='adf'></img>
    </div>
    </div>
  </div>
</div>

{/* consumable and disposable */}
<div className={`p-4 mb-5  ${values.firstcontainer}`}>
<h3>Consumable & Disposable</h3>
<h5>Home/<span className={values.firstcontainercolor}>Consumable & Disposable</span></h5>
</div>


{/* Filter By */}
<div className={`row ${values.secondcontainer}`}>
    <div className='col-lg-3'>
       <h3>Filter By</h3>
       <img src={productimage1} className={values.secondcontainer} alt="ds"></img>
   <strong><h5 className='text-start ms-5'>Brand</h5></strong>  
     <div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault"/>
  <p className=' text-start ms-5'>1mile</p>
</div>
<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked"/>
 <p className=' text-start ms-5'>3M</p>
</div>

<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault"/>
  <p className=' text-start ms-5'>A&D</p>
</div>
<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked"/>
 <p className=' text-start ms-5'>Aadarsh</p>
</div>
<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault"/>
  <p className=' text-start ms-5'>Aadarsh Surgical</p>
</div>
<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked"/>
 <p className=' text-start ms-5'>Abbott</p>
</div>
<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault"/>
  <p className=' text-start ms-5'>ABN</p>
</div>
<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked"/>
 <p className=' text-start ms-5'>Accu-Chek</p>
</div>
<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault"/>
  <p className=' text-start ms-5'>Accurex</p>
</div>
<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked"/>
 <p className=' text-start ms-5'>AccuSure</p>
</div>
<div  className="form-check">
  <input  className="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked"/>
 <p className=' text-start ms-5'>Ad-ducer</p>
</div>

<strong><h5 className='text-start form-check-input ms-5'>Price</h5></strong>  
<p>₹ 20.00 - ₹ 40,000</p>
<img src={productimage11} alt='"ssssa'></img>
<h4 className='mt-5'>Customer Rating</h4>
<div  className="form-check ms-5">
  <input className='text-start form-check-input' type="checkbox" value="" id="flexCheckChecked"/>
  <div className='text-start ms-2'>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>(5)
  </div>
</div>
<div  className="form-check ms-5">
  <input className='text-start form-check-input '  type="checkbox" value="" id="flexCheckChecked"/>
  <div className='text-start ms-2'>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>
    
  <img src={productimage13} alt='ad'></img> (4)
  </div>
</div>

<div  className="form-check ms-5">
  <input className='text-start form-check-input '   type="checkbox" value="" id="flexCheckChecked"/>
  <div className='text-start ms-2'>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>
    
   
    <img src={productimage13} alt='ad'></img>
    <img src={productimage13} alt='ad'></img>
    
  <img src={productimage13} alt='ad'></img>(2)
  </div>
</div>

<div  className="form-check ms-5">
  <input className='text-start form-check-input '  type="checkbox" value="" id="flexCheckChecked"/>
  <div className='text-start ms-2'>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage13} alt='ad'></img>
  <img src={productimage13} alt='ad'></img> (3)
  </div>
</div>

<div  className="form-check ms-5">
  <input className='text-start form-check-input '  type="checkbox" value="" id="flexCheckChecked"/>
  <div className='text-start ms-2'>
    <img src={productimage12} alt='ad'></img>
    <img src={productimage13} alt='ad'></img>
    <img src={productimage13} alt='ad'></img>
    <img src={productimage13} alt='ad'></img>
  <img src={productimage13} alt='ad'></img>(1)
  </div>
</div>



    </div>
    <div className='col-lg-9'>
    <div className={`row ms-5 me-5 p-3  ${values.secondcontainercolor}`}><p className='text-start ms-3 mb-1'>Showing 24 out of 10000 products</p></div>

   <div className='row '>

    <div className='col-lg-12 g-5'>
        <div className='row '> 
          <div className=' col-lg-4 w-25 h-25 ms-5 '>
          <div className={`card  ${values.secondcontainercolor}`}>
    <img src={productimage2} className=' img-fluid h-75 w-75 ms-4' alt='ds' />
    <div className='card-body p-2'>
      <img src={productimage14} alt='hj' className='img-fluid' />
    </div>
  </div> 
          <strong><p>Kabala Sodium Citrate Black</p></strong> <img src={productimage15} alt='jdf'></img><br></br>
          <img src={productimage16} alt='jdf'></img></div>


        <div className=' col-lg-4 h-35 w-25 ms-5 '>
          <div className='card'><img src={productimage3} className='img-fluid' alt='ds'></img></div>
         
          <img src={productimage17} alt='jdf'></img><br></br>
          <img src={productimage18} alt='jdf'></img>
          </div>
          <div className=' col-lg-4 h-35 ms-5 w-25'>
            <div className='card'><img src={productimage2} className='img-fluid' alt='ds'></img>

            </div>  
          <strong><p>Kabala Sodium Heparin Green</p></strong> <img src={productimage19} alt='jdf'></img>
          <br></br>
          <img src={productimage20} alt='jdf'></img></div></div>
       
    </div>
   </div>
   <div className='row '>

<div className='col-lg-12 g-5'>
    <div className='row '>
    <div className=' col-lg-4 h-35 ms-5 w-25'>
            <div className='card'><img src={productimage4} className='img-fluid' alt='ds'></img>

            </div>  
          <strong><p>Kabala NAF Blood Collection Grey</p></strong> <img src={productimage15} alt='jdf'></img>
          <br></br>
          <img src={productimage16} alt='jdf'></img></div>
          <div className=' col-lg-4 h-35 ms-5 w-25'>
            <div className='card'><img src={productimage5} className='img-fluid' alt='ds'></img>

            </div>  
          <strong><p>HMD Scalp Vein Set 25G</p></strong> <img src={productimage17} alt='jdf'></img>
          <br></br>
          <img src={productimage18} alt='jdf'></img></div>
          <div className=' col-lg-4 h-35 ms-5 w-25'>
            <div className='card'><img src={productimage6} className='img-fluid' alt='ds'></img>

            </div>  
          <strong><p>HMD Unolok Scalp Vein</p></strong> <img src={productimage19} alt='jdf'></img>
          <br></br>
          <img src={productimage20} alt='jdf'></img></div></div>
    
</div>
</div><div className='row'>

    <div className='col-lg-12 g-5'>
        <div className='row '> <div className=' col-lg-4 h-35 ms-5 w-25'>
            <div className='card'><img src={productimage7} className='img-fluid' alt='ds'></img>

            </div>  
          <strong><p>HMD Scalp Van Scalp Vein</p></strong> <img src={productimage15} alt='jdf'></img>
          <br></br>
          <img src={productimage16} alt='jdf'></img></div>
          <div className=' col-lg-4 h-35 ms-5 w-25'>
            <div className='card'><img src={productimage8} className='img-fluid' alt='ds'></img>

            </div>  
          <strong><p>Nipro Shinrai 3 Way Lipid</p></strong> <img src={productimage17} alt='jdf'></img>
          <br></br>
          <img src={productimage18} alt='jdf'></img></div>
          <div className=' col-lg-4 h-35 ms-5 w-25'>
            <div className='card'><img src={productimage9} className='img-fluid' alt='ds'></img>

            </div>  
          <strong><p>Kabala Sodium Citrate Black</p></strong> <img src={productimage19} alt='jdf'></img>
          <br></br>
          <img src={productimage20} alt='jdf'></img></div></div>
        
    </div>
   </div>


    </div>

</div>

<div  className='row mt-5 mx-5'>
  <div  className='col-lg-3 col-md-6 col-sm-12 '>
    <div  className='row '>
      <div  className='col-3'><img src={images78} alt='sdaf'></img></div>
      <div  className='col-7'><h4>Free Delivery</h4> <p>For all order over 99 $</p></div>
     
    </div>
  </div>
  <div  className='col-lg-3 col-md-6 col-sm-12'>
  <div  className='row '>
      <div  className='col-3'><img src={images80} alt='sdaf'></img></div>
      <div  className='col-7'><h4>30 days return</h4> <p>If goods have problems</p></div>
   
    </div>
  </div>
  <div  className='col-lg-3 col-md-6 col-sm-12'>
  <div  className='row '>
      <div  className='col-3'><img src={images81} alt='sdaf'></img></div>
      <div  className='col-7'><h4>Secure payment</h4> <p>100 % Secure payments</p></div>
      
    </div>
  </div>
  <div  className='col-lg-3 col-md-6 col-sm-12'>
  <div  className='row '>
      <div  className='col-3'><img src={images82} alt='sdaf' ></img></div>
      <div  className='col-7'><h4>24/7 Support</h4>Dedicated Support</div>
     
    </div>
  </div>
 </div>

 <div class={`row text-white ${classes.footer} `}>
  <div class='row mx-5 mt-5'>
  <div class='col-lg-3 col-md-6 col-sm-12 text-start'>
    <h3>About us</h3>
    <img src={images83} alt='adf'></img>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p><img src={images84} alt='adf'></img> Lorem ipsum dolor sit amet, consectetur <br></br>&nbsp;adipiscing elit.</p>
    <p><img src={images85} alt='adf'></img> +91 7010034955</p>
    <p><img src={images86} alt='adf'></img> info@clinibuy.in</p>
    <div class='row'>
      <div class='col-3'>
      <p class={values.rectangleshape}><img class='ms-3' src={images87} alt="jds"></img></p>
      </div>
      <div class='col-3'>
      <p class={values.rectangleshape}><img class='ms-3' src={images88} alt="jds"></img></p>
      </div>
      <div class='col-3'>
      <p class={values.rectangleshape}><img class='ms-3' src={images89} alt="jds"></img></p>
      </div>
      <div class='col-3'>
      <p class={values.rectangleshape}><img class='ms-3' src={images90} alt="jds"></img></p>
      </div>
   
    </div>
      </div>
  <div  class='col-lg-3 col-md-6 col-sm-12 text-start'>
  <h3>Customer Care</h3>
  <img src={images83} alt="jds"></img>
  <p>My Account</p>
  <p>My Orders</p>
  <p>Track Your Order</p>
  <p>Wishlist</p>
  <p>FAQs</p>
  <p>Refunds/Return Policy</p>

  </div>
  <div  class='col-lg-3 col-md-6 col-sm-12 text-start'>

  <h3>Categories</h3>
  <img src={images83} alt="jds"></img>
  <p>Consumables & Disposables</p>
  <p>Lab Diagnostics & Instruments</p>
  <p>Medical Device & Equipment</p>
  <p>Medicines and Pharmaceutical</p>
  <p>Dental</p>
  <p>Medical Implants</p>
  <p>Surgical Instruments</p>
  <p>Hospital Establishment</p>
  <p>Physiotherapy & Rehabilitation-Medical Aids</p>
  </div>
  <div  class='col-lg-3 col-md-6 col-sm-12 text-start'>

  <h3>Newsletter</h3>
  <img src={images83} alt='adf'></img>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <div class="input-group mb-3">
  <input type="text" placeholder="Your Maril" />
  <button class="btn bg-warning" type="button"><img src={images92} alt="jds"></img></button>
</div>


  <h3>Payment Mode</h3>
  <img src={images83} alt='adf'></img>
  <img src={images91} alt='adf'></img>

  </div>
 </div>
 </div>
 <div  className='row bg-primary'>
<p>Copyright © 2022 Maestro technology. All Rights Reserved.</p>
 </div>

    </div>
  );
}
