import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import {Feature} from "ol";
import {Polygon} from "ol/geom";
import {GeoJSON} from "ol/format";


export type KommuneLayer = VectorLayer<VectorSource<KommuneFeature>>;
export type KommuneFeature = {
    getProperties(): KommuneProperties;
} & Feature<Polygon>
export interface KommuneProperties {
    kommunenummer: string;
    navn: string;
}
export const kommuneLayer = new VectorLayer({
    className: "kommune",
    source: new VectorSource({
        url: "/kommune.json",
        format: new GeoJSON(),
    }),
});
