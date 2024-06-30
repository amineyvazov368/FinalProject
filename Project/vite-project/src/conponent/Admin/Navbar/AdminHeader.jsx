import '../Navbar/navbar.scss'
import logo from "../Navbar/logo.png"
import axios from 'axios'
import Style from "./index.module.css"
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Header = () => {

    const [selectClass,setSelecClass]=useState(root ? root : 'dashboard')
  const navigate = useNavigate();
  const changeColor=(className)=>{
    setSelecClass(className);
  }

  const [username, setUsername] = useState("")
  const [error,setError] = useState("")
  const [dummy,setDummy] = useState(false)

  useEffect(() => {
    axios.get("https://localhost:7066/api/Users/UserGetInfo").then(res=>{
      setUsername(res.data.data.username)
      setDummy(!dummy)
    }).catch(err=>{
      setError(err.message)
      // setDummy(!dummy)

    })

  }, [])
  return (
    <header className='adminHeader'>
  
    <div className='adminHeaderTop'>
      <Link to={"/"} className="logo">
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
        <h2>Admin Panel</h2>
      </Link>
      <div className="search">
        <input type="text" placeholder='Search' />
      </div>
      <div className="userInfo">
        <p>{username}</p>
        <PersonIcon />
      </div>
    </div>
  
    <div  className='adminHeaderBottom'>

        <Link onClick={() => changeColor('team')} className={selectClass === 'team' ? 'active' : ''} to={"/admin/adminTeam"}>Teams</Link>
        <Link onClick={() => changeColor('blog')}  className={selectClass === 'blog' ? 'active' : ''} to={"/admin/adminBlog"}>Blogs</Link>
        <Link onClick={() => changeColor('user')}  className={selectClass === 'user' ? 'active' : ''} to={"/admin/users"}>Users</Link>
    </div>
  
    </header>
  )
}

export default Header