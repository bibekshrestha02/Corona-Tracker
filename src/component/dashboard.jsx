import React, { Component } from "react";
import Subtitle from "./assets/subtitle";
import Cards from "./assets/cards";
import Axios from "axios";
export default class dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      global: {
        confirmed: {
          value: "loading...",
        },
        recovered: {
          value: "loading...",
        },
        deaths: {
          value: "loading...",
        },
      },
      lastUpdate: "loading",
      value: "Nepal",
      reginonal: [],
      reginonalData: {
        confirme: "",
        recovere: "-",
        death: "-",
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }
  numberSperator(number) {
    const num_parts = number.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
  date(date) {
    var str = date;
    var dates = str.split("T");
    return dates[0];
  }
  handleChange(e) {
    this.setState({ value: e.target.value });

    Axios.get(
      `https://covid19.mathdro.id/api/countries/${this.state.value}`
    ).then(res => {
      const data = res.data;
      const { confirmed, recovered, deaths } = data;

      this.setState({
        reginonalData: {
          confirme: confirmed.value,
          recovere: recovered.value,
          death: deaths.value,
        },
      });
    });
  }

  componentDidMount() {
    Axios.get("https://covid19.mathdro.id/api").then(res => {
      const { data } = res;
      const { confirmed, recovered, deaths, lastUpdate } = data;
      const conformed = {
        value: this.numberSperator(confirmed.value),
      };
      const recover = {
        value: this.numberSperator(recovered.value),
      };
      const death = {
        value: this.numberSperator(deaths.value),
      };
      const lastUpdates = this.date(lastUpdate);

      this.setState({
        global: { confirmed: conformed, recovered: recover, deaths: death },
        lastUpdate: lastUpdates,
      });
    });

    Axios.get("https://covid19.mathdro.id/api/countries").then(res => {
      const data = res.data.countries;
      this.setState({ reginonal: data });
    });
  }

  render() {
    return (
      <div className='dashboard '>
        {/* heading */}
        <div className='row container-fluid mt-3 '>
          <div className='  col-sm-12  col-lg-6'>
            <Subtitle name='World Wide' />
          </div>
          <div className='col-sm-12 col-lg-6 text-center'>
            <b>{`Report of ${this.state.lastUpdate} `}</b>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////// */}
        {/* Data */}
        <div className='row container-fluid p-4 '>
          <div className='col float-center'>
            <Cards
              color='bg-warning'
              title='Confirmed'
              number={this.state.global.confirmed.value}
            />
          </div>
          <div className='col'>
            <Cards
              color='bg-success'
              title='Recovered'
              number={this.state.global.recovered.value}
            />
          </div>
          <div className='col'>
            <Cards
              color='bg-info'
              title='Deaths'
              number={this.state.global.deaths.value}
            />
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* heading */}
        <div className='row container-fluid'>
          <div className='col-sm-12 col-lg-6'>
            <Subtitle name='Regional' />
          </div>
          {/* countries options */}
          <div className='text-center col-sm-12 col-lg-6  country  mb-4'>
            <label>Country & Regional</label>
            <br />
            <form>
              <select
                id='countries'
                value={this.state.value}
                onChange={this.handleChange}>
                {this.state.reginonal.map((e, i) => {
                  return (
                    <option key={i} value={e.iso2}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
              <br />
            </form>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////// */}
        {/* Data */}
        <div className='row container-fluid p-4 mt-4'>
          <div className='col float-center'>
            <Cards
              color='bg-warning'
              title='Confirmed'
              number={this.state.reginonalData.confirme}
            />
          </div>
          <div className='col'>
            <Cards
              color='bg-success'
              title='Recovered'
              number={this.state.reginonalData.recovere}
            />
          </div>
          <div className='col'>
            <Cards
              color='bg-info'
              title='Deaths'
              number={this.state.reginonalData.death}
            />
          </div>
        </div>
      </div>
    );
  }
}
