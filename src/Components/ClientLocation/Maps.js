import { useEffect, useState } from "react";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "550px",
};

const Maps = (props) => {
  const [center, setcenter] = useState({
    lat: 76.908761,
    lng: 28.412691,
  });

  useEffect(() => {
    setcenter({
      lat: props.lat,
      lng: props.long,
    });
  }, [props]);
  console.log(center);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCwhKkFbOT8KqVFGpmaPQ1pBse-Rj94Tiw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Maps;
