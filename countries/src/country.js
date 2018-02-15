import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const mockAPI = "https://5a84c79c3015220012486c3a.mockapi.io/"

class Country extends Component {
  constructor (props) {
    super(props)

    this.handleTracking = this.handleTracking.bind(this)
  }


  handleTracking(countries){
//    e.preventDefault()
   axios.post(`${mockAPI}countries`,countries)
   .then(({data}) => {
    this.props.getTrackedCountries()
    // console.log("handle country")
    // console.log(countries)
   }
) 

  }


  render () {
    const countries = this.props.country

    
    // console.log('hi from props')
   // console.log(this.props)
    return (
      <div className="card">
        <div>
          <img src={countries.flag} alt={countries.name} width="200" height="100" />
          <div>

            <p>{countries.name}</p>
            <p>{countries.capital}</p>
            <p>{countries.population}</p>
          </div>
          <div>
            <button disabled={this.props.tracked} onClick={() => this.handleTracking(countries)}>Track</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Country
