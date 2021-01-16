import React from 'react'
import GoogleMapReact from 'google-map-react'
import './styles.css'

function Map() {
  return (
		<div style={{ height: '91vh', width: '100%', marginTop: -50, marginBottom: -15}}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
				center={{
          lat: -23.561684,
          lng: -46.625378,
        }}
				defaultZoom={12}
			></GoogleMapReact>
		</div>
	)
}

export default Map
