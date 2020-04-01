// import React, { useState } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navToogle: {
        navbarState: false,
        navbarClass: "collapse navbar-collapse text-center",
      },
    };
  }
  // for menu toogler
  myToogler = () => {
    if (this.state.navToogle.navbarState) {
      this.setState({
        navToogle: {
          navbarState: false,
        },
      });
    } else {
      this.setState({
        navToogle: {
          navbarState: true,
        },
      });
    }
  };
  close = () => {
    this.setState({
      navToogle: {
        navbarState: true,
      },
    });
  };

  render() {
    const Normalstyle = {
      height: "100%",
      width: 0,
      position: "fixed",
      zIndex: 1,

      top: 0,
      left: 0,
      backgroundColor: "#111",
      overflowX: "hidden",
      transition: "0.5s",
      paddingTop: "60px",
    };
    const AfterStyle = {
      height: "100%",
      width: "40%",
      position: "fixed",
      textAlign: "left",
      zIndex: 1,
      top: 0,
      left: 0,
      backgroundColor: "#111",
      overflowX: "hidden",
      transition: "0.5s",
      paddingTop: "60px",
    };
    return (
      <nav
        className={this.state.navTop ? "Nav  navbar position " : "Nav  navbar "}
        id=' navbar'>
        <span className='navbar-brand '>
          <b>CORONA TRACKER</b>
        </span>
        <button
          className='navbar-toggler b text-left '
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'
          onClick={this.myToogler}>
          <span
            style={{
              color: "white",
            }}>
            &#9776;
          </span>
        </button>

        <div
          className={this.state.navToogle.navbarClass}
          style={this.state.navToogle.navbarState ? Normalstyle : AfterStyle}>
          <span className='closebtn' onClick={this.close}>
            &times;
          </span>
          <span className='title'>Statistics</span>
          <br />
          <br />

          <Link
            className='link'
            to='/'
            onClick={() =>
              this.setState({
                navToogle: {
                  navbarState: true,
                },
              })
            }>
            Dashboard
          </Link>
          <br />
          <Link
            className='link'
            to='/ranking'
            onClick={() =>
              this.setState({
                navToogle: {
                  navbarState: true,
                },
              })
            }>
            Risk Ranking
          </Link>
        </div>
      </nav>
    );
  }
}
