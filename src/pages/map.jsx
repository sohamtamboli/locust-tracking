import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import DefaultLayout from "layout";
import MapComponent from "components/MapComponent";

const MapPage = () => {
  function inside(point, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

    var x = point[0],
      y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0],
        yi = vs[i][1];
      var xj = vs[j][0],
        yj = vs[j][1];

      var intersect =
        yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  }
  const indiaRegion = [
    [64.034125, 33.016406],
    [87.531118, 16.265597],
    [76.355268, 37.45246],
    [77.404398, 20.190844],
  ];

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
          res.features.map((i) => {
            return setCoordinates(() => {
              console.log(inside([i.geometry.x, i.geometry.y], indiaRegion));
              if (inside([i.geometry.x, i.geometry.y], indiaRegion)) {
                return coordinates.push(i.geometry);
              }
            });
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
      {locustData.length ? <MapComponent locustData={locustData} /> : null}
    </DefaultLayout>
  );
};

export default MapPage;
