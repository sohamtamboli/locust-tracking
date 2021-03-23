import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import DefaultLayout from "layout";
import MapComponent from "components/MapComponent";

const MapPage = () => {
	const [locustData, setLocustData] = useState([]);
	const [coordinates, setCoordinates] = useState([]);
	useEffect(() => {
		fetch(
			`https://services5.arcgis.com/sjP4Ugu5s0dZWLjd/arcgis/rest/services/Adults_Public/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`
		)
			.then((response) => {
				response.json().then((res) => {
					console.log(res.features);
					console.log(res.features[1].geometry);
					res.features.map((x) => {
						return setCoordinates(() => coordinates.push(x.geometry));
					});

					setLocustData(coordinates);
				});
			})

			.catch((err) => console.log(err));
		// useRef here to solve the eslint warning !important
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<DefaultLayout>
			<MapComponent locustData={locustData} />
		</DefaultLayout>
	);
};

export default MapPage;
