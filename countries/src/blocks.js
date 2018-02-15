import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Country from './country'
import './ui-toolkit/css/nm-cx/main.css'

const countriesURL = 'https://restcountries.eu/rest/v2/regionalbloc/'
// const { params, blocks } = this.props.match

const mockAPI = 'https://5a84c79c3015220012486c3a.mockapi.io/'

class Blocks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      countries: [],
      trackedCountries: [],
      sortBy: 'home',
    }
    this.getTrackedCountries = this.getTrackedCountries.bind(this)
  }
  componentDidMount () {
    this.getCountries(this.props.match.params.blocks)
  }

  getCountries (blocks) {
    // const { params, blocks } = this.props
    // console.log(blocks)
    // this.setState({ countries: [] })
    axios.get(`${countriesURL}${blocks}`).then(({ data }) => {
      this.getTrackedCountries()
      this.setState({ countries: data })
      // console.log("get countries")
      // console.log(data)
    })
  }

  getTrackedCountries () {
    axios.get(`${mockAPI}countries`).then(({ data }) => {
      this.setState({ trackedCountries: data })
      console.log(data)
    })
  }

  

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.blocks !== this.props.match.params.blocks) {
      this.getCountries(nextProps.match.params.blocks)
    }
  }

  countryExist (search, arr) {
    // console.log('this is arr')
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      if (search.numericCode === arr[i].numericCode) {
        return true
      }
    }
    return false
  }

  handleView (e){
    this.setState({ sortBy : e.target.value})
    console.log(this.state.sortBy)
  }
  render () {
    // console.log(this.state.countries)
 
    return (
      <div>
        <div className='bg-off-white padding-medium'>
          <h1>{this.props.match.params.blocks}</h1>
        


          {
            //  (this.state.sortBy !== "tracking") ?
            this.state.countries.map(country => (
            <Country
              trackedCountry={this.getTrackedCountries}
              getTrackedCountries={this.getTrackedCountries}
              key={country.numericCode}
              tracked={this.countryExist(country, this.state.trackedCountries)}
              getCountries={this.getCountries.bind(this)}
              country={country}
            />
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

export default Blocks
