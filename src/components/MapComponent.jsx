import React from "react";

const MapComponent = ({ locustData }) => {
	return (
		<>
			<h1>MapComponent</h1>
			{locustData.map((coordinate, idx) => (
				<div key={idx}>
					<h6>x:{coordinate.x}</h6>
					<h6>y:{coordinate.y}</h6>
					<hr />
				</div>
			))}
		</>
	);
};

export default MapComponent;
