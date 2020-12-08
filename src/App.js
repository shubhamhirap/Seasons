import React, { Component } from "react";
import "./App.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, errMessage: "", loading: true };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          loading: false,
        });
      },
      (err) => {
        this.setState({
          errMessage: err.message,
          loading: false,
        });
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner message="Please accept location request!" />
        ) : this.state.errMessage ? (
          <h1>Err - {this.state.errMessage}</h1>
        ) : (
          <SeasonDisplay lat={this.state.lat} />
        )}
      </div>
    );
  }
}

export default App;
