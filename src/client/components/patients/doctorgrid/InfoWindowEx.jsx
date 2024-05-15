/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { InfoWindow } from "google-maps-react";

export default function InfoWindowEx(props) {
  const infoWindowRef = useRef(null);
  const contentElementRef = useRef(null);

  useEffect(() => {
    if (props && infoWindowRef.current && contentElementRef.current) {
      const contentElement = document.createElement("div");
      ReactDOM.render(React.Children.only(props.children), contentElement);
      infoWindowRef.current.infowindow.setContent(contentElement);
    }
  }, [props, infoWindowRef.current, contentElementRef.current]);

  return (
    <InfoWindow ref={infoWindowRef} {...props}>
      <div ref={contentElementRef} />
    </InfoWindow>
  );
}
