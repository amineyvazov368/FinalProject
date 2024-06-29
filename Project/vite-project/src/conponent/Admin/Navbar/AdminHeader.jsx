import '../Navbar/navbar.scss'
import logo from "../Navbar/logo.png"
import axios from 'axios'
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
  
    <div className='adminHeaderBottom'>
        <Link onClick={()=> changeColor('dashboard')} className={selectClass === 'dashboard' ? 'active' : ''} to={"/admin"}>Dashboard</Link>
        <Link onClick={() => changeColor('team')} className={selectClass === 'team' ? 'active' : ''} to={"/admin/adminTeam"}>Teams</Link>
        {/* <Link onClick={() => changeColor('productCategory')}  className={selectClass === 'productCategory' ? 'active' : ''} to={"/admin/productCategories"}>Product Categories</Link>
        <Link onClick={() => changeColor('brand')}  className={selectClass === 'brand' ? 'active' : ''} to={"/admin/brands"}>Brands</Link>
        <Link onClick={() => changeColor('aroma')}  className={selectClass === 'aroma' ? 'active' : ''} to={"/admin/aromas"}>Aromas</Link> */}

        <Link onClick={() => changeColor('blog')}  className={selectClass === 'blog' ? 'active' : ''} to={"/admin/blogs"}>Blogs</Link>
        <Link onClick={() => changeColor('blogCategory')}  className={selectClass === 'blogCategory' ? 'active' : ''} to={"/admin/blogCategories"}>Blog Categories</Link>
{/* 
        <Link onClick={() => changeColor('part')}  className={selectClass === 'part' ? 'active' : ''} to={"/admin/parts"}>Parts</Link>
        <Link onClick={() => changeColor('move')}  className={selectClass === 'move' ? 'active' : ''} to={"/admin/moves"}>Moves</Link>
        <Link onClick={() => changeColor('order')}  className={selectClass === 'order' ? 'active' : ''} to={"/admin/orders"}>Orders</Link>
         */}
        <Link onClick={() => changeColor('user')}  className={selectClass === 'user' ? 'active' : ''} to={"/admin/users"}>Users</Link>
    </div>
  
    </header>
  )
}

export default Header