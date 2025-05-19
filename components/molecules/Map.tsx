'use client';

//i use gpt for this part because i want to show what a minset that i have for this part
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IUser } from '@/types/user';

const Map = ({ user }: { user: IUser }) => {

    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);
    const markerRef = useRef<L.Marker | null>(null);

    useEffect(() => {
        if (!mapRef.current || !user.address?.geolocation) return;

        const { lat, long } = user.address.geolocation;
        if (!lat || !long) return;

        const latitude = parseFloat(lat);
        const longitude = parseFloat(long);

        if (isNaN(latitude) || isNaN(longitude)) return;

        if (!mapInstance.current) {
            mapInstance.current = L.map(mapRef.current).setView(
                [latitude, longitude],
                13
            );

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapInstance.current);
        }

        // Custom marker icon
        const customIcon = L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });

        if (markerRef.current) {
            markerRef.current.setLatLng([latitude, longitude]);
        } else {
            markerRef.current = L.marker([latitude, longitude], { icon: customIcon })
                .addTo(mapInstance.current)
                .bindPopup(
                    `<b>${user.name?.firstname || 'User'}'s Location</b><br>${user.address.street || 'Street not specified'
                    }, ${user.address.city || 'City not specified'}`
                );
        }

        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
                markerRef.current = null;
            }
        };
    }, [user]);

    return (
        <div
            ref={mapRef}
            className="h-64 w-full rounded-lg border border-gray-200"
        />
    )
}

export default Map