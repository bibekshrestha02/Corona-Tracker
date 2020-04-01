import React, { Component } from "react";
import Heading from "./../component/assets/subtitle";
import Axios from "axios";
export default class ranking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ranking: [],
      loading: false,
    };
  }
  numberSperator(number) {
    const num_parts = number.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
  componentDidMount() {
    Axios.get("https://covid19.mathdro.id/api/confirmed").then(res => {
      const data = res.data;

      this.setState({ ranking: data, loading: true });
    });
  }
  render() {
    if (this.state.loading) {
      return (
        <div className='ranking '>
          <Heading name='Risk Ranking (Sorted by # of confirmed)' />
          <hr />
          <div className='table-wrapper-scroll-y my-custom-scrollbar'>
            <table className='table table-bordered  mb-0'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Country Name</th>
                  <th scope='col'>Conformed</th>
                  <th scope='col'>Recoverd</th>
                  <th scope='col'>Death</th>
                </tr>
              </thead>

              <tbody>
                {this.state.ranking.map((e, i) => {
                  return (
                    <tr key={i + 1}>
                      <th scope='row'>{i + 1}</th>
                      <td>{e.combinedKey}</td>
                      <td>{this.numberSperator(e.confirmed)}</td>
                      <td>{this.numberSperator(e.recovered)}</td>
                      <td>{this.numberSperator(e.deaths)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div className='ranking '>
          <Heading name='Risk Ranking (Sorted by # of confirmed)' />
          <hr />
          <div className='table-wrapper-scroll-y my-custom-scrollbar'>
            <table className='table table-bordered  mb-0'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Country Name</th>
                  <th scope='col'>Conformed</th>
                  <th scope='col'>Recoverd</th>
                  <th scope='col'>Death</th>
                </tr>
              </thead>
            </table>
            <div class='text-center mt-5'>
              <div class='spinner-border' role='status'>
                <span class='sr-only'>Loading...</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
