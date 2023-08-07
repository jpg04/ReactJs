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

  async componentDidMount() {
    let url =  "https://newsapi.org/v2/top-headlines?country=in&apiKey=b7717c0dd2d44afd996f36ca07d98094";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
  }

  /* async componentDidMount(){
    try{     

        const url =  "https://newsapi.org/v2/top-headlines?country=in&apiKey=b7717c0dd2d44afd996f36ca07d98094";
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: parsedData.articles
        });
    }
    catch(e) {
        console.log("something is not working");
    } 
}*/

  render() {    
    console.log("render");
    return (
      <div className="container my-3">
        <h2>News Geeks - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem className="text-truncate"
                  title={element.title ? element.title: ""}
                  description={element.description ? element.description: ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
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
