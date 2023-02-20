import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  // set default props
  static defaultProps ={
    country: 'in',
    pageSize: 6,
    category: "science"
  }

  // set proptypes
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

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
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(35);
    let parseData = await data.json();
    this.props.setProgress(70);
    // set state
    this.setState({articles: parseData.articles, totalPage: parseData.totalResults, loading: false});
    this.props.setProgress(100);
  }

  handleNext = async() =>{
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(35);
    let parseData = await data.json();
    this.props.setProgress(70);
    // set state
    this.setState({
      page: this.state.page+1,
      articles: parseData.articles,
      loading: false
    });
    this.props.setProgress(100);
  }

  handlePrev = async() =>{
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(35);
    let parseData = await data.json();
    this.props.setProgress(70);
    // set state
    this.setState({
      page: this.state.page-1,
      articles: parseData.articles,
      loading: false
    });
    this.props.setProgress(100);
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
          <div><strong>Page {this.state.page}</strong></div>
          <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalPage/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNext}>Next&#8594;</button>
        </div>
      </div>
    );
  }
}

export default News;
