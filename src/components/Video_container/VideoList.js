import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import { selectVideo } from "../../actions/videos";

class VideoList extends React.Component {

  componentDidMount() {
    if(this.props.videos.length !== 0) {
      this.props.dispatch(selectVideo(this.props.videos[0]))
    }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //
  // }

  render() {
    const videos = this.props.videos;
    console.log(videos);
    const list = <ListGroup>
      {
        videos && videos.map((video) => {
          return <ListGroupItem key={video.etag} onClick={() => this.props.dispatch(selectVideo(video))}>
            <Media>
              <Media left>
                <Media src={video.snippet.thumbnails.default.url} alt="youtube" />
              </Media>
              <Media body>
                {video.snippet.title}
              </Media>
            </Media>
          </ListGroupItem>
        })
      }
    </ListGroup>

    return list;
  }
}

function mapStateToProps(state) {
  return {
    videos: state.VideoReducer
  }
}

export default connect(mapStateToProps)(VideoList);