import React, { Component } from 'react';
import mapStyles from '../utils/mapStyle.js'

import '../css/App.css'





class App extends Component {


  constructor(props) {
	super(props)
	  this.center ={lat: 41.9484384, lng:-87.6575214}
	  this.state = {
		mapIsReady: false,
		wrigleyMap: {},
	  }
  }


  componentDidMount() {

  	// have to catch when google not available

	const ApiKey = 'AIzaSyDnImGieQyxOm3Ywe48ygJGQXMHm2JkpCY'
	const script = document.createElement('script')
	script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}&libraries=places`
	script.async = true
	script.defer = true
	script.addEventListener('load', () => {
	  this.setState({mapIsReady: true})
	})
	document.body.appendChild(script)
  }


	componentDidUpdate() {
		if(this.state.mapIsReady) {
			let map = new window.google.maps.Map(document.getElementById('map'), {
				center: {lat: 41.9484384, lng:-87.6575214},
				zoom: 17,
				styles: mapStyles.mapStyles,
				mapTypeControl: false
			})
		}
	}


	render() {
		return (
			<div>
				<header className='grid header'>
					Header
				</header>

				<div className='grid'>
					<div id='placesPanel' className='col-1 placesPanel'>
						Search & Display Panel
					</div>
					<div id='map' className='col-3 mapPanel' />
				</div>


				<footer  className='grid footer'>
					Footer
				</footer>
			</div>
		) //return
	} //render
}

export default App;
