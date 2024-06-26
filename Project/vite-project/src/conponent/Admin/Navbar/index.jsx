import React from 'react'
import Style from "./index.module.css"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <>
             <div className={Style.nav}> 
                <div className={Style.container}>
                    <div className={Style.logo}>
                        <h2>BARBERO
</h2>
                    </div>
                    <div className={Style.button}>
                       
                        
                        <Button><Link className={Style.link} to={"/admin/AdminLogin"}>AdminLogin</Link></Button>
                        <Button><Link className={Style.link} to={"/admin/AdminTeam"}>AdminTeam</Link></Button>
                        <Button><Link className={Style.link} to={"/admin/AdminBlog"}>AdminBlog</Link></Button>
                    </div>
                </div>
            </div>
   
 

        </>
    )
}

export default index