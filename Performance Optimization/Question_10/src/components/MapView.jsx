import React, { useMemo, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'


// fix Leaflet's default icon path when bundling
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
})


function FlyTo({ position }) {
const map = useMap()
if (position) map.flyTo(position, 14, { duration: 0.8 })
return null
}


export default function MapView({ center = [40.758896, -73.98513], markers = [], onMarkerClick }) {
const markersMemo = useMemo(() => markers, [markers]) // trivial example — in real app you may compute clusters


const handleMarkerClick = useCallback((poi) => {
if (onMarkerClick) onMarkerClick(poi)
}, [onMarkerClick])


return (
<MapContainer center={center} zoom={13} className="leaflet-container">
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>


{markersMemo.map((m) => (
<Marker key={m.id} position={[m.lat, m.lng]} eventHandlers={{ click: () => handleMarkerClick(m) }}>
<Popup>
<div>
<strong>{m.title}</strong>
<div className="small">{m.category}</div>
</div>
</Popup>
</Marker>
))}
</MapContainer>
)
}