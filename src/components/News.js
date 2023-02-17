import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    // state has been set inside a constructor
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalPage: 0
    };
  }

  // Order of execution:
  // 1. Constructor
  // 2. Render
  // 3. componentDidMount
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b9a4897f43a34333ae1e6093691cb2a0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    // set state
    this.setState({articles: parseData.articles, totalPage: parseData.totalResults, loading: false});
  }

  handleNext = async() =>{
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b9a4897f43a34333ae1e6093691cb2a0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    // set state
    this.setState({
      page: this.state.page+1,
      articles: parseData.articles,
      loading: false
    });
  }

  handlePrev = async() =>{
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b9a4897f43a34333ae1e6093691cb2a0&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    // set state
    this.setState({
      page: this.state.page-1,
      articles: parseData.articles,
      loading: false
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h3 align="center" className="my-3">
          Top Headlines
        </h3>
        {/* Show spinner when loading is true */}
        {this.state.loading && <Spinner/>}

        {/* iterate for every elements of an array object articles */}
        <div className="row">
        {this.state.articles.map((ele) => {
          return (!this.state.loading && <div className="col-md-4" key={ele.url}>
              <NewsItem
                title={ele.title}
                description={ele.description}
                imgUrl={ele.urlToImage}
                newsUrl={ele.url}
              />
            </div>);
        })}
        </div>

        <div className="container d-flex justify-content-evenly my-4">
          <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrev}>&#8592;Prev</button>
          <div>Page {this.state.page}</div>
          <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalPage/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNext}>Next&#8594;</button>
        </div>
      </div>
    );
  }
}

export default News;
