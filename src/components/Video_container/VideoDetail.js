import React from "react";
import { connect } from "react-redux";

class VideoDetail extends React.Component {
  render() {
    if (this.props.activeVideo === null) {
      return <div>Loading...</div>;
    }

    const YTUrl = `https:www.youtube.com/embed/${this.props.activeVideo.id.videoId}`;
    return (
      <div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={YTUrl}
            title={this.props.activeVideo.snippet.title}
          ></iframe>
        </div>
        <br />
        <div className="details">
          <div>{this.props.activeVideo.snippet.title}</div>
          <div>{this.props.activeVideo.snippet.description}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.ActiveVideoReducer);
  return {
    activeVideo: state.ActiveVideoReducer,
  };
}

export default connect(mapStateToProps)(VideoDetail);
