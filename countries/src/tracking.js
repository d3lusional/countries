import React, { Component } from 'react'
import axios from 'axios'
import Country from './country'
import './ui-toolkit/css/nm-cx/main.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const mockAPI = "https://5a84c79c3015220012486c3a.mockapi.io/"

class Tracking extends Component {
  constructor (props) {
    super(props)

    this.state = {
        newTrackingCountries: [],
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount () {
    this.getTrackedCountries(this.props.match.params.blocks)
  }


  getTrackedCountries () {
    axios.get(`${mockAPI}countries`).then(({ data }) => {
      this.setState({ newTrackingCountries: data })
    //   console.log(data)
    })
  }


  handleDelete(countries ){
//    e.preventDefault()

   axios.delete(`${mockAPI}countries/${countries.id}`,countries)
   .then(({data}) => {
    this.getTrackedCountries()
    // console.log("handle country")
    // console.log(countries)
   }
) 

  }


  render () {

   console.log(this.state.newTrackingCountries)
    return (
        <div>
        <div className='bg-off-white padding-medium'>
          <h1>TRACKING</h1>
    
          {

            this.state.newTrackingCountries.map(country => (

                <div className="card">
                <div>
                  <img src={country.flag} alt={country.name} width="200" height="100" />
                  <div>
        
                    <p>{country.name}</p>
                    <p>{country.capital}</p>
                    <p>{country.population}</p>
                  </div>
                  <div>
                    <button value={country.numericCode} onClick={(e) => this.handleDelete(country)}>Tracked</button>
                  </div>
                </div>
              </div>





            // <Country
            //   trackedCountry={this.getTrackedCountries}
            //   getTrackedCountries={this.getTrackedCountries}
            //   key={country.numericCode}
            // //   tracked={this.countryExist(country, this.state.trackedCountries)}
            // //   getCountries={this.getCountries.bind(this)}
            //   country={country}
            // />
          ))
          // :
          // this.state.trackedCountries.map(trackedCountry => (
          //   <Country
          //     key={trackedCountry.numericCode}
          //     getCountries={this.getCountries.bind(this)}
          //     country={trackedCountry}
          //   />
          // ))
          } 
        </div>
        <div />
      </div>
    )
  }
}

export default Tracking