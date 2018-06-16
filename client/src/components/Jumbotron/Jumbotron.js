import React from "react";

const Jumbotron = ({ children }) => (
  <div className="jumbotron">
          <h1 className="display-4">NYTimes React Mongo Scraper</h1>
          <p className="lead">An application for <i>scraping and commenting</i> on your favorite news stories. </p>
          <hr className="my-4"></hr>
          <p>Click scrape to see what's new then click on an article to write a note!</p>
          <a className="btn btn-success" id="scrape" role="button">SCRAPE</a>
        </div>
);

export default Jumbotron;
