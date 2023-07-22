import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1pageSize=20";
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles })
    }

    render() {
               return (
            <div className="container my-5">
                <h2 className='my-5 text-center text-info '>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News