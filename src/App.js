import React from 'react';
import './App.css';
import Row from "./Row";
import requests from './requests'
import Banner from "./Banner"
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        isLargeRow
        title="Trending"
        fetchUrl={requests.fetchTrending} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Movies List" fetchUrl={requests.fetchMovies} />   */}
    </div>
  );
}

export default App;
