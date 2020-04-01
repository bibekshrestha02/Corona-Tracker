import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { act } from "react-dom/test-utils";
export default class navside extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Dashboard: true,
      Ranking: false,
    };
  }

  render() {
    return (
      <>
        <span>Statistics</span>
        <ul>
          <li>
            <Link
              to='/'
              className={this.state.Dashboard ? "active" : ""}
              onClick={() => this.setState({ Dashboard: true, Ranking: false })}
              style={{ textDecoration: "none" }}>
              Dashboard
            </Link>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <Link
              to='/ranking'
              className={this.state.Ranking ? "active" : ""}
              style={{ textDecoration: "none" }}
              onClick={() =>
                this.setState({ Dashboard: false, Ranking: true })
              }>
              Risk Ranking
            </Link>
          </li>
          <li>
            <hr />
          </li>
        </ul>
      </>
    );
  }
}
