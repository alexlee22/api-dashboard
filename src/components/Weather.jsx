import React, { Component } from "react";
import { ICONS, WEATHER_API_LINK, WEATHER_API_KEY } from '../const'

class Weather extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        weatherData: null
      }
    };
  
    componentDidMount = () => {
        this.getData()
        var intervalWeatherData = setInterval(this.getData, 30 * 60 * 1000);
        this.setState({intervalWeatherData});
    };

    getData = () => {
        fetch(WEATHER_API_LINK + WEATHER_API_KEY )
        .then(response => response.json())
        .then(data => {
            this.setState({weatherData: data})
        });
    }

    render() {
        const { weatherData } = this.state;
        
		return (
            <section id="weather">
                { weatherData &&
                    <>
                        <div className="weather-box">
                            <div id="weather-temp">{Math.round(weatherData.main.temp)}°C</div>
                            <div id="weather-status">{weatherData.weather[0].main}</div>
                        </div>
                        <div className="weather-box sub-boxes">
                            <div id="weather-temp-min">MIN<br/>{Math.round(weatherData.main.temp_min)}°C</div>
                            <div id="weather-temp-max">MAX<br/>{Math.round(weatherData.main.temp_max)}°C</div>
                        </div>
                        <div className="weather-box sub-boxes">
                            <div id="weather-hum">HUM<br/>{weatherData.main.humidity}%</div>
                            <div id="weather-wind">
                                <img className="weather-wind-icon" style={{transform: `rotate(${weatherData.wind.deg}deg)`, filter: `drop-shadow( 1.25px 1.25px rgba(0, 0, 0, 0.75))`}} src={ICONS.ARROW}/>
                                <br/>
                                {weatherData.wind.speed}M/S
                            </div>
                        </div>
                    </>
                }
            </section>
		);
    };
};

export default Weather
