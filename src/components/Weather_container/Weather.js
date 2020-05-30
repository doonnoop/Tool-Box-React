import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";

class Weather extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <WeatherList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(data) {
  return {
    data: data,
  };
}

export default connect(mapStateToProps)(Weather);
