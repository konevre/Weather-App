import { MapContainer, TileLayer, Marker } from 'react-leaflet'


import "./weatherMap.scss"

const WeatherMap = () => {
    const zoom = 3,
          lat = 55.0411,
          lon = 82.9344;


    return (
        <MapContainer 
            center={[lat, lon]} 
            zoom={zoom} 
            scrollWheelZoom={false}
            // dragging={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"   
            />
            <Marker position={[55.7522, 37.6156]}/>
            <Marker position={[55.0411, 82.9344]}/>
            <Marker position={[41.1177, 16.8512]}/>
        </MapContainer>
    )
}

export default WeatherMap;