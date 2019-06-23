import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      summonerName: '',
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSearch = () => {
    this.props.history.push(`/summoner/${this.state.summonerName}`);
  };

  render() {
    return (
      <div id="searchbar">
        <ul>
          <li className="search">
            <input
              name="summonerName"
              onChange={this.handleChange}
              placeholder="Summoner Name"
              type="text"
            />
          </li>
          <li>
            <input
              type="submit"
              value="Search Summoner"
              onClick={this.handleSearch}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Searchbar);
