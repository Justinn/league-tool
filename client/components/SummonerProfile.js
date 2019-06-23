import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummonerProfile extends Component {
  render() {
    //const { selectedSummoner } = this.props;
    return <div>hi</div>;
  }
}

const mapStateToProps = (state) => ({
  summoner: state.selectedSummoner,
});

export default connect(
  mapStateToProps,
  null
)(SummonerProfile);
