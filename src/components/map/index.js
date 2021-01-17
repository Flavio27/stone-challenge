import React from 'react'
import { useClienteData } from '../../store/Clients'
import GoogleMapReact from 'google-map-react'
import Pin from '../pin'
import './styles.css'

function Map() {
	const { localization, clientsData, tendersData, screen } = useClienteData();
	return (
		<div style={{ height: '91vh', width: '100%', marginTop: -50, marginBottom: -15 }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
				center={{
					lat: localization.lat,
					lng: localization.lng,
				}}
				text="My Marker"
				defaultZoom={localization.zoom}
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
			</GoogleMapReact>
		</div>
	)
}

export default Map
