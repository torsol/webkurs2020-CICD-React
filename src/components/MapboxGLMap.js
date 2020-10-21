import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [7.020263671875,
          62.560451883610256],
        zoom: 8
      });

      map.on("load", () => {

        map.addSource('ships', {
          type: 'geojson',
          data: 'https://raw.githack.com/torsol/webkurs2020-CICD-React/main/cleaned_output_100_100.geojson'
        });

        map.addLayer({
          'id': 'ships',
          'type': 'fill',
          'source': 'ships',
          'layout': {},
          'paint': {
          'fill-color': '#088',
          'fill-opacity': 0.8
          }
          });

        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;