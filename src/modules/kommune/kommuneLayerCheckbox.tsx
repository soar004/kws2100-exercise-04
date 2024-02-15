import {React, useContext, useEffect, useState} from "react";
import {kommuneLayer} from "./kommuneLayer";
import {MapContext} from "../map/mapContext";


export function KommuneLayerCheckbox() {
    const {setLayers }  = UseContext(MapContext);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            setLayers((old) => [...old, kommuneLayer]);
        }
        return () => {
            setLayers((old) => old.filter((layer) => layer !== kommuneLayer));
        };
    }, [checked]);

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                Show kommuner
            </label>
        </div>
    );
}