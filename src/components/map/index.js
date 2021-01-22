import React, { useState } from 'react'
import { SP_POLYNE, SELLER_POLO } from './polynes'
import { useClienteData } from '../../store/Clients'
import GoogleMapReact from 'google-map-react'
import Pin from '../pin'
import './styles.css'

//RETIRAR COLOCAR EM UM ENV
const KEY = 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek'
const GET_ADDRES_API = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='


function Map() {
	const { localization, clientsData, leadsData, screen, dispatchScreen } = useClienteData();
	const [markers, setMarkers] = useState([])

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

	const newLead = async () => {
		await dispatchScreen({
			type: 'ADD_NEW_PIN',
			payload: screen.newLead.screen ? false : true
		});
	}

	const handleClickMap = async event => {
		if (screen.newLead.clickOn) {
			const lt = event.lat;
			const lg = event.lng;
			console.log('onClick map: ', lt, lg);
			const response = await fetch(`${GET_ADDRES_API}${lt},${lg}&key=${KEY}`)
			const data = await response.json()
			const addresData = await data.results[0].formatted_address
			const positionData = await data.results[0].geometry.location
			const addresFormated = addresData.substr(0, addresData.indexOf(', São Paulo'));
			const info = {
				address: addresFormated,
				position: positionData
			}
			setMarkers([...markers, { lat: lt, lng: lg, location: info }])
			console.log(markers)
			dispatchScreen({
				type: 'PUSH_ADDRESS',
				payload: info
			});
			dispatchScreen({
				type: 'ADD_NEW_PIN',
				payload: screen.newLead.screen ? false : true
			});
			dispatchScreen({
				type: 'ACTIVE_CLICK_ON',
				payload: false
			});
			// console.log(screen.newLead.position)
			// console.log(screen.newLead.address)
		}
	};


	return (
		<div style={{ height: '91vh', width: '100%', marginTop: -50, marginBottom: -15 }}>
			<GoogleMapReact
				options={{ draggableCursor: screen.newLead.clickOn && 'crosshair' }}
				bootstrapURLKeys={{ key: KEY }}
				center={{
					lat: localization.lat,
					lng: localization.lng,
				}}
				zoom={localization.zoom}
				yesIWantToUseGoogleMapApiInternals={true}
				draggingCursor="default"
				onGoogleApiLoaded={({ map, maps }) => { handleApiLoaded(map, maps); }}
				onClick={e => handleClickMap(e)}
			>
				{screen.filter.clients && clientsData.map(clientPin =>
					<Pin
						key={clientPin.id}
						type={'client'}
						lat={clientPin.address.lat}
						lng={clientPin.address.lng}
						info={clientPin}
					/>
				)}
				{screen.filter.leads && leadsData.map(clientPin =>
					<Pin
						key={clientPin.id}
						type={'lead'}
						lat={clientPin.address.lat}
						lng={clientPin.address.lng}
						info={clientPin}
					/>
				)}
			</GoogleMapReact>
		</div>
	)
}

export default Map
