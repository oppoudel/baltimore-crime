import React from "react";
import DeckGL, { HexagonLayer } from "deck.gl";
import { StaticMap } from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const INITIAL_VIEW_STATE = {
  latitude: 39.2895,
  longitude: -76.5815,
  zoom: 11,
  minZoom: 9,
  maxZoom: 19,
  pitch: 60,
  bearing: -27.396674584323023
};

const LIGHT_SETTINGS = {
  lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
  ambientRatio: 0.4,
  diffuseRatio: 0.6,
  specularRatio: 0.2,
  lightsStrength: [0.8, 0.0, 0.8, 0.0],
  numberOfLights: 2
};

const colorRange = [
  [1, 152, 189, 52],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

export default function HexagonMap({ data }) {
  const _renderLayers = () => {
    return [
      new HexagonLayer({
        id: "heatmap",
        colorRange,
        coverage: 0.8,
        extruded: true,
        data,
        opacity: 0.8,
        radius: 150,
        getPosition: d => [d.Longitude * 1, d.Latitude * 1],
        upperPercentile: 99,
        pickable: true,
        elevationRange: [0, 10000],
        lightSettings: LIGHT_SETTINGS,
        elevationScale: 1,
        onHover: info => console.log(info.object)
      })
    ];
  };
  return (
    <DeckGL
      layers={_renderLayers()}
      initialViewState={INITIAL_VIEW_STATE}
      controller
      width="100%"
      height="500px"
    >
      <StaticMap
        reuseMaps
        mapStyle="mapbox://styles/mapbox/dark-v9"
        preventStyleDiffing={true}
        mapboxApiAccessToken={TOKEN}
      />
    </DeckGL>
  );
}
