import React from 'react';


function GetMarkers(map) {


 //  constructor(props) {
	// super(props)
	// //state = markers array and ...
 //  }

	// componentDidMount() {

	// 	let request = {
	// 		location: this.center,
	// 		radius: '500',
	// 		type: 'bar'
	// 	}

	// 	let service = new window.google.maps.places.PlacesService(this.map)
	// 	service.nearbySearch(request, placesReturned)

	// 	function placesReturned(results, status) {
	// 		if (status === window.google.maps.places.PlacesServiceStatus.OK) {
	// 			let returnedPlaces = []
	// 			for (let i=0; i<results.length; i++) {
	// 				returnedPlaces.push(results[i])
	// 			}
	// 			console.log(returnedPlaces)
	// 		}else {
	// 				console.log(status)
	// 			}
	// 	}

	// }
const center = {lat: 41.9484384, lng:-87.6575214}
	const aMarker = (map) => {
			let marker = new window.google.maps.Marker({
  			position: {lat: 41.9484384, lng:-87.6575214},
  			map: map,
  			title: 'A freakin marker'
  		})
	}




  	// const { map} = this.props
  	// console.log(map)

  	return(
  		<div>
  		{aMarker(map)}
  		</div>

	)


}
  export default GetMarkers


