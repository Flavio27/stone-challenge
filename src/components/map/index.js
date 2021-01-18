import React from 'react'
import { useClienteData } from '../../store/Clients'
import GoogleMapReact from 'google-map-react'
import { fitBounds, Bounds } from 'google-map-react'
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";

import Pin from '../pin'
import './styles.css'


function Map() {
	const { localization, clientsData, tendersData, screen } = useClienteData();

	const handleApiLoaded = (map, maps) => {

		const SP_POLYNE = [
			{ lat: -23.44286673571264, lng: -46.63821494073057 },
			{ lat: -23.445386583194857, lng: -46.698639740510366 },
			{ lat: -23.46806304734673, lng: -46.759064540290154 },
			{ lat: -23.475621003146998, lng: -46.82223592187811 },
			{ lat: -23.556212236637865, lng: -46.85794148538435 },
			{ lat: -23.58390407234047, lng: -46.82772908549446 },
			{ lat: -23.62417267678741, lng: -46.83596883091897 },
			{ lat: -23.64681832955618, lng: -46.772797449331016 },
			{ lat: -23.644302339364643, lng: -46.602509377224344 },
			{ lat: -23.619139777663392, lng: -46.437714468734015 },
			{ lat: -23.508367140372858, lng: -46.347077269064336 },
			{ lat: -23.425226457981335, lng: -46.38827599618691 },
			{ lat: -23.397501267235786, lng: -46.4789131958566 },
			{ lat: -23.420185946312536, lng: -46.536591413828205 },
		]

		const SELLER_POLO = [
			{ lat: -23.55038364902264, lng: -46.63180837155173 },
			{ lat: -23.5498722165256, lng: -46.63090714939591 },
			{ lat: -23.549832875481854, lng: -46.62953385849183 },
			{ lat: -23.550973760969846, lng: -46.62841805963226 },
			{ lat: -23.552429359113056, lng: -46.6274739221357 },
			{ lat: -23.554514377019757, lng: -46.62683019202441 },
			{ lat: -23.555891257503685, lng: -46.62592896986861 },
			{ lat: -23.55884166710774, lng: -46.62631520793538 },
			{ lat: -23.560965921004158, lng: -46.62893304372129 },
			{ lat: -23.560611881073005, lng: -46.62936219712882 },
			{ lat: -23.559235050049907, lng: -46.63206586359624 },
			{ lat: -23.559235050049907, lng: -46.63343915450032 },
			{ lat: -23.556560022819614, lng: -46.635284514152694 },
			{ lat: -23.554907772915676, lng: -46.63575658290097 },
			{ lat: -23.55325550223997, lng: -46.63489827608591 },
			{ lat: -23.552271997928724, lng: -46.63292417041129 },
		]

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

	const test = (map, maps) => {
		const CENTER_BOUND = { lat: -23.5564616232912, lng: -46.63087491974125 };

		const SP_BOUBDS = {
			north: -23.52186333280168,
			south: -23.61217855556627,
			west: -46.68992647193074,
			east: -46.558090545138484,
		}

		const MAX_BOUNDS = new maps.LatLngBounds({
			center: CENTER_BOUND,
			restriction: {
				latLngBounds: SP_BOUBDS,
				strictBounds: false,
			},
		});
		MAX_BOUNDS.setMap(map);
	}

	const bounds = {
		ne: {
			lat: 50.01038826014866,
			lng: -118.6525866875
		},
		sw: {
			lat: 32.698335045970396,
			lng: -92.0217273125
		}
	};

	const size = {
		width: 640, // Map width in pixels
		height: 380, // Map height in pixels
	};

	const { center, zoom } = fitBounds(bounds, size);


	return (
		<div style={{ height: '91vh', width: '100%', marginTop: -50, marginBottom: -15 }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
				center={{
					lat: localization.lat,
					lng: localization.lng,
				}}
				bounds={{ nw: { lat: -23.51346579020769, lng: -46.7205058598384 }, se: { lat: -23.616055574258937, lng: -46.56463734222462 }, sw: { lat: -23.66071684655499, lng: -46.70608630534549 }, ne: { lat: -23.51346579020769, lng: -46.568070569484846 } }}
				zoom={localization.zoom}
				yesIWantToUseGoogleMapApiInternals={true}
				onGoogleApiLoaded={({ map, maps }) => { handleApiLoaded(map, maps); }}
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
