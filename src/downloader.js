import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';

export default class Downloader extends Component{
  constructor(){
    super();
    this.state = {
      filename: 'oshw-logo',
      filetype: 'png',
      width: 400,
      height: 400
    }
    this.handleImageSizeChange = this.handleImageSizeChange.bind(this)
    this.handleFiletypeOptionChange = this.handleFiletypeOptionChange.bind(this)
    this.handleDownloadClick = this.handleDownloadClick.bind(this)
  }
  handleImageSizeChange(val) {
    this.setState({[val.target.name]: isNaN(parseInt(val.target.value, 10)) ? 400 : parseInt(val.target.value, 10)});
  }
  handleFiletypeOptionChange(val) {
    this.setState({[val.target.name]: val.target.value ? val.target.value : 'png' });
  }
  handleDownloadClick(options){
    const { width, height } = this.state;
    const svg = document.getElementsByTagName("svg")[0]
    const svgClone = svg.cloneNode(true)

    svgClone.style['font-family'] = this.props.options.fontFamily
    svgClone.style['font-size'] = this.props.options.fontSize

    svgClone.setAttribute('width', width)
    svgClone.setAttribute('height', height)

    const svgData = new XMLSerializer().serializeToString(svgClone)

    var canvas = document.createElement('canvas')

    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)

    var ctx = canvas.getContext('2d')

    var img = document.createElement('img')

    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height)

      var a = document.createElement('a')
      a.setAttribute('href', canvas.toDataURL('image/' + this.state.filetype))
      a.setAttribute('target', 'download')
      a.setAttribute('download', this.state.filename + '.' + this.state.filetype)
      a.click()
    }

    img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData))

  }
  render() {
    return (
      <Row>
        <Col s={12}>
          <Input
            type="number"
            name="width"
            defaultValue="400"
            className="ImageSize"
            label="Width"
            onChange={this.handleImageSizeChange}
          />
          <Input
            type="number"
            name="height"
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
            label="1-bpp bmp"
            onChange={this.handleFiletypeOptionChange}
            disabled={true}
            />
          <Input
            name="filetype"
            type="radio"
            value="jpeg"
            label="jpeg"
            onChange={this.handleFiletypeOptionChange}
            />
        </Col>
        <Col s={12}>
          <Button
            waves="light"
            onClick={this.handleDownloadClick}
            >
          Download
          </Button>
        </Col>
      </Row>
    )
  }

};