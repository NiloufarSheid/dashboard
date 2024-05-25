import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid , List , ListItem, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

                    

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MyCard() {
  return (
    <Grid container spacing={2}   mt={2} sx={{marginLeft:"10px" , width:"100%"}} >

      <Grid item xs={12} sm={6} md={3} >
    <Card  sx={{ flexGrow:1 , width:"auto"  }}>
      <CardContent>
        <Typography sx={{ fontSize:"18px" , fontWeight:"600" }} color="#171725" gutterBottom>
        Free Plan
        </Typography>
        <Typography variant="h5" component="div" sx={{fontSize:"12px" , fontWeight:"400"}}>
        For beginner member who first try using Square.But still can be upgradable. 30 days 
        </Typography>
        <Typography sx={{ mb: 1.5 , fontSize:"48px" , fontWeight:"600" , color:"#171725"}} color="text.secondary">
        $0
        </Typography>
        <Typography variant="body2" sx={{fontSize:"14px", fontWeight:"400"}}>
        <List >
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/><ListItemText primary="Free Domain for One Year" />
              </ListItem>
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Email & Live Chat Support" />
              </ListItem>
              
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Basic Design Customization" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Max 10 Blog Post" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Storage up to 2GB " />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="20 Featured Image & Plugin" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Basic service customization" />
              </ListItem>

            </List>
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{backgroundColor:"#FFF" , borderRadius:"10px" , border:"1px solid #E2E2EA" , color:"#696974", textAlign:"center", width:"262px", height:"38px"}} size="small">CURRENT PLAN</Button>
      </CardActions>
    </Card>
    </Grid>


    <Grid item xs={12} sm={6} md={3} >
    <Card  sx={{ flexGrow:1 , width:"auto"  }}>
      <CardContent>
        <Typography sx={{ fontSize:"18px" , fontWeight:"600" }} color="#171725" gutterBottom>
        Premium Plan
        </Typography>
        <Typography variant="h5" component="div" sx={{fontSize:"12px" , fontWeight:"400"}}>
        For premium member who first try using Square.But still can be upgradable. 30 days 
        </Typography>
        <Typography sx={{ mb: 1.5 , fontSize:"48px" , fontWeight:"600" , color:"#171725"}} color="text.secondary">
        $25
        </Typography>
        <Typography variant="body2" sx={{fontSize:"14px", fontWeight:"400"}}>
        <List >
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/><ListItemText primary="Free Domain for One Year" />
              </ListItem>
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Email & Live Chat Support" />
              </ListItem>
              
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Basic Design Customization" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Max 10 Blog Post" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Storage up to 2GB " />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="20 Featured Image & Plugin" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Basic service customization" />
              </ListItem>

            </List>
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{backgroundColor:"#1E75FF" , borderRadius:"10px" , border:"1px solid #E2E2EA" , color:"#FFF", textAlign:"center", width:"262px", height:"38px"}} size="small">UPGRADE PLAN</Button>
      </CardActions>
    </Card>
    </Grid>
    
    <Grid item xs={12} sm={6} md={3} >
    <Card  sx={{ flexGrow:1 , width:"auto"  }}>
      <CardContent>
        <Typography sx={{ fontSize:"18px" , fontWeight:"600" }} color="#171725" gutterBottom>
        Special Plan 
        </Typography>
        <Typography variant="h5" component="div" sx={{fontSize:"12px" , fontWeight:"400"}}>
        For special member who first try using Square.But still can be upgradable. 30 days 
        </Typography>
        <Typography sx={{ mb: 1.5 , fontSize:"48px" , fontWeight:"600" , color:"#171725"}} color="text.secondary">
        $45
        </Typography>
        <Typography variant="body2" sx={{fontSize:"14px", fontWeight:"400"}}>
        <List >
              <ListItem>
              <CheckIcon  sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/><ListItemText primary="Free Domain for One Year" />
              </ListItem>
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Email & Live Chat Support" />
              </ListItem>
              
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Basic Design Customization" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Max 10 Blog Post" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Storage up to 2GB " />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="20 Featured Image & Plugin" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Basic service customization" />
              </ListItem>

            </List>
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{backgroundColor:"#1E75FF" , borderRadius:"10px" , border:"1px solid #E2E2EA" , color:"#FFF", textAlign:"center", width:"262px", height:"38px"}} size="small">UPGRADE PLAN</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={3} >
    <Card  sx={{ flexGrow:1 , width:"auto"  }}>
      <CardContent>
        <Typography sx={{ fontSize:"18px" , fontWeight:"600" }} color="#171725" gutterBottom>
        Master Plan
        </Typography>
        <Typography variant="h5" component="div" sx={{fontSize:"12px" , fontWeight:"400"}}>
        For master member who first try using Square.But still can be upgradable. 30 days 
        </Typography>
        <Typography sx={{ mb: 1.5 , fontSize:"48px" , fontWeight:"600" , color:"#171725"}} color="text.secondary">
        $75
        </Typography>
        <Typography variant="body2" sx={{fontSize:"14px", fontWeight:"400"}}>
        <List >
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/><ListItemText primary="Free Domain for One Year" />
              </ListItem>
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Email & Live Chat Support" />
              </ListItem>
              
              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Basic Design Customization" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Max 10 Blog Post" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Storage up to 2GB " />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="20 Featured Image & Plugin" />
              </ListItem>

              <ListItem>
              <CheckIcon sx={{width:"20px",height:"10px", color:"#3DD598", flexShrink:"0"}}/>
                <ListItemText primary="Basic service customization" />
              </ListItem>

            </List>
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{backgroundColor:"#1E75FF" , borderRadius:"10px" , border:"1px solid #E2E2EA" , color:"#FFF", textAlign:"center", width:"262px", height:"38px"}} size="small">UPGRADE PLAN</Button>
      </CardActions>
    </Card>
    </Grid>



</Grid>

   
    

    
  );
}