import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { fetchVideos, fetchOneVideo } from "../../actions/videos";
import {connect} from "react-redux";

class Video extends Component{
  componentDidMount() {
    this.props.dispatch(fetchVideos(''));
    this.props.dispatch(fetchOneVideo(''));
  }
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-8">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <VideoDetail />
        </div>
        <div className="col-md-4">
          <VideoList />
        </div>
      </div>
    </div>
  }
}

function mapStateToProps(data) {
  return {
    data: data
  };
}

export default connect(mapStateToProps)(Video);
