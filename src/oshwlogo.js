import React, { Component } from 'react';

export default class Oshwlogo extends Component{
  render() {
    var davemodCoords = {
      schematic : {
        x: 42,
        y: 112,
      },
      pcb : {
        x: 24,
        y: 74,
      },
      firmware : {
        x: 41,
        y: 36,
      },
      mech : {
        x: 77,
        y: 20,
      },
      designdocs : {
        x: 120,
        y: 36,
      },
      bom : {
        x: 134,
        y: 74,
      },
      commercial : {
        x: 118,
        y: 114,
      }
    };
    var belowCoords = {
      schematic : {
        x: 42,
        y: 130,
      },
      pcb : {
        x: 24,
        y: 130,
      },
      firmware : {
        x: 41,
        y: 130,
      },
      mech : {
        x: 77,
        y: 130,
      },
      designdocs : {
        x: 120,
        y: 130,
      },
      bom : {
        x: 134,
        y: 130,
      },
      commercial : {
        x: 118,
        y: 130,
      }
    };
    switch (this.props.style){
      case "original" : return (
                      <OshwlogoOrig options={this.props} coords={this.props.davemod ? davemodCoords : belowCoords} />
                      )
      case "outline" : return (
                      <OshwlogoOutline options={this.props} coords={this.props.davemod ? davemodCoords : belowCoords} />
                      )
      case "light" : return (
                      <OshwlogoOutlineLight options={this.props} coords={this.props.davemod ? davemodCoords : belowCoords} />
                      )
      default: return (
                      <OshwlogoOrig options={this.props} coords={davemodCoords} />
                      )

    }
  }

};

class OshwlogoOrig extends Component {
  render() {
    return (
      <svg version="1.2" baseProfile="tiny" id="Layer_1" x="0px" y="0px" viewBox="0 0 172.238 180.994" xmlSpace="preserve">
      <g id="logo" mask={this.props.options.davemod ? 'url(#text)' : ''}>
        <path fill="#0099B0" d="M152.336,57.604l-16.439-3.057c-0.4-0.075-0.838-0.451-0.973-0.837l-5.039-11.756  c-0.188-0.363-0.152-0.933,0.08-1.271l9.578-13.96c0.229-0.336,0.184-0.847-0.105-1.136l-11.963-11.963  c-0.289-0.289-0.799-0.336-1.135-0.105l-14.205,9.748c-0.336,0.231-0.912,0.272-1.277,0.092l-11.396-4.665  c-0.387-0.128-0.764-0.561-0.84-0.962L95.457,0.729C95.383,0.328,94.988,0,94.58,0H77.66c-0.407,0-0.802,0.328-0.876,0.729  L73.62,17.732c-0.076,0.401-0.452,0.834-0.84,0.962l-11.397,4.665c-0.366,0.18-0.942,0.139-1.277-0.092l-14.204-9.748  c-0.337-0.231-0.848-0.184-1.136,0.105L32.802,25.587c-0.288,0.289-0.336,0.8-0.105,1.136l9.579,13.96  c0.23,0.338,0.266,0.908,0.079,1.271l-5.04,11.756c-0.134,0.386-0.571,0.762-0.973,0.837l-16.438,3.057  c-0.402,0.076-0.729,0.47-0.729,0.878l0.001,16.919c0,0.408,0.328,0.805,0.729,0.878l16.035,2.984  c0.401,0.073,0.83,0.454,0.952,0.843l5.006,12.505c0.179,0.367,0.137,0.941-0.095,1.277l-9.108,13.273  c-0.23,0.336-0.183,0.848,0.105,1.137l11.965,11.963c0.288,0.287,0.799,0.334,1.136,0.105l13.038-8.949  c0.336-0.23,0.899-0.248,1.25-0.043l5.75,3.07c0.364,0.186,0.789,0.029,0.945-0.348L78.74,85.449c0.157-0.377,0-0.858-0.348-1.071  l-1.439-0.881c-0.266-0.162-0.627-0.441-0.91-0.697c-5.191-3.324-8.635-9.139-8.635-15.761c0-10.334,8.378-18.711,18.711-18.711  c10.333,0,18.71,8.377,18.71,18.711c0,6.622-3.443,12.437-8.635,15.761c-0.281,0.256-0.643,0.535-0.908,0.697l-1.439,0.881  c-0.346,0.213-0.504,0.694-0.348,1.071l11.855,28.648c0.156,0.377,0.58,0.533,0.945,0.348l5.75-3.07  c0.352-0.205,0.914-0.188,1.25,0.043l13.039,8.949c0.336,0.229,0.848,0.182,1.135-0.105l11.965-11.963  c0.289-0.289,0.336-0.801,0.105-1.137l-9.109-13.273c-0.23-0.336-0.273-0.91-0.094-1.277l5.006-12.505  c0.123-0.389,0.549-0.77,0.951-0.843l16.035-2.984c0.4-0.073,0.729-0.47,0.729-0.878l0.002-16.919  C153.064,58.074,152.736,57.68,152.336,57.604"/>
      </g>
      <g id="oshw" mask={this.props.options.oshwunmask ? '' : 'url(#oshwMask)'}>
        <path fillRule="evenodd" fill="#0099B0" d="M45.597,180.781h3.613v-12.254c0-4.426-3.046-5.914-7.473-5.914  c-2.692,0-4.675,0.707-6.056,2.621l2.833,2.16c0.637-1.027,1.523-1.383,3.4-1.383c2.585,0,3.683,0.604,3.683,2.303v1.877h-4.994  c-3.86,0-5.843,2.445-5.843,5.313c0,3.117,2.337,5.49,6.339,5.49c2.444,0,3.684-0.566,4.427-1.807h0.071V180.781z M45.597,174.476  c0,2.799-1.027,3.117-4.037,3.117c-2.444,0-3.401-1.063-3.401-2.266c0-1.311,0.992-2.162,3.118-2.162h4.32V174.476z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M53.178,180.781h3.612v-10.803c0-2.619,1.736-3.754,3.507-3.754  c0.921,0,1.523,0.248,2.373,0.887l2.62-3.117c-1.098-0.85-2.301-1.381-3.754-1.381c-1.912,0-3.542,0.709-4.675,2.125H56.79v-1.912  h-3.612V180.781z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M76.095,180.781h3.612v-25.217h-3.612v9.174c-1.346-1.275-2.798-2.125-4.64-2.125  c-2.196,0-3.789,0.99-4.816,2.338c-0.992,1.273-1.275,2.441-1.275,6.836c0,4.426,0.283,5.594,1.275,6.869  c1.027,1.346,2.62,2.338,4.816,2.338c1.842,0,3.507-0.852,4.64-2.09V180.781z M72.553,166.224c3.365,0,3.542,2.977,3.542,5.563  c0,2.621-0.177,5.594-3.542,5.594c-3.4,0-3.577-2.797-3.577-5.594C68.976,169.023,69.153,166.224,72.553,166.224"/>
        <polygon fillRule="evenodd" fill="#0099B0" points="98.143,180.781 101.332,180.781 107.068,162.826 103.242,162.826   99.809,175.398 99.736,175.398 95.664,162.826 93.043,162.826 88.971,175.398 88.9,175.398 85.464,162.826 81.64,162.826   87.377,180.781 90.564,180.781 94.318,168.208 94.389,168.208 "/>
        <path fillRule="evenodd" fill="#0099B0" d="M118.186,180.781h3.613v-12.254c0-4.426-3.047-5.914-7.473-5.914  c-2.691,0-4.676,0.707-6.057,2.621l2.834,2.16c0.637-1.027,1.521-1.383,3.398-1.383c2.586,0,3.684,0.604,3.684,2.303v1.877h-4.994  c-3.859,0-5.844,2.445-5.844,5.313c0,3.117,2.338,5.49,6.34,5.49c2.443,0,3.684-0.566,4.428-1.807h0.07V180.781z M118.186,174.476  c0,2.799-1.027,3.117-4.037,3.117c-2.443,0-3.4-1.063-3.4-2.266c0-1.311,0.992-2.162,3.117-2.162h4.32V174.476z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M125.768,180.781h3.611v-10.803c0-2.619,1.734-3.754,3.506-3.754  c0.922,0,1.523,0.248,2.373,0.887l2.621-3.117c-1.098-0.85-2.303-1.381-3.754-1.381c-1.912,0-3.541,0.709-4.674,2.125h-0.072v-1.912  h-3.611V180.781z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M152.748,173.167v-2.977c0-4.639-3.434-7.578-7.4-7.578  c-3.471,0-7.402,2.266-7.402,9.242c0,7.367,4.285,9.139,7.969,9.139c2.408,0,4.709-0.85,6.48-2.904l-2.621-2.232  c-1.063,1.1-2.551,1.736-3.93,1.736c-2.48,0-4.285-1.488-4.285-4.426H152.748z M141.559,170.191c0.07-2.727,1.664-4.18,3.789-4.18  s3.684,1.453,3.789,4.18H141.559z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M0,143.425c0,3.895,0.566,5.383,1.947,6.906c0.992,1.098,2.657,2.301,5.455,2.301  c2.797,0,4.462-1.203,5.454-2.301c1.381-1.523,1.948-3.012,1.948-6.906c0-3.861-0.567-5.348-1.948-6.871  c-0.992-1.098-2.657-2.303-5.454-2.303c-2.798,0-4.463,1.205-5.455,2.303C0.566,138.078,0,139.564,0,143.425 M11.191,143.46  c0,2.586-0.212,3.293-0.885,4.25c-0.532,0.744-1.665,1.311-2.904,1.311c-1.24,0-2.373-0.566-2.904-1.311  c-0.673-0.957-0.886-1.664-0.886-4.285c0-2.586,0.213-3.295,0.886-4.25c0.531-0.744,1.664-1.311,2.904-1.311  c1.239,0,2.372,0.566,2.904,1.311C10.979,140.13,11.191,140.839,11.191,143.46"/>
        <path fillRule="evenodd" fill="#0099B0" d="M49.469,144.806v-2.975c0-4.641-3.435-7.58-7.401-7.58  c-3.472,0-7.402,2.268-7.402,9.244c0,7.365,4.285,9.137,7.968,9.137c2.409,0,4.71-0.85,6.481-2.904l-2.621-2.23  c-1.062,1.098-2.549,1.736-3.93,1.736c-2.48,0-4.286-1.488-4.286-4.428H49.469z M38.278,141.832c0.071-2.729,1.665-4.18,3.79-4.18  s3.683,1.451,3.789,4.18H38.278z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M52.552,152.419h3.612v-10.693c0-2.445,1.523-3.861,3.577-3.861  c2.019,0,3.542,1.416,3.542,3.861v10.693h3.612v-11.934c0-4.074-3.187-6.234-5.985-6.234c-1.912,0-3.542,0.709-4.674,2.125h-0.072  v-1.912h-3.612V152.419z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M76.662,149.41c2.302,2.16,4.994,3.223,7.898,3.223c4.179,0,7.437-2.018,7.437-5.525  c0-2.867-1.486-5.135-5.206-5.383l-2.975-0.211c-1.806-0.143-2.372-0.922-2.372-1.701c0-1.238,0.779-2.16,3.08-2.16  c1.949,0,3.402,0.674,4.818,1.664l2.23-2.619c-1.771-1.488-3.895-2.445-7.049-2.445c-3.789,0-6.693,1.877-6.693,5.525  c0,3.08,2.196,4.852,5.17,5.1l3.188,0.283c1.241,0.105,2.196,0.496,2.196,1.771c0,1.523-1.489,2.301-3.542,2.301  c-2.408,0-4.108-0.777-5.666-2.301L76.662,149.41z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M94.051,143.425c0,3.895,0.568,5.383,1.949,6.906c0.992,1.098,2.656,2.301,5.453,2.301  c2.799,0,4.463-1.203,5.455-2.301c1.381-1.523,1.947-3.012,1.947-6.906c0-3.861-0.566-5.348-1.947-6.871  c-0.992-1.098-2.656-2.303-5.455-2.303c-2.797,0-4.461,1.205-5.453,2.303C94.619,138.078,94.051,139.564,94.051,143.425   M105.242,143.46c0,2.586-0.211,3.293-0.885,4.25c-0.531,0.744-1.664,1.311-2.904,1.311c-1.238,0-2.373-0.566-2.902-1.311  c-0.674-0.957-0.887-1.664-0.887-4.285c0-2.586,0.213-3.295,0.887-4.25c0.529-0.744,1.664-1.311,2.902-1.311  c1.24,0,2.373,0.566,2.904,1.311C105.031,140.13,105.242,140.839,105.242,143.46"/>
        <path fillRule="evenodd" fill="#0099B0" d="M111.939,146.4c0,4.072,3.188,6.232,6.021,6.232c1.875,0,3.506-0.709,4.639-2.125h0.07  v1.914h3.611v-17.957h-3.611v10.695c0,2.443-1.523,3.861-3.543,3.861c-2.053,0-3.576-1.418-3.576-3.861v-10.695h-3.611V146.4z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M130.242,152.419h3.613v-10.801c0-2.621,1.734-3.754,3.506-3.754  c0.922,0,1.523,0.248,2.373,0.885l2.621-3.117c-1.1-0.85-2.301-1.381-3.754-1.381c-1.912,0-3.543,0.709-4.676,2.125h-0.07v-1.912  h-3.613V152.419z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M153.859,147.144c-0.885,1.098-2.16,1.877-3.646,1.877  c-2.939,0-4.676-1.666-4.676-5.563c0-3.93,1.736-5.594,4.676-5.594c1.486,0,2.762,0.779,3.646,1.877l2.656-2.373  c-1.557-1.807-3.719-3.117-6.445-3.117c-4.143,0-8.145,2.621-8.145,9.207c0,6.555,4.002,9.174,8.145,9.174  c2.727,0,4.889-1.311,6.445-3.115L153.859,147.144z"/>
        <path fillRule="evenodd" fill="#0099B0" d="M172.238,144.806v-2.975c0-4.641-3.438-7.58-7.402-7.58  c-3.473,0-7.402,2.268-7.402,9.244c0,7.365,4.285,9.137,7.969,9.137c2.408,0,4.711-0.85,6.48-2.904l-2.621-2.23  c-1.063,1.098-2.549,1.736-3.93,1.736c-2.48,0-4.285-1.488-4.285-4.428H172.238z M161.047,141.832c0.07-2.729,1.664-4.18,3.789-4.18  s3.682,1.451,3.789,4.18H161.047z"/>
        <path fill="#0099B0" d="M25.041,149.021c3.4,0,3.577-2.799,3.577-5.561c0-2.799-0.177-5.596-3.577-5.596  c-3.364,0-3.542,2.975-3.542,5.596C21.499,146.046,21.676,149.021,25.041,149.021 M17.873,180.781v-46.316h3.626v1.877  c1.134-1.24,2.798-2.09,4.64-2.09c2.195,0,3.79,0.992,4.817,2.338c0.991,1.275,1.274,2.443,1.274,6.871  c0,4.391-0.283,5.561-1.274,6.834c-1.027,1.346-2.622,2.338-4.817,2.338c-1.842,0-3.294-0.85-4.64-2.125l-0.013,14.23  c1.204-1.416,2.833-2.125,4.745-2.125c2.798,0,5.985,2.16,5.985,6.232v11.936h-3.612v-10.695c0-2.445-1.523-3.861-3.542-3.861  c-2.054,0-3.576,1.416-3.576,3.861v10.695H17.873z"/>
      </g>
      <mask id="oshwMask">
        <rect x="180" y="140" width="180" height="140" fill="#FFFFFF" opacity="1" />
      </mask>
      <mask id="text">
        <rect width="180" height="140" fill="#FFFFFF" opacity="1" />
        <text x="42" y="112" fontFamily="Open Sans, sans-serif" fontWeight="700" fontSize="20">{this.props.options.schematic}</text>
        <text x="24" y="74" fontFamily="Open Sans, sans-serif" fontWeight="700" fontSize="20">{this.props.options.pcb}</text>
        <text x="41" y="36" fontFamily="Open Sans, sans-serif" fontWeight="700" fontSize="20">{this.props.options.firmware}</text>
        <text x="77" y="20" fontFamily="Open Sans, sans-serif" fontWeight="700" fontSize="20">{this.props.options.mech}</text>
        <text x="120" y="36" fontFamily="Open Sans, sans-serif" fontWeight="700" fontSize="20">{this.props.options.designdocs}</text>
        <text x="134" y="74" fontFamily="Open Sans, sans-serif" fontWeight="700" fontSize="20">{this.props.options.bom}</text>
        <text x="118" y="114" fontFamily="Open Sans, sans-serif" fontWeight="700" fontSize="20">{this.props.options.commercial}</text>
      </mask>
      </svg>
      )
  }
}

class OshwlogoOutline extends Component {
  render() {
    return (
      <svg version="1.2" baseProfile="tiny" id="Layer_1" x="0px" y="0px" viewBox="0 0 172.238 180.994" xmlSpace="preserve">
      <g id="logo">
        <path fill="#333333" d="M152.336,57.604l-16.439-3.057c-0.4-0.075-0.838-0.451-0.973-0.837l-5.039-11.756   c-0.188-0.363-0.152-0.933,0.08-1.271l9.578-13.96c0.229-0.336,0.184-0.847-0.105-1.136l-11.963-11.963   c-0.289-0.289-0.799-0.336-1.135-0.105l-14.205,9.748c-0.336,0.231-0.912,0.272-1.277,0.092l-11.396-4.665   c-0.387-0.128-0.764-0.561-0.84-0.962L95.457,0.729C95.383,0.328,94.988,0,94.58,0H77.66c-0.407,0-0.802,0.328-0.876,0.729   L73.62,17.732c-0.076,0.401-0.452,0.834-0.84,0.962l-11.397,4.665c-0.366,0.18-0.942,0.139-1.277-0.092l-14.204-9.748   c-0.337-0.231-0.848-0.184-1.136,0.105L32.802,25.587c-0.288,0.289-0.336,0.8-0.105,1.136l9.579,13.96   c0.23,0.338,0.266,0.908,0.079,1.271l-5.04,11.756c-0.134,0.386-0.571,0.762-0.973,0.837l-16.438,3.057   c-0.402,0.076-0.729,0.47-0.729,0.878l0.001,16.919c0,0.408,0.328,0.805,0.729,0.878l16.035,2.984   c0.401,0.073,0.83,0.454,0.952,0.843l5.006,12.505c0.179,0.367,0.137,0.941-0.095,1.277l-9.108,13.273   c-0.23,0.336-0.183,0.848,0.105,1.137l11.965,11.963c0.288,0.287,0.799,0.334,1.136,0.105l13.038-8.949   c0.336-0.23,0.899-0.248,1.25-0.043l5.75,3.07c0.364,0.186,0.789,0.029,0.945-0.348L78.74,85.449c0.157-0.377,0-0.858-0.348-1.071   l-1.439-0.881c-0.266-0.162-0.627-0.441-0.91-0.697c-5.191-3.324-8.635-9.139-8.635-15.761c0-10.334,8.378-18.711,18.711-18.711   c10.333,0,18.71,8.377,18.71,18.711c0,6.622-3.443,12.437-8.635,15.761c-0.281,0.256-0.643,0.535-0.908,0.697l-1.439,0.881   c-0.346,0.213-0.504,0.694-0.348,1.071l11.855,28.648c0.156,0.377,0.58,0.533,0.945,0.348l5.75-3.07   c0.352-0.205,0.914-0.188,1.25,0.043l13.039,8.949c0.336,0.229,0.848,0.182,1.135-0.105l11.965-11.963   c0.289-0.289,0.336-0.801,0.105-1.137l-9.109-13.273c-0.23-0.336-0.273-0.91-0.094-1.277l5.006-12.505   c0.123-0.389,0.549-0.77,0.951-0.843l16.035-2.984c0.4-0.073,0.729-0.47,0.729-0.878l0.002-16.919   C153.064,58.074,152.736,57.68,152.336,57.604z M149.462,73.551l-13.822,2.572c-1.047,0.207-1.727,0.645-2.313,1.151   c-0.531,0.487-1.004,1.053-1.337,1.934l-4.971,12.415c-0.317,0.736-0.384,1.356-0.39,1.924c0.021,0.896,0.168,1.758,0.84,2.781   l7.834,11.416l-8.782,8.781l-11.184-7.676c-0.979-0.648-1.855-0.805-2.705-0.818c-0.717,0.008-1.453,0.127-2.276,0.568h-0.001   l-2.903,1.551l-9.744-23.547c0.234-0.169,0.45-0.343,0.668-0.528c6.047-3.975,10.054-10.848,10.054-18.637   c-0.002-12.324-9.987-22.31-22.31-22.312c-12.322,0.002-22.308,9.988-22.312,22.312c0.002,7.789,4.008,14.661,10.056,18.636   c0.216,0.184,0.431,0.357,0.668,0.528l-9.743,23.548l-2.903-1.551c-0.835-0.447-1.583-0.561-2.281-0.568   c-0.86,0.014-1.729,0.172-2.708,0.822l-11.177,7.672l-8.784-8.781l7.835-11.42c0.666-1.021,0.817-1.878,0.838-2.777   c-0.008-0.582-0.082-1.203-0.388-1.92l-4.979-12.442c-0.335-0.876-0.809-1.433-1.334-1.915c-0.589-0.504-1.263-0.939-2.32-1.148   l-13.811-2.57l-0.001-12.419L37,58.484c1.031-0.207,1.692-0.624,2.277-1.111c0.521-0.463,0.994-0.997,1.346-1.846l0.002,0.001   l5.01-11.69c0.338-0.739,0.433-1.396,0.439-2.036c-0.019-0.875-0.164-1.731-0.819-2.743l-8.316-12.117l8.782-8.782l12.348,8.475   c1.031,0.672,1.878,0.813,2.774,0.833c0.586-0.005,1.206-0.08,1.926-0.389l11.354-4.647c0.879-0.346,1.433-0.826,1.907-1.352   c0.494-0.586,0.915-1.248,1.126-2.276L79.91,4h12.418l2.752,14.79c0.216,1.047,0.637,1.707,1.13,2.291   c0.478,0.53,1.032,1.01,1.919,1.357l11.356,4.649c0.712,0.303,1.318,0.377,1.908,0.385c0.888-0.023,1.744-0.162,2.774-0.833   l12.352-8.478l8.781,8.783l-8.305,12.103c-0.668,0.997-0.814,1.876-0.834,2.757c0.006,0.625,0.098,1.263,0.413,1.97l5.038,11.756   l0.001,0c0.354,0.85,0.827,1.383,1.349,1.846c0.583,0.485,1.238,0.902,2.272,1.111l14.228,2.646L149.462,73.551z"/>
      </g>
      <g id="oshw" mask={this.props.options.oshwunmask ? '' : 'url(#oshwMask)'}>
        <path fillRule="evenodd" fill="#333333" d="M45.597,180.781h3.613v-12.254c0-4.426-3.046-5.914-7.473-5.914  c-2.692,0-4.675,0.707-6.056,2.621l2.833,2.16c0.637-1.027,1.523-1.383,3.4-1.383c2.585,0,3.683,0.604,3.683,2.303v1.877h-4.994  c-3.86,0-5.843,2.445-5.843,5.313c0,3.117,2.337,5.49,6.339,5.49c2.444,0,3.684-0.566,4.427-1.807h0.071V180.781z M45.597,174.476  c0,2.799-1.027,3.117-4.037,3.117c-2.444,0-3.401-1.063-3.401-2.266c0-1.311,0.992-2.162,3.118-2.162h4.32V174.476z"/>
        <path fillRule="evenodd" fill="#333333" d="M53.178,180.781h3.612v-10.803c0-2.619,1.736-3.754,3.507-3.754  c0.921,0,1.523,0.248,2.373,0.887l2.62-3.117c-1.098-0.85-2.301-1.381-3.754-1.381c-1.912,0-3.542,0.709-4.675,2.125H56.79v-1.912  h-3.612V180.781z"/>
        <path fillRule="evenodd" fill="#333333" d="M76.095,180.781h3.612v-25.217h-3.612v9.174c-1.346-1.275-2.798-2.125-4.64-2.125  c-2.196,0-3.789,0.99-4.816,2.338c-0.992,1.273-1.275,2.441-1.275,6.836c0,4.426,0.283,5.594,1.275,6.869  c1.027,1.346,2.62,2.338,4.816,2.338c1.842,0,3.507-0.852,4.64-2.09V180.781z M72.553,166.224c3.365,0,3.542,2.977,3.542,5.563  c0,2.621-0.177,5.594-3.542,5.594c-3.4,0-3.577-2.797-3.577-5.594C68.976,169.023,69.153,166.224,72.553,166.224"/>
        <polygon fillRule="evenodd" fill="#333333" points="98.143,180.781 101.332,180.781 107.068,162.826 103.242,162.826   99.809,175.398 99.736,175.398 95.664,162.826 93.043,162.826 88.971,175.398 88.9,175.398 85.464,162.826 81.64,162.826   87.377,180.781 90.564,180.781 94.318,168.208 94.389,168.208 "/>
        <path fillRule="evenodd" fill="#333333" d="M118.186,180.781h3.613v-12.254c0-4.426-3.047-5.914-7.473-5.914  c-2.691,0-4.676,0.707-6.057,2.621l2.834,2.16c0.637-1.027,1.521-1.383,3.398-1.383c2.586,0,3.684,0.604,3.684,2.303v1.877h-4.994  c-3.859,0-5.844,2.445-5.844,5.313c0,3.117,2.338,5.49,6.34,5.49c2.443,0,3.684-0.566,4.428-1.807h0.07V180.781z M118.186,174.476  c0,2.799-1.027,3.117-4.037,3.117c-2.443,0-3.4-1.063-3.4-2.266c0-1.311,0.992-2.162,3.117-2.162h4.32V174.476z"/>
        <path fillRule="evenodd" fill="#333333" d="M125.768,180.781h3.611v-10.803c0-2.619,1.734-3.754,3.506-3.754  c0.922,0,1.523,0.248,2.373,0.887l2.621-3.117c-1.098-0.85-2.303-1.381-3.754-1.381c-1.912,0-3.541,0.709-4.674,2.125h-0.072v-1.912  h-3.611V180.781z"/>
        <path fillRule="evenodd" fill="#333333" d="M0,143.425c0,3.895,0.566,5.383,1.947,6.906c0.992,1.098,2.657,2.301,5.455,2.301  c2.797,0,4.462-1.203,5.454-2.301c1.381-1.523,1.948-3.012,1.948-6.906c0-3.861-0.567-5.348-1.948-6.871  c-0.992-1.098-2.657-2.303-5.454-2.303c-2.798,0-4.463,1.205-5.455,2.303C0.566,138.078,0,139.564,0,143.425 M11.191,143.46  c0,2.586-0.212,3.293-0.885,4.25c-0.532,0.744-1.665,1.311-2.904,1.311c-1.24,0-2.373-0.566-2.904-1.311  c-0.673-0.957-0.886-1.664-0.886-4.285c0-2.586,0.213-3.295,0.886-4.25c0.531-0.744,1.664-1.311,2.904-1.311  c1.239,0,2.372,0.566,2.904,1.311C10.979,140.13,11.191,140.839,11.191,143.46"/>
        <path fillRule="evenodd" fill="#333333" d="M49.469,144.806v-2.975c0-4.641-3.435-7.58-7.401-7.58  c-3.472,0-7.402,2.268-7.402,9.244c0,7.365,4.285,9.137,7.968,9.137c2.409,0,4.71-0.85,6.481-2.904l-2.621-2.23  c-1.062,1.098-2.549,1.736-3.93,1.736c-2.48,0-4.286-1.488-4.286-4.428H49.469z M38.278,141.832c0.071-2.729,1.665-4.18,3.79-4.18  s3.683,1.451,3.789,4.18H38.278z"/>
        <path fillRule="evenodd" fill="#333333" d="M52.552,152.419h3.612v-10.693c0-2.445,1.523-3.861,3.577-3.861  c2.019,0,3.542,1.416,3.542,3.861v10.693h3.612v-11.934c0-4.074-3.187-6.234-5.985-6.234c-1.912,0-3.542,0.709-4.674,2.125h-0.072  v-1.912h-3.612V152.419z"/>
        <path fillRule="evenodd" fill="#333333" d="M76.662,149.41c2.302,2.16,4.994,3.223,7.898,3.223c4.179,0,7.437-2.018,7.437-5.525  c0-2.867-1.486-5.135-5.206-5.383l-2.975-0.211c-1.806-0.143-2.372-0.922-2.372-1.701c0-1.238,0.779-2.16,3.08-2.16  c1.949,0,3.402,0.674,4.818,1.664l2.23-2.619c-1.771-1.488-3.895-2.445-7.049-2.445c-3.789,0-6.693,1.877-6.693,5.525  c0,3.08,2.196,4.852,5.17,5.1l3.188,0.283c1.241,0.105,2.196,0.496,2.196,1.771c0,1.523-1.489,2.301-3.542,2.301  c-2.408,0-4.108-0.777-5.666-2.301L76.662,149.41z"/>
        <path fillRule="evenodd" fill="#333333" d="M94.051,143.425c0,3.895,0.568,5.383,1.949,6.906c0.992,1.098,2.656,2.301,5.453,2.301  c2.799,0,4.463-1.203,5.455-2.301c1.381-1.523,1.947-3.012,1.947-6.906c0-3.861-0.566-5.348-1.947-6.871  c-0.992-1.098-2.656-2.303-5.455-2.303c-2.797,0-4.461,1.205-5.453,2.303C94.619,138.078,94.051,139.564,94.051,143.425   M105.242,143.46c0,2.586-0.211,3.293-0.885,4.25c-0.531,0.744-1.664,1.311-2.904,1.311c-1.238,0-2.373-0.566-2.902-1.311  c-0.674-0.957-0.887-1.664-0.887-4.285c0-2.586,0.213-3.295,0.887-4.25c0.529-0.744,1.664-1.311,2.902-1.311  c1.24,0,2.373,0.566,2.904,1.311C105.031,140.13,105.242,140.839,105.242,143.46"/>
        <path fillRule="evenodd" fill="#333333" d="M111.939,146.4c0,4.072,3.188,6.232,6.021,6.232c1.875,0,3.506-0.709,4.639-2.125h0.07  v1.914h3.611v-17.957h-3.611v10.695c0,2.443-1.523,3.861-3.543,3.861c-2.053,0-3.576-1.418-3.576-3.861v-10.695h-3.611V146.4z"/>
        <path fillRule="evenodd" fill="#333333" d="M130.242,152.419h3.613v-10.801c0-2.621,1.734-3.754,3.506-3.754  c0.922,0,1.523,0.248,2.373,0.885l2.621-3.117c-1.1-0.85-2.301-1.381-3.754-1.381c-1.912,0-3.543,0.709-4.676,2.125h-0.07v-1.912  h-3.613V152.419z"/>
        <path fillRule="evenodd" fill="#333333" d="M153.859,147.144c-0.885,1.098-2.16,1.877-3.646,1.877  c-2.939,0-4.676-1.666-4.676-5.563c0-3.93,1.736-5.594,4.676-5.594c1.486,0,2.762,0.779,3.646,1.877l2.656-2.373  c-1.557-1.807-3.719-3.117-6.445-3.117c-4.143,0-8.145,2.621-8.145,9.207c0,6.555,4.002,9.174,8.145,9.174  c2.727,0,4.889-1.311,6.445-3.115L153.859,147.144z"/>
        <path fillRule="evenodd" fill="#333333" d="M172.238,144.806v-2.975c0-4.641-3.438-7.58-7.402-7.58  c-3.473,0-7.402,2.268-7.402,9.244c0,7.365,4.285,9.137,7.969,9.137c2.408,0,4.711-0.85,6.48-2.904l-2.621-2.23  c-1.063,1.098-2.549,1.736-3.93,1.736c-2.48,0-4.285-1.488-4.285-4.428H172.238z M161.047,141.832c0.07-2.729,1.664-4.18,3.789-4.18  s3.682,1.451,3.789,4.18H161.047z"/>
        <path fillRule="evenodd" fill="#333333" d="M152.748,173.167v-2.977c0-4.639-3.434-7.578-7.4-7.578  c-3.471,0-7.402,2.266-7.402,9.242c0,7.367,4.285,9.139,7.969,9.139c2.408,0,4.709-0.85,6.48-2.904l-2.621-2.232  c-1.063,1.1-2.551,1.736-3.93,1.736c-2.48,0-4.285-1.488-4.285-4.426H152.748z M141.559,170.191c0.07-2.727,1.664-4.18,3.789-4.18  s3.684,1.453,3.789,4.18H141.559z"/>
        <path fill="#333333" d="M25.041,149.021c3.4,0,3.577-2.799,3.577-5.561c0-2.799-0.177-5.596-3.577-5.596  c-3.364,0-3.542,2.975-3.542,5.596C21.499,146.046,21.676,149.021,25.041,149.021 M17.873,180.781v-46.316h3.626v1.877  c1.134-1.24,2.798-2.09,4.64-2.09c2.195,0,3.79,0.992,4.817,2.338c0.991,1.275,1.274,2.443,1.274,6.871  c0,4.391-0.283,5.561-1.274,6.834c-1.027,1.346-2.622,2.338-4.817,2.338c-1.842,0-3.294-0.85-4.64-2.125l-0.013,14.23  c1.204-1.416,2.833-2.125,4.745-2.125c2.798,0,5.985,2.16,5.985,6.232v11.936h-3.612v-10.695c0-2.445-1.523-3.861-3.542-3.861  c-2.054,0-3.576,1.416-3.576,3.861v10.695H17.873z"/>
      </g>
      <mask id="oshwMask">
        <rect x="0" y="130" width="180" height="140" fill="#000000" opacity="1" />
      </mask>
        <g id="text" mask={this.props.options.davemod ? '' : 'url(#textMask)'}>
          <text fill="#333333" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="42" y="112" >{this.props.options.schematic}</text>
          <text fill="#333333" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="26" y="74">{this.props.options.pcb}</text>
          <text fill="#333333" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="42" y="35">{this.props.options.firmware}</text>
          <text fill="#333333" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="79" y="20">{this.props.options.mech}</text>
          <text fill="#333333" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="120" y="36">{this.props.options.designdocs}</text>
          <text fill="#333333" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="134" y="74">{this.props.options.bom}</text>
          <text fill="#333333" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="119" y="113">{this.props.options.commercial}</text>
        </g>
        <mask id="textMask">
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="42" y="112" >{this.props.options.schematic}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="26" y="74">{this.props.options.pcb}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="42" y="35">{this.props.options.firmware}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="79" y="20">{this.props.options.mech}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="120" y="36">{this.props.options.designdocs}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="134" y="74">{this.props.options.bom}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="119" y="113">{this.props.options.commercial}</text>
        </mask>
      </svg>
      )
  }
}

class OshwlogoOutlineLight extends Component {
  render() {
    return (
      <svg version="1.2" baseProfile="tiny" id="Layer_1" x="0px" y="0px" viewBox="0 0 172.238 180.994" xmlSpace="preserve">

        <g id="logo">
          <path fill="#E7E8E9" d="M152.336,57.604l-16.439-3.057c-0.4-0.075-0.838-0.451-0.973-0.837l-5.039-11.756   c-0.188-0.363-0.152-0.933,0.08-1.271l9.578-13.96c0.229-0.336,0.184-0.847-0.105-1.136l-11.963-11.963   c-0.289-0.289-0.799-0.336-1.135-0.105l-14.205,9.748c-0.336,0.231-0.912,0.272-1.277,0.092l-11.396-4.665   c-0.387-0.128-0.764-0.561-0.84-0.962L95.457,0.729C95.383,0.328,94.988,0,94.58,0H77.66c-0.407,0-0.802,0.328-0.876,0.729   L73.62,17.732c-0.076,0.401-0.452,0.834-0.84,0.962l-11.397,4.665c-0.366,0.18-0.942,0.139-1.277-0.092l-14.204-9.748   c-0.337-0.231-0.848-0.184-1.136,0.105L32.802,25.587c-0.288,0.289-0.336,0.8-0.105,1.136l9.579,13.96   c0.23,0.338,0.266,0.908,0.079,1.271l-5.04,11.756c-0.134,0.386-0.571,0.762-0.973,0.837l-16.438,3.057   c-0.402,0.076-0.729,0.47-0.729,0.878l0.001,16.919c0,0.408,0.328,0.805,0.729,0.878l16.035,2.984   c0.401,0.073,0.83,0.454,0.952,0.843l5.006,12.505c0.179,0.367,0.137,0.941-0.095,1.277l-9.108,13.273   c-0.23,0.336-0.183,0.848,0.105,1.137l11.965,11.963c0.288,0.287,0.799,0.334,1.136,0.105l13.038-8.949   c0.336-0.23,0.899-0.248,1.25-0.043l5.75,3.07c0.364,0.186,0.789,0.029,0.945-0.348L78.74,85.449c0.157-0.377,0-0.858-0.348-1.071   l-1.439-0.881c-0.266-0.162-0.627-0.441-0.91-0.697c-5.191-3.324-8.635-9.139-8.635-15.761c0-10.334,8.378-18.711,18.711-18.711   c10.333,0,18.71,8.377,18.71,18.711c0,6.622-3.443,12.437-8.635,15.761c-0.281,0.256-0.643,0.535-0.908,0.697l-1.439,0.881   c-0.346,0.213-0.504,0.694-0.348,1.071l11.855,28.648c0.156,0.377,0.58,0.533,0.945,0.348l5.75-3.07   c0.352-0.205,0.914-0.188,1.25,0.043l13.039,8.949c0.336,0.229,0.848,0.182,1.135-0.105l11.965-11.963   c0.289-0.289,0.336-0.801,0.105-1.137l-9.109-13.273c-0.23-0.336-0.273-0.91-0.094-1.277l5.006-12.505   c0.123-0.389,0.549-0.77,0.951-0.843l16.035-2.984c0.4-0.073,0.729-0.47,0.729-0.878l0.002-16.919   C153.064,58.074,152.736,57.68,152.336,57.604z M149.462,73.551l-13.822,2.572c-1.047,0.207-1.727,0.645-2.313,1.151   c-0.531,0.487-1.004,1.053-1.337,1.934l-4.971,12.415c-0.317,0.736-0.384,1.356-0.39,1.924c0.021,0.896,0.168,1.758,0.84,2.781   l7.834,11.416l-8.782,8.781l-11.184-7.676c-0.979-0.648-1.855-0.805-2.705-0.818c-0.717,0.008-1.453,0.127-2.276,0.568h-0.001   l-2.903,1.551l-9.744-23.547c0.234-0.169,0.45-0.343,0.668-0.528c6.047-3.975,10.054-10.848,10.054-18.637   c-0.002-12.324-9.987-22.31-22.31-22.312c-12.322,0.002-22.308,9.988-22.312,22.312c0.002,7.789,4.008,14.661,10.056,18.636   c0.216,0.184,0.431,0.357,0.668,0.528l-9.743,23.548l-2.903-1.551c-0.835-0.447-1.583-0.561-2.281-0.568   c-0.86,0.014-1.729,0.172-2.708,0.822l-11.177,7.672l-8.784-8.781l7.835-11.42c0.666-1.021,0.817-1.878,0.838-2.777   c-0.008-0.582-0.082-1.203-0.388-1.92l-4.979-12.442c-0.335-0.876-0.809-1.433-1.334-1.915c-0.589-0.504-1.263-0.939-2.32-1.148   l-13.811-2.57l-0.001-12.419L37,58.484c1.031-0.207,1.692-0.624,2.277-1.111c0.521-0.463,0.994-0.997,1.346-1.846l0.002,0.001   l5.01-11.69c0.338-0.739,0.433-1.396,0.439-2.036c-0.019-0.875-0.164-1.731-0.819-2.743l-8.316-12.117l8.782-8.782l12.348,8.475   c1.031,0.672,1.878,0.813,2.774,0.833c0.586-0.005,1.206-0.08,1.926-0.389l11.354-4.647c0.879-0.346,1.433-0.826,1.907-1.352   c0.494-0.586,0.915-1.248,1.126-2.276L79.91,4h12.418l2.752,14.79c0.216,1.047,0.637,1.707,1.13,2.291   c0.478,0.53,1.032,1.01,1.919,1.357l11.356,4.649c0.712,0.303,1.318,0.377,1.908,0.385c0.888-0.023,1.744-0.162,2.774-0.833   l12.352-8.478l8.781,8.783l-8.305,12.103c-0.668,0.997-0.814,1.876-0.834,2.757c0.006,0.625,0.098,1.263,0.413,1.97l5.038,11.756   l0.001,0c0.354,0.85,0.827,1.383,1.349,1.846c0.583,0.485,1.238,0.902,2.272,1.111l14.228,2.646L149.462,73.551z"/>
        </g>

        <g id="oshw" mask={this.props.options.oshwunmask ? '' : 'url(#oshwMask)'}>
          <path fillRule="evenodd" fill="#FFFFFF" d="M45.597,180.781h3.613v-12.254c0-4.426-3.046-5.914-7.473-5.914  c-2.692,0-4.675,0.707-6.056,2.621l2.833,2.16c0.637-1.027,1.523-1.383,3.4-1.383c2.585,0,3.683,0.604,3.683,2.303v1.877h-4.994  c-3.86,0-5.843,2.445-5.843,5.313c0,3.117,2.337,5.49,6.339,5.49c2.444,0,3.684-0.566,4.427-1.807h0.071V180.781z M45.597,174.476  c0,2.799-1.027,3.117-4.037,3.117c-2.444,0-3.401-1.063-3.401-2.266c0-1.311,0.992-2.162,3.118-2.162h4.32V174.476z"/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M53.178,180.781h3.612v-10.803c0-2.619,1.736-3.754,3.507-3.754  c0.921,0,1.523,0.248,2.373,0.887l2.62-3.117c-1.098-0.85-2.301-1.381-3.754-1.381c-1.912,0-3.542,0.709-4.675,2.125H56.79v-1.912  h-3.612V180.781z"/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M76.095,180.781h3.612v-25.217h-3.612v9.174c-1.346-1.275-2.798-2.125-4.64-2.125  c-2.196,0-3.789,0.99-4.816,2.338c-0.992,1.273-1.275,2.441-1.275,6.836c0,4.426,0.283,5.594,1.275,6.869  c1.027,1.346,2.62,2.338,4.816,2.338c1.842,0,3.507-0.852,4.64-2.09V180.781z M72.553,166.224c3.365,0,3.542,2.977,3.542,5.563  c0,2.621-0.177,5.594-3.542,5.594c-3.4,0-3.577-2.797-3.577-5.594C68.976,169.023,69.153,166.224,72.553,166.224"/>
          <polygon fillRule="evenodd" fill="#FFFFFF" points="98.143,180.781 101.332,180.781 107.068,162.826 103.242,162.826   99.809,175.398 99.736,175.398 95.664,162.826 93.043,162.826 88.971,175.398 88.9,175.398 85.464,162.826 81.64,162.826   87.377,180.781 90.564,180.781 94.318,168.208 94.389,168.208 "/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M118.186,180.781h3.613v-12.254c0-4.426-3.047-5.914-7.473-5.914  c-2.691,0-4.676,0.707-6.057,2.621l2.834,2.16c0.637-1.027,1.521-1.383,3.398-1.383c2.586,0,3.684,0.604,3.684,2.303v1.877h-4.994  c-3.859,0-5.844,2.445-5.844,5.313c0,3.117,2.338,5.49,6.34,5.49c2.443,0,3.684-0.566,4.428-1.807h0.07V180.781z M118.186,174.476  c0,2.799-1.027,3.117-4.037,3.117c-2.443,0-3.4-1.063-3.4-2.266c0-1.311,0.992-2.162,3.117-2.162h4.32V174.476z"/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M125.768,180.781h3.611v-10.803c0-2.619,1.734-3.754,3.506-3.754  c0.922,0,1.523,0.248,2.373,0.887l2.621-3.117c-1.098-0.85-2.303-1.381-3.754-1.381c-1.912,0-3.541,0.709-4.674,2.125h-0.072v-1.912  h-3.611V180.781z"/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M152.748,173.167v-2.977c0-4.639-3.434-7.578-7.4-7.578  c-3.471,0-7.402,2.266-7.402,9.242c0,7.367,4.285,9.139,7.969,9.139c2.408,0,4.709-0.85,6.48-2.904l-2.621-2.232  c-1.063,1.1-2.551,1.736-3.93,1.736c-2.48,0-4.285-1.488-4.285-4.426H152.748z M141.559,170.191c0.07-2.727,1.664-4.18,3.789-4.18  s3.684,1.453,3.789,4.18H141.559z"/>
          <path fillRule="evenodd" fill="#E7E8E9" d="M0,143.425c0,3.895,0.566,5.383,1.947,6.906c0.992,1.098,2.657,2.301,5.455,2.301  c2.797,0,4.462-1.203,5.454-2.301c1.381-1.523,1.948-3.012,1.948-6.906c0-3.861-0.567-5.348-1.948-6.871  c-0.992-1.098-2.657-2.303-5.454-2.303c-2.798,0-4.463,1.205-5.455,2.303C0.566,138.078,0,139.564,0,143.425 M11.191,143.46  c0,2.586-0.212,3.293-0.885,4.25c-0.532,0.744-1.665,1.311-2.904,1.311c-1.24,0-2.373-0.566-2.904-1.311  c-0.673-0.957-0.886-1.664-0.886-4.285c0-2.586,0.213-3.295,0.886-4.25c0.531-0.744,1.664-1.311,2.904-1.311  c1.239,0,2.372,0.566,2.904,1.311C10.979,140.13,11.191,140.839,11.191,143.46"/>
          <path fillRule="evenodd" fill="#E7E8E9" d="M49.469,144.806v-2.975c0-4.641-3.435-7.58-7.401-7.58  c-3.472,0-7.402,2.268-7.402,9.244c0,7.365,4.285,9.137,7.968,9.137c2.409,0,4.71-0.85,6.481-2.904l-2.621-2.23  c-1.062,1.098-2.549,1.736-3.93,1.736c-2.48,0-4.286-1.488-4.286-4.428H49.469z M38.278,141.832c0.071-2.729,1.665-4.18,3.79-4.18  s3.683,1.451,3.789,4.18H38.278z"/>
          <path fillRule="evenodd" fill="#E7E8E9" d="M52.552,152.419h3.612v-10.693c0-2.445,1.523-3.861,3.577-3.861  c2.019,0,3.542,1.416,3.542,3.861v10.693h3.612v-11.934c0-4.074-3.187-6.234-5.985-6.234c-1.912,0-3.542,0.709-4.674,2.125h-0.072  v-1.912h-3.612V152.419z"/>
          <path fillRule="evenodd" fill="#E7E8E9" d="M76.662,149.41c2.302,2.16,4.994,3.223,7.898,3.223c4.179,0,7.437-2.018,7.437-5.525  c0-2.867-1.486-5.135-5.206-5.383l-2.975-0.211c-1.806-0.143-2.372-0.922-2.372-1.701c0-1.238,0.779-2.16,3.08-2.16  c1.949,0,3.402,0.674,4.818,1.664l2.23-2.619c-1.771-1.488-3.895-2.445-7.049-2.445c-3.789,0-6.693,1.877-6.693,5.525  c0,3.08,2.196,4.852,5.17,5.1l3.188,0.283c1.241,0.105,2.196,0.496,2.196,1.771c0,1.523-1.489,2.301-3.542,2.301  c-2.408,0-4.108-0.777-5.666-2.301L76.662,149.41z"/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M94.051,143.425c0,3.895,0.568,5.383,1.949,6.906c0.992,1.098,2.656,2.301,5.453,2.301  c2.799,0,4.463-1.203,5.455-2.301c1.381-1.523,1.947-3.012,1.947-6.906c0-3.861-0.566-5.348-1.947-6.871  c-0.992-1.098-2.656-2.303-5.455-2.303c-2.797,0-4.461,1.205-5.453,2.303C94.619,138.078,94.051,139.564,94.051,143.425   M105.242,143.46c0,2.586-0.211,3.293-0.885,4.25c-0.531,0.744-1.664,1.311-2.904,1.311c-1.238,0-2.373-0.566-2.902-1.311  c-0.674-0.957-0.887-1.664-0.887-4.285c0-2.586,0.213-3.295,0.887-4.25c0.529-0.744,1.664-1.311,2.902-1.311  c1.24,0,2.373,0.566,2.904,1.311C105.031,140.13,105.242,140.839,105.242,143.46"/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M111.939,146.4c0,4.072,3.188,6.232,6.021,6.232c1.875,0,3.506-0.709,4.639-2.125h0.07  v1.914h3.611v-17.957h-3.611v10.695c0,2.443-1.523,3.861-3.543,3.861c-2.053,0-3.576-1.418-3.576-3.861v-10.695h-3.611V146.4z"/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M130.242,152.419h3.613v-10.801c0-2.621,1.734-3.754,3.506-3.754  c0.922,0,1.523,0.248,2.373,0.885l2.621-3.117c-1.1-0.85-2.301-1.381-3.754-1.381c-1.912,0-3.543,0.709-4.676,2.125h-0.07v-1.912  h-3.613V152.419z"/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M153.859,147.144c-0.885,1.098-2.16,1.877-3.646,1.877  c-2.939,0-4.676-1.666-4.676-5.563c0-3.93,1.736-5.594,4.676-5.594c1.486,0,2.762,0.779,3.646,1.877l2.656-2.373  c-1.557-1.807-3.719-3.117-6.445-3.117c-4.143,0-8.145,2.621-8.145,9.207c0,6.555,4.002,9.174,8.145,9.174  c2.727,0,4.889-1.311,6.445-3.115L153.859,147.144z"/>
          <path fillRule="evenodd" fill="#FFFFFF" d="M172.238,144.806v-2.975c0-4.641-3.438-7.58-7.402-7.58  c-3.473,0-7.402,2.268-7.402,9.244c0,7.365,4.285,9.137,7.969,9.137c2.408,0,4.711-0.85,6.48-2.904l-2.621-2.23  c-1.063,1.098-2.549,1.736-3.93,1.736c-2.48,0-4.285-1.488-4.285-4.428H172.238z M161.047,141.832c0.07-2.729,1.664-4.18,3.789-4.18  s3.682,1.451,3.789,4.18H161.047z"/>
          <path fill="#E7E8E9" d="M25.041,149.021c3.4,0,3.577-2.799,3.577-5.561c0-2.799-0.177-5.596-3.577-5.596  c-3.364,0-3.542,2.975-3.542,5.596C21.499,146.046,21.676,149.021,25.041,149.021 M17.873,180.781v-46.316h3.626v1.877  c1.134-1.24,2.798-2.09,4.64-2.09c2.195,0,3.79,0.992,4.817,2.338c0.991,1.275,1.274,2.443,1.274,6.871  c0,4.391-0.283,5.561-1.274,6.834c-1.027,1.346-2.622,2.338-4.817,2.338c-1.842,0-3.294-0.85-4.64-2.125l-0.013,14.23  c1.204-1.416,2.833-2.125,4.745-2.125c2.798,0,5.985,2.16,5.985,6.232v11.936h-3.612v-10.695c0-2.445-1.523-3.861-3.542-3.861  c-2.054,0-3.576,1.416-3.576,3.861v10.695H17.873z"/>
        </g>

        <mask id="oshwMask">
          <rect x="0" y="130" width="180" height="140" fill="#000000" opacity="1" />
        </mask>
        <g id="text" mask={this.props.options.davemod ? '' : 'url(#textMask)'}>
          <text fill="#E7E8E9" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="42" y="112" >{this.props.options.schematic}</text>
          <text fill="#E7E8E9" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="26" y="74">{this.props.options.pcb}</text>
          <text fill="#E7E8E9" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="134" y="74">{this.props.options.firmware}</text>
          <text fill="#E7E8E9" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="79" y="20">{this.props.options.mech}</text>
          <text fill="#E7E8E9" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="42" y="35">{this.props.options.designdocs}</text>
          <text fill="#E7E8E9" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="120" y="36">{this.props.options.bom}</text>
          <text fill="#E7E8E9" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="119" y="113">{this.props.options.commercial}</text>
        </g>
        <mask id="textMask">
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="42" y="112" >{this.props.options.schematic}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="26" y="74">{this.props.options.pcb}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="134" y="74">{this.props.options.firmware}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="79" y="20">{this.props.options.mech}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="42" y="35">{this.props.options.designdocs}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="120" y="36">{this.props.options.bom}</text>
          <text fill="#000000" fontFamily="Open Sans Condensed, sans-serif" fontWeight="400" fontSize="17" x="119" y="113">{this.props.options.commercial}</text>
        </mask>
      </svg>
      )
  }
}