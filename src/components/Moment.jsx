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

  formatAMPM = (d) => {
    return(
      <>
        <div style={is_am(d) ? { } : { opacity: 0.25 } }>AM</div>
        <div style={is_am(d) ? { opacity: 0.25 } : { } }>PM</div>
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

export const WEEKDAY_NAMES = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
export const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const format_time = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'P' : 'A';
  //var ampm = hours >= 12 ? 'PM' : 'AM';
  //var formatDate = (date.getDate()) + "/" + ((date.getMonth() + 1)< 10 ? '0'+(date.getMonth() + 1): (date.getMonth() + 1)) + "/" + (date.getFullYear())
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  hours = hours < 10 ? '0'+hours : hours;
  //var strTime = formatDate + "   " + hours + ":" + minutes + ampm;
  
  var strTime = hours + ":" + minutes;
  return strTime;
}

export const is_am = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (hours >= 12){
    return false
  } else {
    return true
  }
}

export const formatDateFull = (time) => {

  function formatD(d) {
    var month = MONTH_NAMES[d.getMonth()],
        day = '' + d.getDate(),
        dayWeek = WEEKDAY_NAMES[d.getDay()]

    if (month.length < 2) month = '0' + month;

    //return (dayWeek + ", " + day + nth(d) + " of " + month);
    return (day + nth(d) + " of " + month);
  }

  function nth(d) {
    if (d > 3 && d < 21) return 'th'; 
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  var date = new Date(Date.parse(time))
  return(formatD(date))
}