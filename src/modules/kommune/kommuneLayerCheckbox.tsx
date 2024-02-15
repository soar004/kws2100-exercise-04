import React, { useContext, useEffect, useState } from "react";
import { MapContext } from "../map/mapContext";
import { KommuneLayer } from "./kommuneLayer";

export function KommuneLayerCheckbox() {
  const { setLayers } = useContext(MapContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, KommuneLayer]);
    }
    return () => {
      setLayers((old) => old.filter((l) => l !== KommuneLayer));
    };
  }, [checked]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Show kommuner
      </label>
    </div>
  );
}
