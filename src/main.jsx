import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/Color/App.jsx'
import Rating from './Components/rating/rating.jsx'
import Image from './Components/image-slider/image.jsx'
import Load from './Components/load-more-data/load.jsx'
import QR from './Components/Qr-Code/qr.jsx'
import Dark from './Components/Dark-Mode/dark.jsx'
import Scroll from './Components/Scroll/scroll.jsx'
import Tab from './Components/Tabs/tab.jsx'
import Popup from './Components/Modal-Popup/popup.jsx'
// import TTT from './Components/tic-tac-toe/ttt.jsx'
import Feature from './Components/Feature-Flags/feature.jsx'
import Context from './Components/Feature-Flags/Context.jsx'
import Home from './Components/useFetch/home.jsx'
import UpDown from './Components/Scroll-to&fro/upDown.jsx'
import ScrollToPar from './Components/Scroll-to&fro/scrollToPar.jsx'
import Example from './Components/Trial/example.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Rating/> */}
    {/* <Image/> */}
    {/* <Load/> */}
    {/* <QR/> */}
    {/* <Dark/> */}
    {/* <Scroll></Scroll> */}
    {/* <Tab/> */}
    {/* <Popup/> */} 
    {/* <Auto/> */}
    {/* <TTT/> */}
    {/* <Context></Context> */}
    {/* <Home></Home> */}
    {/* <UpDown/> */}
    {/* <ScrollToPar></ScrollToPar> */}
    <Example></Example>
  </StrictMode>,
)
