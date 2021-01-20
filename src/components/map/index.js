import React, { useState } from 'react'
import {SP_POLYNE , SELLER_POLO} from './polynes'
import { useClienteData } from '../../store/Clients'
import GoogleMapReact from 'google-map-react'

import Pin from '../pin'
import './styles.css'

//RETIRAR COLOCAR EM UM ENV
const KEY = 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek'
const GET_ADDRES_API = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='

function Map() {
	const { localization, clientsData, tendersData, screen } = useClienteData();
	const [markers, setMarkers] = useState([])
	const [newAddres, setNewAdrres] = useState(false)

	const handleApiLoaded = (map, maps) => {

		const SELLER_POLE = new maps.Polygon({
			paths: [SP_POLYNE, SELLER_POLO],
			strokeColor: "#C5E8C5",
			strokeOpacity: 1,
			strokeWeight: 10,
			fillColor: "#757575",
			fillOpacity: 0.50
		});
		SELLER_POLE.setMap(map);
	}

	const getAddres = async (lat, lng) => {
		const response = await fetch(`${GET_ADDRES_API}${lat},${lng}&key=${KEY}`)
		const data = await response.json()
		const addresData = await data.results[0].formatted_address
		const positionData = await data.results[0].geometry.location
		const addresFormated = addresData.substr(0, addresData.indexOf(', São Paulo'));
		const info =  {
			address: addresFormated,
			position: positionData
		}
		setNewAdrres(info)
		return info
	}

	const handleClickMap = async event => {
		const lt = event.lat;
		const lg = event.lng;
		console.log('onClick map: ', lt, lg);
		getAddres(lt, lg)
		newAddres &&
		setMarkers([...markers, { lat: lt, lng: lg, location:newAddres}])
		console.log(markers)
		
	};


	return (
		<div style={{ height: '91vh', width: '100%', marginTop: -50, marginBottom: -15 }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: KEY }}
				center={{
					lat: localization.lat,
					lng: localization.lng,
				}}
				zoom={localization.zoom}
				yesIWantToUseGoogleMapApiInternals={true}
				onGoogleApiLoaded={({ map, maps }) => { handleApiLoaded(map, maps); }}
				onClick={e => handleClickMap(e)}
			>
				{screen.filter.clients && clientsData.map(clientPin =>
					<Pin
						key={clientPin.id}
						type={'client'}
						lat={clientPin.address[0].lat}
						lng={clientPin.address[0].lng}
						info={clientPin}
					/>
				)}
				{screen.filter.tenders && tendersData.map(clientPin =>
					<Pin
						key={clientPin.id}
						type={'tender'}
						lat={clientPin.address[0].lat}
						lng={clientPin.address[0].lng}
						info={clientPin}
					/>
				)}
				{markers.map((marker, index) => (
					<Pin
						lng={marker.lng}
						lat={marker.lat}
						type={'newLead'}
						info={marker}
						key={index}
					/>
				))}
			</GoogleMapReact>
		</div>
	)
}

export default Map
