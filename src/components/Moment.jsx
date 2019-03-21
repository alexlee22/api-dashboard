import React, { Component } from "react";
import { render } from "react-dom";

//import { IMAGES } from 'const'

class Moment extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      theDate: null
    }
  };

  componentDidMount() {
    var intervalCheckTime = setInterval(this.updateTime, 1000);
    this.setState({date: intervalCheckTime});
  };

  updateTime = () => {
    let theDate = new Date();
    this.setState({ theDate: theDate });
  };

	render() {
    const { theDate } = this.state;
    console.log(theDate);
		return (
			<div id="moment-container" >
				
			</div>
		);

	};

};

export default Moment
