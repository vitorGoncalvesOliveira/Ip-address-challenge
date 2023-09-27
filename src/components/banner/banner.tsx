import { useContext } from 'react'
import { Info } from '../info/index'
import './styles.css'
import { LocalContext } from '../../hooks/local.context'
export function Banner(){
    const context = useContext(LocalContext)
    
    if(context?.local){    
        
        return (
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>    
                <div className='banner-class' 
                        style={{   
                                backgroundColor: 'white', 
                                position: 'absolute', 
                                zIndex:'2', 
                                textAlign:'center',
                                width:'70%',
                                top:'32%', 
                                borderRadius:'1rem', 
                                display:'flex', 
                                flexWrap:'wrap',
                                padding: '3rem'}}>
                    <Info title='IP ADDRESS' text={context.local.ipAddress}/>
                    <hr className='line'></hr>
                    <Info title='LOCATION' text={context.local.location}/>
                    <hr className='line'></hr>
                    <Info title='TIME ZONE' text={context.local.timeZone}/>
                    <hr className='line' ></hr>
                    <Info title='ISP' text={context.local.isp}/>
                </div>
            </div>
            )  
    }
        
    
}