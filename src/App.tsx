import { Map } from './components/Map';
import { Header } from './components/Header';
import { Banner } from './components/banner/banner';
import { LocalContext, LocalType } from './hooks/local.context'
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
 
function App() {
  const [local, setLocal] = useState<LocalType | null>(null)

  return (
      <>
        <LocalContext.Provider value={{local, setLocal}}>
          <Header />
          <Banner />
          <Map />
        </LocalContext.Provider>
      </>
              
      
    
  )
}

export default App
