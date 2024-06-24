import MyAppBar from "./components/header/AppBar"
import {  Container, Grid} from "@mui/material"
import SideBar from "./components/sidebar/Sidebar"
import MyPlans from "./components/myplans/Myplans"
import MyCard from "./components/card/MyCard"








const App=()=> {


  return (
   <Container sx={{alignItems:"center", marginRight:"0"}}>

      <MyAppBar/>
      <SideBar/>
      <MyPlans />
      <MyCard />
 
    
   </Container>
   
  

 
  
    

  
  )
}

export default App
