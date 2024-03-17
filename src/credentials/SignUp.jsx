import { Button, Card, Grid, TextField } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
const navigate =useNavigate()
  return (
    <div
      style={{
        marginTop: "120px",
        display:'flex',
        justifyContent:'center'
       
      }}
    >
      <Grid>
        
          <Card variant="outlined" sx={{ padding: "15px" , display:'flex',
        flexDirection:'column',justifyContent:'center',width:'400px',bgcolor:'lightsteelblue'}}>
            <TextField label="FirstName" required sx={{marginBottom:'10px'}}/>
            <TextField label="LastName" required sx={{marginBottom:'10px'}}/>
            <TextField label="E-mail" required sx={{marginBottom:'10px'}}/>
            <TextField label="Contact no." required sx={{marginBottom:'10px'}}/>

            <Button variant="contained" fullWidth onClick={()=>navigate("/")}>
              Submit
            </Button>
          </Card>
      
      </Grid>
    </div>
  );
};

export default SignUp;
