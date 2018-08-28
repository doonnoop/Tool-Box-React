import React from 'react';
import { Form, FormGroup, Button, Col, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons/index";
import { fetchWeather } from "../../actions/weather";
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  render() {

    const searchVideos = (event) => {
      event.preventDefault();
      this.props.dispatch(fetchWeather(this.state.keyword));
    };

    return (
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
            <Button color="info" onClick={searchVideos}>Search</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

function mapStateToProps(data) {
  return {
    data: data.WeatherReducer
  }
}

export default connect(mapStateToProps)(SearchBar);