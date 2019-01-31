import React, { Component } from 'react';
import mapStyles from '../utils/mapStyle.js'
// import GetMarkers from './markers.js'
import '../css/App.css'
import Map from './Map.js'

const center = {lat: 41.9484384, lng:-87.6575214}


class App extends Component {



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
					<Map
						id="map"
						options ={{
							center: center,
							zoom: 15,
							styles: mapStyles.mapStyles,
							mapTypeControl: false
						}}
					/>
				</div>


				<footer  className='grid footer'>
					Footer
				</footer>
			</div>
		) //return
	} //render
}

export default App;
