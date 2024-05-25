import MyAppBar from "./components/header/AppBar"
import {  Box, Container} from "@mui/material"
import SideBar from "./components/sidebar/Sidebar"
import MyPlans from "./components/myplans/Myplans"
import MyCard from "./components/card/MyCard"







const App=()=> {


  return (
   <Container  sx={{ textAlign:"center" , marginRight:"10px"}}>

      <MyAppBar/>
      <SideBar/>
      <MyPlans />
      <MyCard />
 
    
   </Container>
   
  

 
  
    

  
  )
}

export default App
