import { useState, useEffect } from "react";

export default function Home() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const geolocationOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const gps = navigator.geolocation;
    gps.getCurrentPosition(
      (geolocationPosition) => {
        console.log(geolocationPosition);
        setPosition(geolocationPosition);
      },
      (error) => {
        console.error(error);
      },
      geolocationOptions
    );
  }, []);

  useEffect(() => {
    // Resto del código...
  }, [position]);

  return (
    <>
      <p style={{ color: "white" }}>{position?.coords?.latitude}</p>
    </>
  );
}
