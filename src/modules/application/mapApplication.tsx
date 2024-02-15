import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useGeographic } from "ol/proj";

import { KommuneAside } from "../kommune/kommuneAside";
import { FylkeLayerCheckbox } from "../fylke/fylkeLayerCheckbox";
import { FylkeAside } from "../fylke/fylkeAside";

import "ol/ol.css";
import "./application.css";
import { Layer } from "ol/layer";
import { KommuneLayerCheckbox } from "../kommune/kommuneLayerCheckbox";
import { MapContext } from "../map/mapContext";
import { CountryLayerCheckbox } from "../countries/countryLayerCheckbox";
import { CountryAside } from "../countries/countryAside";

useGeographic();

const map = new Map({
  layers: [new TileLayer({ source: new OSM() })],
  view: new View({
    center: [11, 59],
    zoom: 10,
  }),
});

export function MapApplication() {
  function handleFocusUser(e: React.MouseEvent) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      map.getView().animate({
        center: [longitude, latitude],
        zoom: 10,
      });
    });
  }
  const [layers, setLayers] = useState<Layer[]>(
    new TileLayer({ source: new OSM() }),
  );

  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);
  useEffect(() => {
    map.setLayers(layers);
  }, [layers]);
  return (
    <MapContext.Provider value={{ map, layers, setLayers }}>
      <header>
        <h1>Exercise 4 Application</h1>
      </header>
      <nav>
        <a href="#" onClick={handleFocusUser}>
          Focus on me
        </a>
        <KommuneLayerCheckbox />
        <FylkeLayerCheckbox />
        <CountryLayerCheckbox />
      </nav>
      <main>
        <div ref={mapRef}></div>
        <KommuneAside />
        <FylkeAside />
        <CountryAside />
      </main>
    </MapContext.Provider>
  );
}
