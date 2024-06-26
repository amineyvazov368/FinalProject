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
                        <Button><Link className={Style.link} to={"/"}>Home</Link></Button>
                        <Button><Link className={Style.link} to={"/about"}>About</Link></Button>
                        <Button><Link className={Style.link} to={"/blog"}>Blog</Link></Button>
                        <Button><Link className={Style.link} to={"/contact"}>Contact</Link></Button>
                        <Button><Link className={Style.link} to={"/gallery"}>Gallery</Link></Button>
                        <Button><Link className={Style.link} to={"/login"}>Login</Link></Button>
                        <Button><Link className={Style.link} to={"/register"}>Register</Link></Button>
                        <Button><Link className={Style.link} to={"/pricing"}>Pricing</Link></Button>
                        <Button><Link className={Style.link} to={"/team"}>Team</Link></Button>
                      
                    </div>
                </div>
            </div>


        </>
    )
}

export default index