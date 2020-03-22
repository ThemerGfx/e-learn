import React from "react";
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn,MDBView,MDBMask } from "mdbreact";
import Cards from "./cards";
//import Cards2 from "./cards2";
import Cards3 from "./cards3";
import "./HomePage.css";
import Cards4 from "./cards4";

import pic from '../assets/bg-homepage.jpg';
//import posed, { PoseGroup } from 'react-pose';




const HomePage = () => {
  return (
  <section className="text-center my-5">
    <div>
      <header>
      <MDBView className="header-pic" src={pic}>
            <MDBMask overlay="light" className="flex-center flex-column text-black text-center">
              <h1 className="text-color"><b>Bienvenue sur votre plateforme d'éducation</b></h1>
              <h5>welcome to your education platform</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!</p><br />
              <p>plateforme d'education</p>
            </MDBMask>
          </MDBView>
      </header>
    </div>

    <MDBContainer className="d-flex flex-wrap">
    
      <MDBCol md="6" className="md-0 mb-4">

        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="pink-text">
                <MDBIcon icon="chart-pie" />
                <strong> Marketing</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>This is card title</strong>
              </h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio
                nam sit officia accusamus minus error nisi architecto
                nulla ipsum dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn color="pink" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>

      </MDBCol>
      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="green-text">
                <MDBIcon icon="eye" />
                <strong> Entertainment</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>This is card title</strong>
              </h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio
                nam sit officia accusamus minus error nisi architecto
                nulla ipsum dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn color="success" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
    <div>
   <Cards/>
   <Cards3/>
   <Cards4/>
 </div>
  </section>
 
  );
}

export default HomePage;