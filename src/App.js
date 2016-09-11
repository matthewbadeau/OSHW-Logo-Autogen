import React, { Component } from 'react';
import Oshwlogo from './oshwlogo.js';
import Downloader from './downloader.js';
import { Row, Col, Input, Navbar, NavItem } from 'react-materialize';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      schematic : true,
      pcb : true,
      firmware : true,
      mech : true,
      designdocs : true,
      bom : true,
      commercial : true,
      style : 'original',
      imageWidth : 400,
      imageHeight : 400,
      davemod : true,
      oshwunmask : true,
      fontSize : 20,
      fontFamily : '\'Open Sans\', Helvetica Neue, Arial, Helvetica, sans-serif'
    };
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleStyleChange = this.handleStyleChange.bind(this)
  }
  handleOptionChange(val) {
    this.setState({[val.target.value] : val.target.checked})
  }
  handleStyleChange(val) {
    if (val.target.value === 'light' || val.target.value === 'outline'){
      if (val.target.value === 'light'){
        document.getElementById("logo").style.cssText = 'background-color: #333333'
      } else {
        document.getElementById("logo").style.cssText = 'background-color: #FFFFFF'
      }
      this.setState({
        style: val.target.value,
        fontSize : 17,
        fontFamily : '\'Open Sans Condensed\', Helvetica Neue, Arial, Helvetica, sans-serif'
      })
    } else {
      this.setState({
        style: val.target.value,
        fontSize : 20,
        fontFamily : '\'Open Sans\', Helvetica Neue, Arial, Helvetica, sans-serif'
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar brand="OSHW Logo Generator" color="orange" right>
          <NavItem href="https://github.com/matthewbadeau/OSHW-Logo-Autogen">Fork on GitHub</NavItem>
        </Navbar>
        <Row>
          <Col s={12} />
        </Row>
        <Row>
          <Col s={3} className="Logo offset-s3" id="logo">
              <Oshwlogo id="oshwlogo"
                schematic={this.state.schematic ? 'S' : ""}
                pcb={this.state.pcb ? 'P' : ""}
                firmware={this.state.firmware ? 'F' : ""}
                mech={this.state.mech ? 'M' : ""}
                designdocs={this.state.designdocs ? 'D' : ""}
                bom={this.state.bom ? 'B' : ""}
                commercial={this.state.commercial ? 'C' : ""}
                style={this.state.style}
                davemod={this.state.davemod}
                oshwunmask={this.state.oshwunmask}
                />
          </Col>
          <Col s={3} className="Options">
            <Row>
              <Input
                type="checkbox"
                defaultChecked="true"
                name="options"
                value="schematic"
                label="Schematic"
                onChange={this.handleOptionChange}
                s={12}
                />
              <Input
                type="checkbox"
                defaultChecked="true"
                name="options"
                value="pcb"
                label="PCB"
                onChange={this.handleOptionChange}
                s={12}
                />
              <Input
                type="checkbox"
                defaultChecked="true"
                name="options"
                value="firmware"
                label="Firmware"
                onChange={this.handleOptionChange}
                s={12}
                />
              <Input
                type="checkbox"
                defaultChecked="true"
                name="options"
                value="mech"
                label="Mechanical/CAD Files"
                onChange={this.handleOptionChange}
                s={12}
                />
              <Input
                type="checkbox"
                defaultChecked="true"
                name="options"
                value="designdocs"
                label="Design Documents"
                onChange={this.handleOptionChange}
                s={12}
                />
              <Input
                type="checkbox"
                defaultChecked="true"
                name="options"
                value="bom"
                label="Bill of Materials"
                onChange={this.handleOptionChange}
                s={12}
                />
              <Input
                type="checkbox"
                defaultChecked="true"
                name="options"
                value="commercial"
                label="Commercial Allowed"
                onChange={this.handleOptionChange}
                s={12}
                />
              <br />
              Dave Jones's Proposal
              <Input
                type="switch"
                defaultChecked="true"
                name="davemod"
                value="davemod"
                onChange={this.handleOptionChange}
                s={12}
                />
              Open Source Hardware text
              <Input
                type="switch"
                defaultChecked="true"
                name="oshwunmask"
                value="oshwunmask"
                onChange={this.handleOptionChange}
                s={12}
                />
            </Row>
            <div>
              <Input
                name="logoselect"
                type="radio"
                value="original"
                label="Original"
                defaultChecked="true"
                onChange={this.handleStyleChange}
                />
              <Input
                name="logoselect"
                type="radio"
                value="outline"
                label="Outline"
                onChange={this.handleStyleChange}
                />
              <Input
                name="logoselect"
                type="radio"
                value="light"
                label="Outline-Light"
                onChange={this.handleStyleChange}
                />
            </div>
            <Downloader options={this.state}/>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={6} l={3} className="offset-s6">
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
