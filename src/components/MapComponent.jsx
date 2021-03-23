import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapWrapper = styled.div`
  width: 100%;
  height: 800px;
`;

const MapComponent = ({ locustData }) => {
  console.log(locustData);
  return (
    <>
      <h1>MapComponent</h1>

      <MapWrapper>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "800px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locustData.map((loc, idx) => {
            return (
              <Marker key={`abc${idx} + ${loc.x}`} position={[loc.y, loc.x]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
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
