
interface InfoProps {
    title:string;
    text:string;
}


export function Info({ title ,text }: InfoProps){
    return (
        <div style={{display:'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center', padding:'0.6rem'}}>
            <p style={{ color:'hsl(0, 0%, 59%)' , textTransform:'uppercase', fontSize:'0.9rem', fontWeight:'bold', margin:'2px'}}>
                {title}
            </p>
            <h3 style={{ fontWeight:'bold', fontSize:'2rem', margin:'4px'}}>
                {text}
            </h3>            
        </div>
    )
}