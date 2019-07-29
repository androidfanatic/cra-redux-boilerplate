import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import timeAction from '../../actionCreators/time';

class ExampleComponent extends React.Component {
  render() {
    return (
      <button
        className="exampleComponent"
        onClick={this.props.setCurrentTime}
      >
        { this.props.currentTime }
      </button>
    );
  }
}

const mapStateToProps = state => ({
  ...state.time,
});

const mapDispatchToProps = dispatch => ({
  setCurrentTime: () => dispatch(
    timeAction.currentTime(
      new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    )
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);