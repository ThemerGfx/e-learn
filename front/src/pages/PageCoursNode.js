import React, { Component } from "react";
import { 
  MDBCol, MDBCard, MDBIcon, MDBContainer, MDBTabPane, 
  MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBBtn } from "mdbreact";
//import Steps from './steps';
import PageVideo from './PageVideo';
import './PageCoursNode.css';
import {connect} from 'react-redux'
import { getAllFormations, getAllFormationsSuccess } from '../store/actions/FormActions'

class PageCoursNode extends Component {
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

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

render() {
  return (
     <section className="body-PageCoursNode">
       {
         this.props.allFormations.map((formation, index) => {
           return (
            <MDBContainer className="body-PageCoursNode">
            <MDBCol md="12" className="mb-4">
            <MDBCard 
              className="card-image" 
              style={{
                backgroundImage: "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h6 className="purple-text">
                    {/* <MDBIcon fab/> */}
                  </h6>
                  <h3 className="py-3 font-weight-bold">
                    <strong>Détails de la formation</strong>
                  </h3>
                  <MDBBtn href="./PageCoursDev"> Retour </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
            <MDBNav pills color="secondary">
              <MDBNavItem >
                <MDBNavLink  className="active-link"
                  to="#"
                  active={this.state.items["default"] === "1"}
                  onClick={this.togglePills("default", "1")}
                >
                  Session 1
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="active-link"
                  to="#"
                  active={this.state.items["default"] === "2"}
                  onClick={this.togglePills("default", "2")}
                >
                  Session 2
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="active-link"
                  to="#"
                  active={this.state.items["default"] === "3"}
                  onClick={this.togglePills("default", "3")}
                >
                  Session 3            
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.items["default"]} className="active-link" key={index}>
              <MDBTabPane tabId="1">
              <div>
              <MDBContainer>
              <h1><b>{formation.title1}</b></h1>
              <p className="text-justify"> {formation.def1} </p>
              </MDBContainer>
            <PageVideo/>
            </div>
              </MDBTabPane>
              <MDBTabPane tabId="2">
              <div>
              <MDBContainer>
              <h1><b>{formation.title2}</b></h1>
              <p className="text-justify"> {formation.def2} </p>
            </MDBContainer>
          <PageVideo/>
          </div>
              </MDBTabPane>
              <MDBTabPane tabId="3">
              <div>
              <MDBContainer>
              <h1><b>{formation.title3}</b></h1>
              <p className="text-justify"> {formation.def3} </p>
            </MDBContainer>
          <PageVideo/>
          </div>
              </MDBTabPane>
            </MDBTabContent>
          </MDBContainer>
                 )
                })
              }
      </section>       
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    allFormations: state.formationReducer.allFormations,
    formationItem: state.formationReducer.formationItem
  }
}

export default connect(mapStateToProps, { getAllFormations, getAllFormationsSuccess })(PageCoursNode);
