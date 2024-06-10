// components/MapPage.js
"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import MapComponent from "@/components/map/MapComponent";
import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/lottie/loading.json";

const MapPage: NextPage = () => {
  const [locations, setLocations] = useState<{ lat: number, lng: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/Location');
        const data = await response.json();
        const locationData = data.map((item: any) => item.location).filter((loc: any) => loc !== null);
        setLocations(locationData);
      } catch (error) {
        console.error('Error fetching location data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Lottie loop animationData={lottieJson} play style={{ width: 200, height: 200 }} />
        </div>
      ) : (
        <MapComponent locations={locations} />
      )}
    </div>
  );
};

export default MapPage;
