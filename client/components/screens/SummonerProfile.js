import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSummonerByName } from '../../store/reducers/';

class SummonerProfile extends Component {
  componentDidMount() {
    const summonerName = this.props.match.params.name;
    this.props.getSummonerByName(summonerName);
  }

  render() {
    const { summoner } = this.props;
    if (summoner) {
      console.log(summoner)
    }
    return <div>{summoner ? summoner.name : 'Loading..'}</div>;
  }
}

const mapStateToProps = state => ({
  summoner: state.selectedSummoner,
});

const mapDispatchToProps = dispatch => ({
  getSummonerByName: name => dispatch(getSummonerByName(name)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SummonerProfile)
);
