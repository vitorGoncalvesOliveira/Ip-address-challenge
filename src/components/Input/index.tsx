import { useState , useContext} from 'react'
import { LocalContext } from '../../hooks/local.context'
import icon from '../../assets/icon-arrow.svg'

const API_KEY = ""; 
export function InputIp(){
    const [ipAddress,setIpAddress] = useState('')
    const  context = useContext(LocalContext)
    
    const searchIp = () =>{
        
        const typeOfSearch = 'domain'
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}${typeOfSearch}=${ipAddress}`)
            .then(result => result.json())
            .then(data =>{ 
                context?.setLocal({
                    ipAddress:data.ip,
                    location: `${data.location.city}, ${data.location.region}`,
                    timeZone: data.location.timezone,
                    isp: data.isp,
                    lat:data.location.lat,
                    lng: data.location.lng
                })
                
                })
            .catch(err => console.log(err))
  
    }
    return (
        <div style={{ display:'flex', width:'60%'}}>
            <input style={{ 
                    padding: '1.2rem', 
                    margin:'0', 
                    width:'90%',
                    fontSize:'18px', 
                    borderRadius:'0.7rem 0 0 0.7rem' }}
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)} />
            <button style={{    
                        width:'10%',
                        backgroundColor: 'black', 
                        padding: '1.5rem', 
                        margin:'0', 
                        border:'0', 
                        borderRadius:'0 0.7rem 0.7rem 0',
                        backgroundImage: `url(${icon})`, 
                        backgroundRepeat:'no-repeat', 
                        backgroundPosition:'center',
                        cursor:'pointer' }} 
                    onClick={() => searchIp()}>
            </button>
        </div>
    )
}