export const WEEKDAY_NAMES = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
export const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//19th of June
export const formatDateFullText = (time) => {

  function formatDate(d) {
    var month = MONTH_NAMES[d.getMonth()],
        day = '' + d.getDate(),
        dayWeek = WEEKDAY_NAMES[d.getDay()]

    if (month.length < 2) month = '0' + month;

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
  return(formatDate(date))
}

//HH/MM AM
export const formatDateTime = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  hours = hours < 10 ? '0' + hours : hours;
  var strTime = hours + ":" + minutes + " " + ampm; 
  return strTime;
}

//HH:MM
export const formatTime = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'P' : 'A';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  hours = hours < 10 ? '0' + hours : hours;
  var strTime = hours + ":" + minutes;
  return strTime;
}

//True/False
export const isAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (hours >= 12){
    return false
  } else {
    return true
  }
}