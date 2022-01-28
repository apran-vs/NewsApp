import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ec9b8633b1634e469b4652cb03570cd2";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles
    })
    console.log(this.articles)
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsAvs - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  imageUrl={element.urlToImage?element.urlToImage:"https://images.indianexpress.com/2022/01/horoscope_2-1200-1-1.jpeg"}
                  newsUrl={element.url?element.url:""}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
