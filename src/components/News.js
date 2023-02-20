import React, {useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

const News = (props) => {
  // set states using 'useState' hooks
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  // useEffect hook is showing same functionality as componentDidMount
  useEffect(async () =>{
    props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(35);
    let parseData = await data.json();
    props.setProgress(70);
    // set state
    setArticles(parseData.articles);
    setTotalPage(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }, []);

  const handleNext = async() =>{
    props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(35);
    let parseData = await data.json();
    props.setProgress(70);
    // set state
    setArticles(parseData.articles);
    setPage(page+1);
    setLoading(false);
    props.setProgress(100);
  }

  const handlePrev = async() =>{
    props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page-1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(35);
    let parseData = await data.json();
    props.setProgress(70);
    // set state
    setArticles(parseData.articles);
    setPage(page-1);
    setLoading(false);
    props.setProgress(100);
  }

    return (
      <div className="container my-3">
        <h3 align="center" className="my-3">
          Top Headlines
        </h3>
        {/* Show spinner when loading is true */}
        {loading && <Spinner/>}

        {/* iterate for every elements of an array object articles */}
        <div className="row">
        {articles.map((ele) => {
          return (!loading && <div className="col-md-4" key={ele.url}>
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
          <button type="button" disabled={page<=1} className="btn btn-primary" onClick={handlePrev}>&#8592;Prev</button>
          <div><strong>Page {page}</strong></div>
          <button type="button" disabled={page>=Math.ceil(totalPage/props.pageSize)} className="btn btn-primary" onClick={handleNext}>Next&#8594;</button>
        </div>
      </div>
    );
  }

// set default props
News.defaultProps ={
  country: 'in',
  pageSize: 6,
  category: "science"
}

// set proptypes
News.propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;
