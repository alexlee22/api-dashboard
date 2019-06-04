import React, { Component } from "react";
import { is_ampm, format_time, formatDateFull } from '../utils';

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

  formatAMPM = (date) => {
    return(
      <>
        <div style={is_ampm(date) ? { } : { opacity: 0.25 } }>AM</div>
        <div style={is_ampm(date) ? { opacity: 0.25 } : { } }>PM</div>
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
                  {format_time(theDate)}
                </div>
                <div id="moment-ampm">
                  { this.formatAMPM(theDate)}
                </div>
              </div>
            </div>
            <div id="moment-date">{formatDateFull(theDate)}</div>
          </>
        }  
			</div>
		);

	};

};

export default Moment



