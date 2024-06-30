import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Style from "./index.module.css"
import AdminPanelTable from '../../../conponent/Admin/common/AdminPanelTable';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDeleteBlogsMutation, useGetBlogsQuery } from '../../../services/BlogsQuerySlice';
const index = () => {
 
  const [blogss, setBlogss]=useState([])

  useEffect(()=>{
      
    axios.get("http://localhost:5050/api/blogs").then(res=>{
      console.log(res)
      setBlogss(res.data.blogs)
     //  setTeams(res.data)
     }).catch(e=>{
       console.log(e)
     })
  },[])

  let rows=[]
  const columns1=[
     { id: "id", label: "Id", minWidth: 20,maxWidth:200 },
     { id: "title", label: "Title", minWidth: 20,maxWidth:200 },
     { id: "info", label: "Info", minWidth: 20,maxWidth:200 },
     { id: "buttons", label: "Actions", minWidth: 20,maxWidth:200 },
   ]

   console.log(blogss)
   blogss.map((x,i)=>{
     rows.push({id:i,title:x.title,info:x.info,buttons:{update:`/admin/adminBlog/update/${x._id}`,delete:`/admin/adminBlog/delete/${x._id}`}})
   })

   const { data: blogs, error, isLoading, refetch, } = useGetBlogsQuery();
   const [deleteOne, { isError, isSuccess }] = useDeleteBlogsMutation();


  return (
   <>
  <h1>Blogs</h1> <br />

  <div className='Brands adminList'>
    <div className="listInfo">
    <h2>Blog</h2>
    <div className="add">
        <Link className='btn btn-success' to={"create"}>Create</Link>
    </div>
    </div>
    <ul className='list'>
        <AdminPanelTable Rows={rows} Columns={columns1} />
    </ul>
 
</div>

  <br/>
   </>
  )
}

export default index