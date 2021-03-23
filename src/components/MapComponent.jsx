import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapWrapper = styled.div`
	width: 90%;
	height: 500px;
	margin: 3rem auto;
`;

const Heading = styled.h2`
	padding: 2rem 0 0 2rem;
`;

const MapComponent = ({ locustData }) => {
	console.log(locustData);
	return (
		<>
			<Heading>Locust Markers in India Region</Heading>

			<MapWrapper>
				<MapContainer
					center={[28.659317, 77.239693]}
					zoom={5}
					scrollWheelZoom={true}
					style={{ width: "100%", height: "500px" }}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					{locustData.map((loc, idx) => {
						return (
							<Marker key={`abc${idx} + ${loc.x}`} position={[loc.y, loc.x]}>
								<Popup>
									Co-ordinates: <br /> x: {loc.y} <br /> y: {loc.x}
								</Popup>
							</Marker>
						);
					})}
				</MapContainer>
			</MapWrapper>
		</>
	);
};

export default MapComponent;
