import React, { Component } from "react";
import { render } from "react-dom";

import { NEWS_API_LINK, NEWS_API_KEY } from '../const'


class News extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        newsData: [],
        index: 0
      }
    };
  
    componentDidMount = () => {
        this.getData()
        
    };

    getData = () => {
        fetch(NEWS_API_LINK + NEWS_API_KEY)
        .then(response => response.json())
        .then(data => {
            var convData = data.articles.map((d) => {
                d.publishedAt = new Date(d.publishedAt)
                return d;
            })
            this.setState({newsData: convData, index: 0})
        });
    }

    scrollData = () => {
        var data = this.state.newsData
        if (data.length > 0) {
            var firstIndex = data.shift();
            data.push(firstIndex)
        }
        this.setState({newsData: data})
    }

    formatData = (data) => {
        return data.map((d, idx) => {
            return(
                <div key={idx} className="news-card" style={{marginBottom:'10px'}}>
                    <div className="heading">
                        <span className="news-title">{ d.title }</span>
                        <span className="news-time">{ dateTime(d.publishedAt) }</span>
                        </div>
                    <div className="description">{d.description}</div>
                </div>
            )
        })
    }

    render() {
        const { newsData, index } = this.state;
        console.log(newsData);
        console.log(index);
		return (
            <section id="news">
                {this.formatData(newsData)}
            </section>
		);
    };
};

export default News

/*
{
    author: "https://www.abc.net.au/news/michael-vincent/4269358"
    content: "Updated 
    May 21, 2019 19:24:26
    Someone had messed up. Marianna Kinsey's work material was normally shipped ahead to interstate work conferences. But not this time.
    Key points: 
    The NSW workers compensation scheme does not allow people to take a lump sum p… [+5782 chars]"
    description: "After lifting two bulky suitcases at work, Marianna Kinsey ended up with a catastrophically injured back and can no longer work."
    publishedAt: "2019-05-21T09:24:26Z"
    source: {id: "abc-news-au", name: "ABC News (AU)"}
    title: "This severely injured woman says she's trapped in her own workers compensation"
    url: "http://www.abc.net.au/news/2019-05-21/severely-injured-woman-workers-compensation-difficulties/11135264"
    urlToImage: "https://www.abc.net.au/news/image/
}
*/


export const dateTime = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    //var ampm = hours >= 12 ? 'P' : 'A';
    var ampm = hours >= 12 ? 'PM' : 'AM';
    var formatDate = (date.getDate()) + "/" + ((date.getMonth() + 1)< 10 ? '0'+(date.getMonth() + 1): (date.getMonth() + 1)) + "/" + (date.getFullYear())
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    hours = hours < 10 ? '0'+hours : hours;
    //var strTime = formatDate + "   " + hours + ":" + minutes + ampm;
    
    var strTime = hours + ":" + minutes + " " + ampm; 
    return strTime;
  }





/*
getWeatherData = () => {
    fetch(WEATHER_SOURCE)
    .then(response => response.json())
    .then(data => {
        this.setState({
          data: data, 
          forecast: data.query.results.channel.item.forecast, 
          current: data.query.results.channel.item.condition,
        })
    } )
  }
*/


/*
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
    */