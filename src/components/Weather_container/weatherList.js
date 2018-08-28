import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from './Chart';
import GoogleMap from './GoogleMap';

class WeatherList extends React.Component {

  renderCityWeather = (cityData) => {
    const temps = _.map(cityData.list.map(weather =>  weather.main.temp ), (temp) => {
      return (temp - 273.15) * 1.8 + 32;
    });
    const pressures = cityData.list && cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list && cityData.list.map(weather => weather.main.humidity);

    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={JSON.stringify(cityData.city.coord)}>
        <td>
          <GoogleMap />
        </td>
        <td>
          <Chart data={temps} color='blue' unit='F'/>
        </td>
        <td>
          <Chart data={pressures} color='green' unit='hPa'/>
        </td>
        <td>
          <Chart data={humidity} color='grey' unit='%'/>
        </td>
      </tr>
    )
  }

  render() {
    const weathers = this.props.weather;
    return (
      <Table>
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (F)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {
          weathers && weathers.map((weather) => {
            return this.renderCityWeather(weather)
          })
        }
        </tbody>
      </Table>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.WeatherReducer
  }
}

export default connect(mapStateToProps)(WeatherList);