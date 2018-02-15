import React, { Component } from 'react'
// import logo from './logo.svg';
import Blocks from './blocks'
import Country from './country'
import Tracking from './tracking'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import './App.css'
import './ui-toolkit/css/nm-cx/main.css'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Router>

        <div className='App'>
          <div>
            <header className='columns medium-3 padding-top-medium'>
              <ul className='tabs vertical'>
                <li><NavLink to='Tracking'>Tracking</NavLink></li>
                <li><NavLink to='EU'>EU</NavLink></li>
                <li><NavLink to='EFTA'>EFTA</NavLink></li>
                <li><NavLink to='CARICOM'>CARICOM</NavLink></li>
                <li><NavLink to='PA'>PA</NavLink></li>
                <li><NavLink to='AU'>AU</NavLink></li>
                <li><NavLink to='USAN'>USAN</NavLink></li>
                <li><NavLink to='EEU'>EEU</NavLink></li>
                <li><NavLink to='AL'>AL</NavLink></li>
                <li><NavLink to='ASEAN'>ASEAN</NavLink></li>
                <li><NavLink to='CAIS'>CAIS</NavLink></li>
                <li><NavLink to='CEFTA'>CEFTA</NavLink></li>
                <li><NavLink to='NAFTA'>NAFTA</NavLink></li>
                <li><NavLink to='SAARC'>SAARC</NavLink></li>
              </ul>
              <main>
                {/* <Route path='/' component={Home}/>
        <Route path='/EU' component={EU}/>
        <Route path='/CARICOM' component={CARICOM}/>
        <Route path='/PA' component={PA}/>
        <Route path='/AU' component={AU}/>
        <Route path='/USAN' component={USAN}/>
        <Route path='/EEU' component={EEU}/>
        <Route path='/AL' component={AL}/>
        <Route path='/ASEAN' component={ASEAN}/>
        <Route path='/CAIS' component={CAIS}/>
        <Route path='/CEFTA' component={CEFTA}/>
        <Route path='/NAFTA' component={NAFTA}/>
        <Route path='/SAARC' component={SAARC}/>
      */}
              </main>
            </header>
            {/* <Countries /> */}
            <div className='columns small-9 padding-vert-medium'>
            <Switch>
              <Route exact path='/Tracking' component={Tracking}/>  
              <Route path={`/:blocks`} component={Blocks} />

            </Switch>
            </div>
          </div>

        </div>
      </Router>
    )
  }
}

const Block = ({ match }) => <h1>{match.params.blocks}</h1>

export default App
