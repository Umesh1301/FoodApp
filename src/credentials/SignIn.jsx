import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        marginTop: "120px",
        display: "flex",

        flexWrap: "wrap",

        justifyContent: "center",
      }}
    >
      <Grid>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            bgcolor: "lightsteelblue",
          }}
        >
          <TextField
            label="Contact Number"
            required
            sx={{ marginBottom: "10px" }}
          />
          <TextField label="Password" required sx={{ marginBottom: "10px" }} />
          <Button variant="contained" fullWidth onClick={() => navigate("/")}>
            Log In
          </Button>

          <Typography sx={{display:'flex',justifyContent:'end', marginTop:'10px'}}>
            If not signup   <Link to="/signUp" >SignUp</Link>
          </Typography>
          
        </Card>
      </Grid>
    </div>
  );
};

export default SignIn;
