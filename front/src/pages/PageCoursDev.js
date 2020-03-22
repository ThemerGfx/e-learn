import React from 'react';
import { 
  MDBBtn, MDBCard, MDBFormInline, MDBCardBody, MDBIcon, MDBCardImage, 
  MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import "./PageCoursDev.css";
import {connect} from 'react-redux'
import { getAllFormations, getAllFormationsSuccess, removeFormation, selectFormation } from '../store/actions/FormActions'
import { Link } from 'react-router-dom';

class PageCoursDev extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        nameF:"",
        defF:"",
        categF:"",
        nameFormatF:"",
        prixF:0,
        created:new Date(),
        pictures: [],
        title1:"",
        def1:"",
        vd1:"",
        fl1:"",
        title2:"",
        def2:"",
        vd2:"",
        fl2:"",
        title3:"",
        def3:"",
        vd3:"",
        fl3:"",
        title4:"",
        def4:"",
        vd4:"",
        fl4:"",
        items: {
        default: "1",
      }
    }
 }

  componentDidMount() {
    this.props.getAllFormations();
  }

  onUpdate = (formation) => {
    console.log(formation)
    this.props.selectFormation(formation)
  }

  render() { 
    return (
      <section className="body-pagecours" >
        <MDBContainer>
          <MDBCol md="12" className="mb-4">
            <MDBCard 
              className="card-image" 
              style={{
                backgroundImage: "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h3 className="py-3 font-weight-bold">
                    <strong>Cours dev</strong>
                  </h3>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBFormInline className="md-form">
              <MDBIcon icon="search" />
              <input 
                className="form-control form-control-sm ml-3 w-75"  
                type="text" 
                placeholder="Search" 
                aria-label="Search" 
              />
            </MDBFormInline>
          </MDBCol>
          <MDBCol md="12" className="mb-4" >  
            <MDBRow>
              {
                this.props.allFormations.map((formation,index) => (
                  <MDBCard style={{ width: "22rem" }} className="cours-card" key={index}>
                    <MDBCardImage
                      className="img-fluid" 
                      src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" 
                      waves 
                    />
                    <MDBCardBody>
                      <MDBCardTitle>{formation.nameF}</MDBCardTitle>
                      <MDBCardText>{formation.defF}</MDBCardText>
                      <MDBCardText>Formateur: <b>{formation.nameFormatF}</b></MDBCardText>
                      <MDBBtn href="./PageCoursNode">Consulter </MDBBtn>
                      <MDBBtn 
                        tag="a" 
                        size="sm" 
                        color="blue" 
                        onClick={() => { this.onUpdate(formation) }}
                        href="./AdminPage/edit">
                      <MDBIcon icon="pencil-alt" /> </MDBBtn>
                      <MDBBtn tag="a" size="sm" color="red" onClick={() => this.props.removeFormation(formation._id)}>
                      <MDBIcon icon="trash-alt" /> </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                ))
              }
            </MDBRow>
          </MDBCol>
        </MDBContainer>
      </section>   
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    allFormations: state.formationReducer.allFormations,
    formationItem: state.formationReducer.formationItem
  }
}

export default connect(mapStateToProps, { getAllFormations, getAllFormationsSuccess, removeFormation, selectFormation })(PageCoursDev);