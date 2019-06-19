import React, { Component } from "react";
import { isAMPM, formatTime, formatDateFullText } from '../utils';

class Moment extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      theDate: null
    }
  };

  componentDidMount() {
    var intervalCheckTime = setInterval(this.updateTime, 1000);
    this.setState({ date: intervalCheckTime });
  };

  updateTime = () => {
    let theDate = new Date();
    this.setState({ theDate: theDate });
  };

  //Styles opacity based on the time
  formatAMPM = (date) => {
    return(
      <>
        <div style={isAMPM(date) ? { } : { opacity: 0.25 } }>AM</div>
        <div style={isAMPM(date) ? { opacity: 0.25 } : { } }>PM</div>
      </>
    )
  }

	render() {
    const { theDate } = this.state;
    
		return (
			<div id="moment-container" >
        {theDate &&
          <>
            <div>
              <div id="moment-clock">
                <div id="moment-time">
                  {formatTime(theDate)}
                </div>
                <div id="moment-ampm">
                  { this.formatAMPM(theDate)}
                </div>
              </div>
            </div>
            <div id="moment-date">{formatDateFullText(theDate)}</div>
          </>
        }  
			</div>
		);

	};

};

export default Moment