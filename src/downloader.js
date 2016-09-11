import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';

export default class Downloader extends Component{
  constructor(){
    super();
    this.state = {
      filename: 'oshw-logo.png',
      filetype: 'png',
      width: 400,
      height: 400
    }
    this.handleImageSizeChange = this.handleImageSizeChange.bind(this)
    this.handleFiletypeOptionChange = this.handleFiletypeOptionChange.bind(this)
    this.handleDownloadClick = this.handleDownloadClick.bind(this)
  }
  handleImageSizeChange(val) {
    // eslint-disable-next-line
    this.setState({[val.target.name]: isNaN(parseInt(val.target.value)) ? 400 : parseInt(val.target.value)});
  }
  handleFiletypeOptionChange(val) {
    this.setState({[val.target.name]: val.target.value ? val.target.value : 'png' });
  }
  handleDownloadClick(options){
    alert("test")
  }
  render() {
    return (
      <Row>
        <Col s={12}>
          <Input
            type="number"
            name="imageWidth"
            defaultValue="400"
            className="ImageSize"
            label="Width"
            onChange={this.handleImageSizeChange}
          />
          <Input
            type="number"
            name="imageHeight"
            defaultValue="400"
            className="ImageSize"
            label="Height"
            onChange={this.handleImageSizeChange}
          />
        </Col>
        <Col s={12}>
          <Input
            name="filetype"
            type="radio"
            value="png"
            label="png"
            defaultChecked="true"
            onChange={this.handleFiletypeOptionChange}
            />
          <Input
            name="filetype"
            type="radio"
            value="bmp"
            label="bmp"
            onChange={this.handleFiletypeOptionChange}
            disabled={true}
            />
          <Input
            name="filetype"
            type="radio"
            value="jpg"
            label="jpg"
            onChange={this.handleFiletypeOptionChange}
            disabled={true}
            />
        </Col>
        <Col s={12}>
          <Button
            waves="light"
            onClick={this.handleDownloadClick}
            >
          {this.state.filetype}
          </Button>
        </Col>
      </Row>
    )
  }

};