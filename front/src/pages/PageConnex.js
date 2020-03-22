import React, { Component} from "react";
import { MDBContainer,MDBCard,MDBIcon, MDBRow, MDBCol,MDBLink,MDBInput,MDBBtn } from 'mdbreact';
import "./Pageconnex.css";
import axios from 'axios';


class PageConnex extends Component {

  constructor(props){
    super(props);
  
    this.onChangeUserEmail= this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword= this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    
    
    this.state = {
     
        email: "",
        password:"",       
        errors: {}

    }
    }
    
    
    
    onChangeUserEmail(e){
    
        this.setState({
         
            email:e.target.value
    
        });
    }
    
    onChangeUserPassword(e){
    
        this.setState({
         
            password:e.target.value
    
        });
    }
    

    onSubmit(e){
        e.preventDefault();
    
        const user = {
    
       
            email:this.state.email,
            password:this.state.password,
      
        }
    
        console.log(user);
        axios.post('http://localhost:5000/api/v1/auth',user)
        .then(res => { 
          localStorage.setItem('usertoken',res.data)
        return res.data
         } )
    
     .catch(err => {
       console.log(err);

     })
     //window.location='/HomePage';


    
    }

    
    
  render(){
return (
<MDBContainer>
  <MDBRow>
  <MDBCol md="12" className="mb-4" className="connex-card">
                        <MDBCard className="card-image" style={{
                            backgroundImage:
                                "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
                        }}>
                            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                <div>
                                    <h6 className="purple-text">
                                        <MDBIcon icon="user" />             </h6>
                                    <h3 className="py-3 font-weight-bold">
                                        <strong>Connexion</strong>

                                           
                                    </h3>
                                    <p className="pb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                        nam sit officia accusamus minus error nisi architecto
                                        nulla ipsum dignissimos. Odit sed qui, dolorum!
              </p>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
    <MDBCol md="12">

    <div style={{ padding: 20 }}>
        <h3>Sign in to your account</h3>
        <hr />


        <form   onSubmit={this.submitHandler}>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email"
           validate error="wrong"
            success="right"
            value={this.state.email}
            onChange={this.onChangeUserEmail}
                   />
          <MDBInput label="Type your password" icon="lock" group type="password"
           validate 
           value={this.state.password}
           onChange={this.onChangeUserPassword}
           />
        </div>
        <div className="text-center">
          <MDBBtn type="submit" >Login</MDBBtn>
          <MDBLink to='/PageInscri'>Do not have an account? Sign Up Now</MDBLink>

        </div>
      </form>
             
            </div>
      
                                 
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
}
}



export default PageConnex;