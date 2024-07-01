import React, { useContext } from 'react'
import { Button, Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { dataContext } from '../../../context/context';
const index = () => {
  const { users, setUsers, setError } = useContext(dataContext)
  return (
    <>
    <h2>username:{users.username} </h2>
          <h2>email:</h2>
          <h2>role:</h2>
          <hr />
          
          <hr />
          <Button
            sx={{ margin: "10px 15px" }}
            variant="contained"
            color="primary"
          >
            update profile
          </Button>
          <Button
            sx={{ margin: "10px 15px" }}
            variant="contained"
            color="primary"
          >
            update password
          </Button>
         
            <Button
              sx={{ margin: "10px 15px" }}
              variant="contained"
              color="primary"
            >
              <Link style={{ color: "white" }} to={"/add-blog"}>
                add blog
              </Link>
            </Button>
         
        </>
      )}
     
  

export default index