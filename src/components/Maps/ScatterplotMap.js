import React from "react";
import DeckGL, { ScatterplotLayer } from "deck.gl";
import { StaticMap } from "react-map-gl";
import { Segment } from "semantic-ui-react";

const TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const INITIAL_VIEW_STATE = {
  latitude: 39.2895,
  longitude: -76.5815,
  zoom: 11,
  minZoom: 9,
  maxZoom: 19,
  pitch: 0,
  bearing: 0
};

function getcolor(d) {
  switch (d.Descriptio) {
    case "HOMICIDE":
      return [1, 152, 189];
    case "SHOOTING":
      return [255, 0, 0];

    default:
      return [254, 173, 84, 52];
  }
}

export default function HexagonMap({ data }) {
  const _renderLayers = () => {
    return [
      new ScatterplotLayer({
        id: "scatterplot-layer",
        data,
        opacity: 0.8,
        radiusScale: 6,
        radiusMinPixels: 2,
        radiusMaxPixels: 500,
        getPosition: d => [d.Longitude * 1, d.Latitude * 1],
        getColor: d => getcolor(d),
        upperPercentile: 99,
        pickable: true,
        onHover: info => console.log(info.object)
      })
    ];
  };
  return (
    <Segment style={{ height: "550px", marginTop: "1em" }}>
      <DeckGL
        layers={_renderLayers()}
        initialViewState={INITIAL_VIEW_STATE}
        controller
        width="100%"
      >
        <StaticMap
          reuseMaps
          mapStyle="mapbox://styles/mapbox/light-v9"
          preventStyleDiffing={true}
          mapboxApiAccessToken={TOKEN}
        />
      </DeckGL>
    </Segment>
  );
}
