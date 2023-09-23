import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navber from "./Navbar/Navber"
 

function App() {


  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
