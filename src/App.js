import React, { Component } from 'react';
import Oshwlogo from './oshwlogo.js';
import Downloader from './downloader.js';
import { Row, Col, Input, Navbar, NavItem } from 'react-materialize';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      schematic : {
        selected: true
      },
      pcb : {
        selected: true
      },
      firmware : {
        selected: true
      },
      mech : {
        selected: true
      },
      designdocs : {
        selected: true
      },
      bom : {
        selected: true
      },
      commercial : {
        selected: true
      },
      style: 'original',
      imageWidth: 400,
      imageHeight: 400
    };
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleStyleChange = this.handleStyleChange.bind(this)
  }
  handleOptionChange(val) {
    // eslint-disable-next-line
    val.target.checked ? this.setState({[val.target.value] : {selected : true}}) : this.setState({[val.target.value] : {selected : false}})
  }
  handleStyleChange(val) {
    this.setState({style: val.target.value})
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
          <Col s={3} className="Logo offset-s3">
              <Oshwlogo id="oshwlogo"
                schematic={this.state.schematic.selected ? 'S' : ""}
                pcb={this.state.pcb.selected ? 'P' : ""}
                firmware={this.state.firmware.selected ? 'F' : ""}
                mech={this.state.mech.selected ? 'M' : ""}
                designdocs={this.state.designdocs.selected ? 'D' : ""}
                bom={this.state.bom.selected ? 'B' : ""}
                commercial={this.state.commercial.selected ? 'C' : ""}
                style={this.state.style}
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
          </Col>
        </Row>
        <Row>
          <Col s={12} m={6} l={3}>
            <Downloader />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
