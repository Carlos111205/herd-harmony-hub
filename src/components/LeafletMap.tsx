import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface CattleMarker {
  name: string;
  tag: string;
  lat: number;
  lng: number;
  inZone: boolean;
  bellActive: boolean;
}

const cattle: CattleMarker[] = [
  { name: "Bella", tag: "#0247", lat: -1.2841, lng: 36.8155, inZone: true, bellActive: true },
  { name: "Duke", tag: "#0183", lat: -1.2825, lng: 36.8178, inZone: true, bellActive: true },
  { name: "Rosie", tag: "#0312", lat: -1.2860, lng: 36.8200, inZone: true, bellActive: true },
  { name: "Thunder", tag: "#0099", lat: -1.2870, lng: 36.8135, inZone: true, bellActive: false },
  { name: "Daisy", tag: "#0401", lat: -1.2790, lng: 36.8240, inZone: false, bellActive: true },
  { name: "Rex", tag: "#0155", lat: -1.2850, lng: 36.8170, inZone: true, bellActive: true },
  { name: "Luna", tag: "#0278", lat: -1.2835, lng: 36.8190, inZone: true, bellActive: true },
  { name: "Max", tag: "#0333", lat: -1.2855, lng: 36.8150, inZone: true, bellActive: true },
];

// Virtual fence boundary (polygon)
const fenceBoundary: [number, number][] = [
  [-1.2800, 36.8120],
  [-1.2800, 36.8220],
  [-1.2880, 36.8220],
  [-1.2880, 36.8120],
];

const createCattleIcon = (inZone: boolean) =>
  L.divIcon({
    className: "cattle-marker",
    html: `<div style="
      width:32px;height:32px;border-radius:50%;
      background:${inZone ? "hsl(152,60%,40%)" : "hsl(0,72%,51%)"};
      display:flex;align-items:center;justify-content:center;
      border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);
      font-size:14px;
    ">🐄</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

const LeafletMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [-1.2840, 36.8175],
      zoom: 16,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Fence boundary polygon
    L.polygon(fenceBoundary, {
      color: "hsl(152, 45%, 28%)",
      weight: 3,
      fillColor: "hsl(152, 60%, 40%)",
      fillOpacity: 0.08,
      dashArray: "10, 6",
    })
      .addTo(map)
      .bindPopup("<strong>Zone A — North Pasture</strong><br/>Virtual Fence Boundary");

    // Cattle markers
    cattle.forEach((c) => {
      L.marker([c.lat, c.lng], { icon: createCattleIcon(c.inZone) })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:sans-serif;">
            <strong>${c.name}</strong> <span style="color:#888;">${c.tag}</span><br/>
            <span style="color:${c.inZone ? "hsl(152,60%,40%)" : "hsl(0,72%,51%)"};">
              ${c.inZone ? "✅ In Zone" : "⚠️ Out of Zone"}
            </span><br/>
            Bell: ${c.bellActive ? "🔔 Active" : "🔕 Inactive"}
          </div>`
        );
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return <div ref={mapRef} className="h-full w-full" />;
};

export default LeafletMap;
