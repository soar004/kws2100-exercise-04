import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Feature } from "ol";
import { Polygon } from "ol/geom";
import stedsNavn from "../sted/stedsNavn";
import { GeoJSON } from "ol/format";
import { Stroke, Style } from "ol/style";

export type fylkeLayer = VectorLayer<VectorSource<FylkeFeature>>;
export type FylkeFeature = {
  getProperties(): FylkeProperties;
} & Feature<Polygon>;
export interface FylkeProperties {
  fylkenummer: string;
  navn: stedsNavn[];
}

export const fylkeLayer = new VectorLayer({
  className: "fylke",
  source: new VectorSource({
    url: "./fylker.json",
    format: new GeoJSON(),
  }),
  style: new Style({
    stroke: new Stroke({ color: "black", width: 1 }),
  }),
});
