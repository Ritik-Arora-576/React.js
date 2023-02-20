import React from "react";

const NewsItem = (props) => {
    // way to fetch props in class component
    let {title, description, imgUrl, newsUrl} = props;
    return (
      <div className="ny-3">
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title?title.slice(0,40):""}....</h5>
            <p className="card-text">
              {description?description.slice(0,80):""}....
            </p>
            <a href={newsUrl} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
