import React, { Component } from "react";
//import { CSSTransition, TransitionGroup} from 'react-transition-group'
import { NEWS_API_LINK, NEWS_API_KEY } from '../const'
import CardNews from './CardNews'

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
        var intervalScrollRotate = setInterval(this.scrollData, 60 * 1000);
        var intervalGetNewsData = setInterval(this.getData, 30 * 60 * 1000);
        this.setState({intervalScrollRotate, intervalGetNewsData});
    };

    getData = () => {
        fetch(NEWS_API_LINK + NEWS_API_KEY)
        .then(response => response.json())
        .then(data => {
            //Convert datetime string to Date object
            var convData = data.articles.map((d) => {
                d.publishedAt = new Date(d.publishedAt)
                return d;
            })
            this.setState({newsData: convData, index: 0})
        });
    }

    //Shift first index news item to end
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
                <CardNews key={idx} data={d}/>
            )
        })
    }

    render() {
        const { newsData, index } = this.state;
        var itemsList = [];
        
        //Limit to 5
        if (newsData.length > 0){
            itemsList = this.state.newsData.slice(0, 5).map((data, idx) => {
                return (
                    <CardNews key={idx} idx={idx} data={data}/>
                )
            });
        }
        
		return (
            <section id="news">
                {itemsList}
            </section>
		);
    };
};

export default News
