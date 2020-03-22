import React from "react";
import axios from "axios";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBContainer } from "mdbreact";
import "./PageInscri.css";

class FormsPage extends React.Component {

constructor(props){
super(props);
this.onChangeUserNom= this.onChangeUserNom.bind(this);
this.onChangeUserPrenom= this.onChangeUserPrenom.bind(this);
this.onChangeUserEmail= this.onChangeUserEmail.bind(this);
this.onChangeUserPassword= this.onChangeUserPassword.bind(this);
this.onChangeUserRe_passworde= this.onChangeUserRe_password.bind(this);
this.onChangeUserPays= this.onChangeUserPays.bind(this);
this.onChangeUserRegion= this.onChangeUserRegion.bind(this);
this.onSubmit = this.onSubmit.bind(this);



this.state = {
    nom: "",
    prenom: "",
    email: "",
    password:"",
    re_password:"",
    pays: "",
    Region: ""
  
}
}

onChangeUserNom(e){

    this.setState({
     
        nom:e.target.value

    });
}

onChangeUserPrenom(e){

    this.setState({
     
        prenom:e.target.value

    });
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


onChangeUserRe_password(e){

    this.setState({
     
        re_password:e.target.value

    });
}

onChangeUserPays(e){

    this.setState({
     
        pays:e.target.value

    });
}

onChangeUserRegion(e){

    this.setState({
     
        Region:e.target.value

    });
}

onSubmit(e){
    e.preventDefault();

    const user = {

        nom:this.state.nom,
        prenom:this.state.prenom,
        email:this.state.email,
        password:this.state.password,
        re_password:this.state.re_password,
        pays:this.state.pays,
        Region:this.state.Region
    }

    console.log(user);
    axios.post('http://localhost:5000/api/v1/register',user)
    .then(res => console.log(res.data))

    this.setState({
        nom:""
     } )

}

   

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };




    render() {
        return (
            <div>
                <MDBContainer className="body-PageInscri">
     
                    <MDBCol md="12" className="mb-4">
                        <MDBCard className="card-image" style={{
                            backgroundImage:
                                "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
                        }}>
                            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                <div>
                                    <h6 className="purple-text">
                                        <MDBIcon icon="user" />             </h6>
                                    <h3 className="py-3 font-weight-bold">
                                        <strong>Inscription</strong>
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
                    <form
                        className="needs-validation"
                        onSubmit={this.submitHandler}
                        noValidate
                    >
                        <MDBRow>
                            <MDBCol md="4" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx"
                                    className="grey-text"
                                >
                                    First name
              </label>
                                <input
                                    value={this.state.fname}
                                    name="fname"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterNameEx"
                                    className="form-control"
                                    placeholder="First name"
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                            <MDBCol md="4" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterEmailEx2"
                                    className="grey-text"
                                >
                                    Last name
              </label>
                                <input
                                    value={this.state.lname}
                                    name="lname"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterEmailEx2"
                                    className="form-control"
                                    placeholder="Last name"
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                            <MDBCol md="4" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterConfirmEx3"
                                    className="grey-text"
                                >
                                    Email
              </label>
                                <input
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                    type="email"
                                    id="defaultFormRegisterConfirmEx3"
                                    className="form-control"
                                    name="email"
                                    placeholder="Your Email address"
                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
              </small>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="4" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterPasswordEx4"
                                    className="grey-text"
                                >
                                    Pays
              </label>
                                <input
                                    value={this.state.pays}
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterPasswordEx4"
                                    className="form-control"
                                    name="pays"
                                    placeholder="pays"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid Pays.
              </div>
              </MDBCol>
              <MDBCol md="4" className="mb-3">

              <label
                                    htmlFor="defaultFormRegisterPasswordEx4"
                                    className="grey-text"
                                >
                                    Région
              </label>
                                <input
                                    value={this.state.Région}
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterPasswordEx4"
                                    className="form-control"
                                    name="Région"
                                    placeholder="Région"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid Région.
              </div>
             </MDBCol>
                                <div className="valid-feedback">Looks good!</div>
                            <MDBCol md="4" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterPasswordEx4"
                                    className="grey-text"
                                >
                                    
                                   Mot de passe
              </label>
              <input
                                    value={this.state.Motdepasse}
                                    onChange={this.changeHandler}
                                    type="password" validate
                                    id="defaultFormRegisterPasswordEx4"
                                    className="form-control"
                                    name="Mot de passe"
                                    placeholder="Mot de passe"
                                    required
                                />
             <div className="invalid-feedback">
                                    Please provide a valid mot de passe.
              </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                            <MDBCol md="4" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterPasswordEx4"
                                    className="grey-text"
                                >
                                    Répeter Mot de passe
              </label>
                                <input
                                    value={this.state.R_Motdepasse}
                                    onChange={this.changeHandler}
                                    type="password" validate
                                    id="defaultFormRegisterPasswordEx4"
                                    className="form-control"
                                    name="R_Mot de passe"
                                    placeholder="Répéter Mot de passe"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid mot de passe.
              </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                        </MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <div className="custom-control custom-checkbox pl-3">
                                <input
                                    className="custom-control-input"
                                    type="checkbox"
                                    value=""
                                    id="invalidCheck"
                                    required
                                />
                                <label className="custom-control-label" htmlFor="invalidCheck">
                                    Agree to terms and conditions
              </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
              </div>
                            </div>
                        </MDBCol>
                        
                        <MDBBtn gradient="blue" type="submit">
                    S'inscrire
                  </MDBBtn>
                    </form>
                </MDBContainer>
            </div>

        );
    }
}

export default FormsPage;

