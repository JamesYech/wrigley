
import React, { Component } from 'react';
// import mapStyles from '../utils/mapStyle.js'


class Map extends Component {


	constructor(props) {
	    super(props)

		this.onScriptLoad = this.onScriptLoad.bind(this)
	}


	onScriptLoad() {
		const map = new window.google.maps.Map(
				document.getElementById(this.props.id),
				this.props.options
			)
		// this.props.onMapLoad(map)
	}




	componentDidMount() {
		if (!window.google) {

			const ApiKey = 'AIzaSyDnImGieQyxOm3Ywe48ygJGQXMHm2JkpCY'
			const ApiLibraries =['places']
			const script = document.createElement('script')
			script.type = 'text/javascript'
			script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}&libraries=${ApiLibraries}`
			script.async = true
			script.defer = true
			document.body.appendChild(script)

			script.onload = () => {
				this.onScriptLoad()
			}
			script.onerror = () => {
				console.log('cannot load script')
			}

		} else {
			this.onScriptLoad()
		}
	}


	render() {
		return (
			<div id={this.props.id} className='col-3 mapPanel' />
		)
	}


}

export default Map