import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Style from "./index.module.css"
const BlogDelete = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState()
    const history=useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:5050/api/blogs/${id}`).then(res => {
            setBlog(res.data.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])


    const DeleteBlog=async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.delete(`http://localhost:5050/api/blogs/${id}`)
            history(-1)
        }catch(e){
            console.log(e)
        }
    }
  return (
    <>
     <div className='adminPanelDelete blogDelete'>
        <h2>Blog Delete</h2>
        {blog ? (<div className="blog">
          <div className="info">
            <div className={Style.imgg}>
              <img src={blog.src} alt="blogImage" />
            </div>
            <p>{blog.info}</p>
          </div>
          <div className="action">
            <p>Bu məhsulu silmək istəyirsiniz?</p>
            <div className="buttons">
              <button onClick={DeleteBlog}  className='btn btn-danger'>Delete</button>
              <button onClick={() => history(-1)} className='btn btn-primary'>Back</button>
            </div>
          </div>
        </div>) : <p>salam</p>}
  
      </div>
    </>
  )
}

export default BlogDelete