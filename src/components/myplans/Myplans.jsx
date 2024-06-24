import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



const Myplans = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid sx={{width:"auto"}}>
    <Typography p={2} sx={{ textAlign:"left" , color:"#171725", fontSize:"24px",fontWeight:"600", marginBottom:"20px"}}>
    My Plans
  </Typography>

    <Grid container spacing={2} p={2} sx={{width:"auto", borderRadius:"20px", border:"1px solid #F1F1F5",alignItems:"center",justifyContent:"center"}}>
      <Grid  display={"flex"} xs={12} md={6}>

    <Grid item xs={6} md={3}  >
     <Link underline="none" sx={{color:"#2463FA" , fontSize:"16px" , fontWeight:"600"}} >Blog & Personal </Link>
    </Grid>


    <Grid item xs={6} md={3} sx={{alignItems:"start"}} >
       <Link underline="none" sx={{color:"#171725" , fontSize:"16px", fontWeight:"400"}}>Business Site</Link>
    </Grid>
    </Grid>

    <Grid display={"flex"} xs={12} md={6}>

    <Grid item  xs={6} md={3}  sx={{display:"flex"}}>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
    </Grid>

   
    <Grid item  xs={6} md={3} sx={{display:"flex"}}>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
    </Grid>
    </Grid> 
    </Grid>
    </Grid>
 
  );
}

export default Myplans;
