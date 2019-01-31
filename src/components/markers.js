import React from 'react';


function GetMarkers(map) {

const center = {lat: 41.947229, lng:-87.6586307}

// let testString = "InfoWindow is Here"



let returnedPlaces = []

	function markerClick(map,marker) {
		let testString= '<h1>'+marker.title+'</h1>'+
					'<p>Stuf....</p>'
		console.log(testString)
		console.log(marker)
		console.log(map)
		let infowindow = new window.google.maps.InfoWindow({
	content: testString
})
		infowindow.open(map,marker)
	}

	const aMarker = (map) => {

		let request = {
			location: center,
			radius: '408',
			type: 'restaurant'
		}

		let service = new window.google.maps.places.PlacesService(map)
		service.nearbySearch(request, placesReturned)

		function placesReturned(results, status) {
			if (status === window.google.maps.places.PlacesServiceStatus.OK) {
				for (let i=0; i<results.length; i++) {
					returnedPlaces.push(results[i])
				}

				returnedPlaces.forEach((rp) => {

					let marker = new window.google.maps.Marker({
			  			position: rp.geometry.location,
			  			map: map,
			  			title: rp.name
			  		})
			  		marker.addListener('click', function() {
			  			markerClick(map,marker)
			  		})
				})



			} else	{
						console.log(status)
					}
		}


	}



  	return(
  		<div>
  		{aMarker(map)}
  		</div>

	)


}

export default GetMarkers


		// let marker = new window.google.maps.Marker({
  	// 		position: center,
  	// 		map: map,
  	// 		title: 'A freakin marker'
  	// 	})