import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchVideos, fetchOneVideo } from "../../actions/videos";

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  render() {
    const updateVideos = _.debounce(() => {
      this.props.dispatch(fetchVideos(this.state.keyword));
      this.props.dispatch(fetchOneVideo(this.state.keyword));
    }, 300);

    return <div>
      <Form>
        <FormGroup row>
          <Label for="search" sm={1}><FontAwesomeIcon icon={faSearch} /></Label>
          <Col sm={10}>
            <Input type="text" id="search" value={this.state.keyword}
                   onChange={(event) => {
                     this.setState({keyword: event.target.value})
                   }}
            />
          </Col>
          <Col sm={{ size: 1}}>
            <Button color="info" onClick={updateVideos}>Search</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  }
}

function mapStateToProps(data) {
  return {
    data: data
  };
}

export default connect(mapStateToProps)(SearchBar);