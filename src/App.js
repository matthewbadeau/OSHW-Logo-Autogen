import React, { Component } from 'react';
import Oshwlogo from './oshwlogo.js';
import { Wrapper, Trigger } from 'react-download-svg';
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
      imageWidth: 400,
      imageHeight: 400
    };
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleImageSizeChange = this.handleImageSizeChange.bind(this)
  }
  handleOptionChange(val) {
    // eslint-disable-next-line
    val.target.checked ? this.setState({[val.target.name] : true}) : this.setState({[val.target.name] : false})
  }
  handleImageSizeChange(val) {
    // eslint-disable-next-line
    this.setState({[val.target.name]: isNaN(parseInt(val.target.value)) ? 400 : parseInt(val.target.value)});
  }
  render() {
    return (
      <div className="App">
        <div className="Logo">
          <Wrapper filename="oshwlogo.png" listenFor="downloadSvg">
            <Oshwlogo id="oshwlogo"
              schematic={this.state.schematic ? 'm 53.445065,108.96513 q 0,1.66015 -0.842286,2.9541 -0.842285,1.28174 -2.429199,2.00195 -1.586914,0.70801 -3.723144,0.70801 -1.782227,0 -2.990723,-0.24414 -1.208496,-0.25635 -2.514648,-0.87891 l 0,-4.29687 q 1.379394,0.708 2.868652,1.11084 1.489258,0.39062 2.734375,0.39062 1.074219,0 1.574707,-0.36621 0.500488,-0.37842 0.500488,-0.96435 0,-0.36622 -0.207519,-0.63477 -0.195313,-0.28076 -0.646973,-0.56152 -0.439453,-0.28077 -2.368164,-1.14746 -1.745606,-0.79346 -2.624512,-1.53809 -0.866699,-0.74463 -1.293945,-1.70899 -0.415039,-0.96435 -0.415039,-2.28271 0,-2.46582 1.794433,-3.845215 1.794434,-1.379394 4.931641,-1.379394 2.770996,0 5.651856,1.281738 l -1.477051,3.723141 q -2.502442,-1.14746 -4.321289,-1.14746 -0.939942,0 -1.367188,0.32959 -0.427246,0.32959 -0.427246,0.81787 0,0.52491 0.537109,0.93994 0.549317,0.41504 2.954102,1.51368 2.307129,1.03759 3.198242,2.23388 0.903321,1.18409 0.903321,2.99073 z' : ""}
              pcb={this.state.pcb ? 'm 40.453455,63.55764 q 0,2.990723 -1.77002,4.626465 -1.757812,1.623535 -5.004882,1.623535 l -1.354981,0 0,5.92041 -4.821777,0 0,-17.846679 6.176758,0 q 3.381347,0 5.078125,1.47705 1.696777,1.477051 1.696777,4.199219 z m -8.129883,2.319336 0.878906,0 q 1.086426,0 1.721192,-0.610352 0.646972,-0.610351 0.646972,-1.68457 0,-1.80664 -2.001953,-1.80664 l -1.245117,0 0,4.101562 z' : ""}
              firmware={this.state.firmware ? 'm 47.118401,38.062267 -4.748536,0 0,-17.846679 10.546875,0 0,3.869629 -5.798339,0 0,3.405761 5.346679,0 0,3.869629 -5.346679,0 0,6.70166 z' : ""}
              mech={this.state.mech ? 'm 83.844181,19.375303 -3.269093,-11.5128926 -0.0984,0 q 0.229601,2.9410906 0.229601,4.5701706 l 0,6.942722 -3.826697,0 0,-15.984662 5.75098,0 3.334693,11.348892 0.08747,0 3.269093,-11.348892 5.761913,0 0,15.984662 -3.968832,0 0,-7.008323 q 0,-0.546671 0.01093,-1.21361 0.02187,-0.666938 0.153068,-3.2690928 l -0.0984,0 -3.225359,11.4910258 -4.110967,0 z' : ""}
              designdocs={this.state.designdocs ? 'm 134.03983,28.760509 q 0,4.467774 -2.46582,6.884766 -2.45362,2.416992 -6.90918,2.416992 l -5.77393,0 0,-17.846679 6.17676,0 q 4.29687,0 6.62842,2.197265 2.34375,2.197266 2.34375,6.347656 z m -5.00489,0.170899 q 0,-2.453613 -0.97656,-3.637695 -0.96436,-1.184082 -2.94189,-1.184082 l -1.40381,0 0,9.997558 1.07422,0 q 2.19726,0 3.22265,-1.269531 1.02539,-1.281738 1.02539,-3.90625 z' : ""}
              bom={this.state.bom ? 'm 134.35368,58.079613 6.22559,0 q 3.63769,0 5.39551,1.086426 1.77002,1.074218 1.77002,3.356933 0,1.501465 -0.76905,2.563477 -0.76904,1.062011 -2.02636,1.367187 l 0,0.12207 q 1.66015,0.439454 2.40478,1.464844 0.74463,1.025391 0.74463,2.661133 0,2.429199 -1.83105,3.833008 -1.81885,1.391601 -4.96827,1.391601 l -6.9458,0 0,-17.846679 z m 4.82178,6.848144 1.45264,0 q 1.0376,0 1.59912,-0.427246 0.57373,-0.427246 0.57373,-1.269531 0,-1.501465 -2.27051,-1.501465 l -1.35498,0 0,3.198242 z m 0,3.527832 0,3.747559 1.69678,0 q 2.2583,0 2.2583,-1.904297 0,-0.891113 -0.61035,-1.367187 -0.59815,-0.476075 -1.74561,-0.476075 l -1.59912,0 z' : ""}
              commercial={this.state.commercial ? 'm 125.44998,100.63357 q -1.72119,0 -2.68555,1.41601 -0.96435,1.40381 -0.96435,3.88184 0,5.15137 3.91846,5.15137 1.18408,0 2.29492,-0.32959 1.11084,-0.32959 2.23388,-0.79346 l 0,4.07715 q -2.23388,0.98877 -5.05371,0.98877 -4.04052,0 -6.20117,-2.34375 -2.14844,-2.34375 -2.14844,-6.7749 0,-2.771 1.0376,-4.87061 1.04981,-2.09961 3.00293,-3.222656 1.96533,-1.135254 4.61426,-1.135254 2.89307,0 5.52978,1.257324 l -1.47705,3.796386 q -0.98877,-0.46387 -1.97753,-0.78125 -0.98877,-0.31738 -2.12403,-0.31738 z' : ""}
              />
          </Wrapper>
        </div>
        <div className="Options">
          <input type="checkbox" defaultChecked="true" name="schematic" onChange={this.handleOptionChange} /> Schematic <br />
          <input type="checkbox" defaultChecked="true" name="pcb" onChange={this.handleOptionChange} /> PCB <br />
          <input type="checkbox" defaultChecked="true" name="firmware" onChange={this.handleOptionChange} /> Firmware <br />
          <input type="checkbox" defaultChecked="true" name="mech" onChange={this.handleOptionChange} /> Mechanical/CAD Files <br />
          <input type="checkbox" defaultChecked="true" name="designdocs" onChange={this.handleOptionChange} /> Design Documents <br />
          <input type="checkbox" defaultChecked="true" name="bom" onChange={this.handleOptionChange} /> Bill of Materials <br />
          <input type="checkbox" defaultChecked="true" name="commercial" onChange={this.handleOptionChange} /> Commercial Allowed <br />
          <br />
          Width: <input type="number" name="imageWidth" defaultValue="400" className="ImageSize" onChange={this.handleImageSizeChange} /><br />
          Height: <input type="number" name="imageHeight" defaultValue="400" className="ImageSize" onChange={this.handleImageSizeChange} /><br />
          <Trigger eventName="downloadSvg" width={this.state.imageWidth} height={this.state.imageHeight}>
            Download PNG
          </Trigger>
        </div>
      </div>
    );
  }
}

export default App;
