import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    lat: null,
    errMsg: '',
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message }),
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errMsg)
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    if (!this.state.lat && this.state.errMsg) return <div>Error: {this.state.errMsg}</div>;
    return <Spinner message='Please accept location request' />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
