import React from "react";
import { MDBContainer, MDBRow,MDBTabPane,MDBNavItem,MDBNav, MDBCol,Link,MDBBtn,MDBNavLink,MDBTabContent } from 'mdbreact';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./AdminPage.css";
import ImageUploader from 'react-images-upload';
import { createFormation, getAllFormations, getAllFormationsSuccess, updateFormation } from '../store/actions/FormActions'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class AdminPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        nameF: !this.props.nameF ? "": this.props.nameF ,
        defF:!this.props.defF ? "": this.props.defF,
        categF:!this.props.categF ? "": this.props.categF,
        nameFormatF:!this.props.nameFormatF ? "": this.props.nameFormatF,
        prixF: !this.props.prixF ? "": this.props.prixF,
        created: !this.props.created ? new Date(): this.props.created,
        pictures: [],
        title1:!this.props.title1 ? "": this.props.title1,
        def1:!this.props.def1 ? "": this.props.def1,
        // vd1:!this.props ? "": this.props,
        // fl1:!this.props ? "": this.props,
        title2:!this.props.title2 ? "": this.props.title2,
        def2:!this.props.def2 ? "": this.props.def2,
        // vd2:!this.props ? "": this.props,
        // fl2:!this.props ? "": this.props,
        title3:!this.props.title3 ? "": this.props.title3,
        def3:!this.props.def3 ? "": this.props.def3,
        // vd3:!this.props ? "": this.props,
        // fl3:!this.props ? "": this.props,
        allFormations: [],
        items: {
        default: "1",
      }
    }
    this.onDrop = this.onDrop.bind(this);
    this.onChangeNameF = this.onChangeNameF.bind(this)
    this.onChangeSession = this.onChangeSession.bind(this)
    this.onChangecategF = this.onChangecategF.bind(this)
    this.onChangecreated = this.onChangecreated.bind(this)
    this.onChangedefF = this.onChangedefF.bind(this)
    this.onChangenameFormatF = this.onChangenameFormatF.bind(this)
    this.onChangeprixF = this.onChangeprixF.bind(this)
 }

 componentDidUpdate (prevProps, prevState)
 {
  //  this.updateFormationState()
  if (this.props.allFormations !== prevProps.allFormations) {
    this.setState({
      allFormations: this.props.allFormations
    })
  }
   console.log('je trouve', this.props.formationItem)
 }
 
 updateFormationState = () => {
   const params = this.props.match.params
   const {formationId} = params
   const {formationItem} = this.props

   if (formationId !== "ajout")
   {
    this.setState({
      nameF: formationItem.nameF,
      defF: formationItem.defF,
      categF: formationItem.categF,
      nameFormatF: formationItem.nameFormatF,
      prixF: formationItem.prixF,
      created: formationItem.created,
      // pictures: [],
      title1: formationItem.title1,
      def1: formationItem.def1,
      // vd1: formationItem.vd1,
      // fl1: formationItem.fl1,
      title2: formationItem.title2,
      def2: formationItem.def2,
      // vd2: formationItem.vd2,
      // fl2: formationItem.fl2,
      title3: formationItem.title3,
      def3: formationItem.def3,
      // vd3: formationItem.vd3,
      // fl3: formationItem.fl3,
      items: {
      default: "1",
      }
     })
   }
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

  onDrop(picture) {
  this.setState({
      pictures: this.state.pictures.concat(picture),
  });
  }

  onChangeNameF(e){
     this.setState({
        nameF: e.target.value
     });
  }

  onChangedefF(e){
      this.setState({
        defF:e.target.value
      });
  }

  onChangecategF(e){
      this.setState({
        categF:e.target.value
      });
  }

  onChangeSession (e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onChangenameFormatF(e){
      this.setState({
        nameFormatF:e.target.value
      });
  }

  onChangeprixF(e){
      this.setState({
        prixF:e.target.value
      });
  }

  onChangecreated(date){
      this.setState({
        created:date
      });
  }

  onSubmit(){
    this.props.createFormation(this.state)
    window.location='/PageCoursDev';
  }

  onUpdateFormation = () => {
    this.props.updateFormation(this.state)
    window.location='/PageCoursDev'
  }

  render() {
    return (
      <MDBContainer className="Admin-page">
        <MDBRow>
          <MDBCol md="12" >
            <form onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4">Créer votre formation</p>
              <label htmlFor="nameF" className="grey-text">Nom</label>
              <input 
                type="text" 
                id="nameF" 
                className="form-control" 
                value={this.state.nameF} 
                onChange={this.onChangeNameF}
              />
              <br />
              <label htmlFor="defF" className="grey-text">Définition</label>
              <input 
                type="text" 
                id="defF" 
                className="form-control" 
                value={this.state.defF} 
                onChange={this.onChangedefF}
              />
              <br />
              <label htmlFor="categF" className="grey-text">Catégorie</label> 
              <select 
                id="categF"
                className="browser-default custom-select" 
                value={this.state.categF} 
                onChange={this.onChangecategF}
              >
                <option>Choisir votre catégorie</option>
                <option value="1">Dev</option>
                <option value="2">Design</option>
                <option value="3">Commerce</option>
              </select>
              <br/><br/>
              <label htmlFor="nameFormatF" className="grey-text">Nom de formateur</label>
              <input 
                type="text" 
                id="nameFormatF" 
                className="form-control" 
                value={this.state.nameFormatF} 
                onChange={this.onChangenameFormatF}
              />
              <label htmlFor="prixF" className="grey-text"><br/>Prix</label>
              <input 
                type="Number" 
                id="prixF" 
                className="form-control" 
                value={this.state.prixF} 
                onChange={this.onChangeprixF}
              />
              <br/>
              <label htmlFor="created" className="grey-text">Date de création</label><br/>
              <DatePicker 
                id="created"
                selected={this.state.created} 
                onChange={this.created}
              />
              <br/><br/>
              <label htmlFor="pictures" className="grey-text">Image pour la formation</label><br/>
              <ImageUploader
                id="pictures"
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />
            </form>
            <br/>
          </MDBCol>
        </MDBRow>
        <label htmlFor="categF" className="grey-text">Nombre de sessions</label> 
        <select 
          id="categF"
          className="browser-default custom-select" 
          value={this.state.categF} 
          onChange={this.onChangecategF}
        >
          <option>Choisir le nombre des sessions</option>
          <option value="1">1</option>
          <option value="2">3</option>
          <option value="3">6</option>
        </select>
        <br/><br/>
        <MDBNav pills color="secondary">
          <MDBNavItem >
            <MDBNavLink  
              className="active-link"
              to="#"
              active={this.state.items["default"] === "1"}
              onClick={this.togglePills("default", "1")}
            >
              Session 1
            </MDBNavLink>
          </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink 
                className="active-link"
                to="#"
                active={this.state.items["default"] === "2"}
                onClick={this.togglePills("default", "2")}
              >
                Session 2
              </MDBNavLink>
            </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink 
                  className="active-link"
                  to="#"
                  active={this.state.items["default"] === "3"}
                  onClick={this.togglePills("default", "3")}
                >
                  Session 3            
              </MDBNavLink>
              </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.items["default"]} >
                <MDBTabPane tabId="1">
                  <label className="grey-text">Titre</label>
                  <input 
                    id = "title1"
                    type="text"  
                    className="form-control" 
                    onChange = {this.onChangeSession}
                    value = {this.state.title1}
                  />
                  <br/>
                  <div className="form-group">
                    <label  className="grey-text">Définition</label>
                    <br/>
                    <textarea
                      className="form-control"
                      id="def1"
                      rows="5"
                      onChange = {this.onChangeSession}
                      value = {this.state.def1}
                    />
                  </div>
                  <label  className="grey-text">Video pour la formation</label>
                  <br/>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                <label className="grey-text">Titre</label>
                <input 
                  id ="title2"
                  type="text"  
                  className="form-control"
                  onChange = {this.onChangeSession}
                  value = {this.state.title2}
                />
              <br/>
              <div className="form-group">
                <label  className="grey-text">Définition</label>
                <br/>
                <textarea
                  className="form-control"
                  type = "text"
                  id="def2"
                  rows="5"
                  onChange = {this.onChangeSession}
                  value = {this.state.def2}
                />
              </div>
              <label className="grey-text">Video pour la formation</label>
              <br/>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              <label  className="grey-text">Titre</label>
              <input 
                id="title3"
                type="text"  
                className="form-control" 
                onChange = {this.onChangeSession}
                value = {this.state.title3}
              />
              <br/>
              <div className="form-group">
                <label className="grey-text">Définition</label>
                <br/>
                <textarea
                  type="text"
                  className="form-control"
                  id="def3"
                  rows="5"
                  onChange = {this.onChangeSession}
                  value = {this.state.def3}
                />
              </div>
              <label className="grey-text">Video pour la formation</label>
              <br/>
            </MDBTabPane>
            </MDBTabContent>
              <div className="text-center mt-4">
                <MDBBtn color="unique" type="submit" onClick={(e)=> {this.onSubmit(e)}}>
                  Partager
                </MDBBtn>
                <MDBBtn color="unique" type="submit" onClick={(e)=> {this.onSubmit(e)}}>
                  Partager
                </MDBBtn>
              </div>
      </MDBContainer>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    allFormations: state.formationReducer.allFormations,
    formationItem: state.formationReducer.formationItem
  }
}

export default withRouter(connect(mapStateToProps, { createFormation, getAllFormations, getAllFormationsSuccess, updateFormation })(AdminPage))
