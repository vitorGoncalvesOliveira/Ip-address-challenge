import {  TileLayer , Marker, useMap} from 'react-leaflet';
import Pin from '../../assets/icon-location.svg';
import { icon } from 'leaflet'

type propsMapInfo = {
    position:{
        lat: number,
        lng: number,
    }
}

export function MapInfo({ position }: propsMapInfo){
    const map = useMap();
    map.flyTo(position)
    return(
        <>
             <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon({ 
              iconUrl:Pin,
              })}>
            </Marker>
        </>
    )
}