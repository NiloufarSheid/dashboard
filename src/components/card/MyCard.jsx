import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Divider from "@mui/material/Divider";
import "./mycard.css"

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MyCard() {
  return (
    <Grid 
      container
      spacing={2}
     p={2}
     sx={{width:"auto" }}
     
     
    >
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ flexGrow: 1 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "600" }}
              color="#171725"
              gutterBottom
            >
              Free Plan
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: "12px", fontWeight: "400" }}
            >
              For beginner member who first try using Square.But still can be
              upgradable. 30 days
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: "48px",
                fontWeight: "600",
                color: "#171725",
              }}
              color="text.secondary"
            >
              $0
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              sx={{width:"100vw", justifyContent:"right"}}
              
            >
              <List>
                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                     
                     
                    }}
                  />
                  <ListItemText primary="Free Domain for One Year" sx={{fontSize:"14px", fontWeight:"600"}} />
                </ListItem>
                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Email & Live Chat Support" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Basic Design Customization" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Max 10 Blog Post" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Storage up to 2GB " />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="20 Featured Image & Plugin" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Basic service customization" />
                </ListItem>
              </List>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                backgroundColor: "#FFF",
                borderRadius: "10px",
                border: "1px solid #E2E2EA",
                color: "#696974",
                textAlign: "center",
                width:"90vw",
                padding:"10px",
                height: "38px",
                justifyContent:"center",
                alignItems:"center"
              }}
              size="small"
            >
              CURRENT PLAN
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} >
        <Card sx={{ flexGrow: 1 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "600" }}
              color="#171725"
              gutterBottom
            >
              Premium Plan
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: "12px", fontWeight: "400" }}
            >
              For premium member who first try using Square.But still can be
              upgradable. 30 days
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: "48px",
                fontWeight: "600",
                color: "#171725",
              }}
              color="text.secondary"
            >
              $25
              <span className="span"> <del> 35$</del></span>
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              sx={{width:"100vw"}}
              
            >
              <List>
                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Free Domain for One Year" />
                </ListItem>
                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Email & Live Chat Support" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Basic Design Customization" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Max 10 Blog Post" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Storage up to 2GB " />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="20 Featured Image & Plugin" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Basic service customization" />
                </ListItem>
              </List>
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="btn"
              sx={{
                backgroundColor: "#1E75FF",
                borderRadius: "10px",
                border: "1px solid #E2E2EA",
                color: "#FFF",
                textAlign: "center",
                width:"90vw",
                padding:"10px",
                height: "38px",
                alignItems:"center",
                justifyContent:"center",
                alignContent:"center"
              }}
              size="small"
            >
              UPGRADE PLAN
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} >
        <Card sx={{ flexGrow: 1}}>
          <CardContent>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "600"}}
              color="#171725"
              gutterBottom
            >
              Special Plan
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: "12px", fontWeight: "400" }}
            >
              For special member who first try using Square.But still can be
              upgradable. 30 days
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: "48px",
                fontWeight: "600",
                color: "#171725",
              }}
              color="text.secondary"
            >
              $45
              <span className="span"> <del> 50$</del></span>
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              sx={{width:"100vw"}}
            
             
            >
              <List>
                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Free Domain for One Year" />
                </ListItem>
                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Email & Live Chat Support" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Basic Design Customization" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Max 10 Blog Post" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Storage up to 2GB " />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="20 Featured Image & Plugin" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Basic service customization" />
                </ListItem>
              </List>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                backgroundColor: "#1E75FF",
                borderRadius: "10px",
                border: "1px solid #E2E2EA",
                color: "#FFF",
                textAlign: "center",
                width:"90vw",
              padding:"10px",
                height: "38px"
              }}
              size="small"
            >
              UPGRADE PLAN
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} >
        <Card sx={{ flexGrow: 1 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "600" }}
              color="#171725"
              gutterBottom
            >
              Master Plan
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: "12px", fontWeight: "400" }}
            >
              For master member who first try using Square.But still can be
              upgradable. 30 days
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: "48px",
                fontWeight: "600",
                color: "#171725",
              
              }}
              color="text.secondary"
            >
              $75
              <span className="span"> <del> 90$</del></span>
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              sx={{width:"100vw"}}
         
            >
              <List>
                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Free Domain for One Year" />
                </ListItem>
                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Email & Live Chat Support" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Basic Design Customization" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Max 10 Blog Post" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Storage up to 2GB " />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="20 Featured Image & Plugin" />
                </ListItem>

                <ListItem>
                  <CheckIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      color: "#3DD598",
                      flexShrink: "0",
                      marginRight:"10px"
                    }}
                  />
                  <ListItemText primary="Basic service customization" />
                </ListItem>
              </List>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                backgroundColor: "#1E75FF",
                borderRadius: "10px",
                border: "1px solid #E2E2EA",
                color: "#FFF",
                textAlign: "center",
                height: "38px",
              width:"90vw",
              padding:"10px"
              }}
              size="small"
            >
              UPGRADE PLAN
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
