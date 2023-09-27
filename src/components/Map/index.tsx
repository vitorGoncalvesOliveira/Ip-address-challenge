import { MapContainer } from 'react-leaflet'
import'./styles.css'
import { useContext } from 'react';
import { LocalContext } from '../../hooks/local.context';
import { MapInfo } from '../MapInfo';

 
   
const position = [-19.919112480253254,-43.93866080333141]
export function Map() {
 
  const context = useContext(LocalContext)
  
  if(context?.local){
    position[0] = context.local.lat;
    position[1] = context.local.lng;    
  }
  
    return (
      
        <MapContainer center={position} zoom={13} style={{height: '60vh', width:'100vw'}} zoomControl={false} className='map'>
          <MapInfo  position={{lat: position[0], lng:position[1]}} />
        </MapContainer>
        
        )
    
}