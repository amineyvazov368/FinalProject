import React from 'react'
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from 'react-redux'
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from './index.module.css'
import { Container } from '@mui/material';
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { useDeleteBlogsMutation, useGetBlogsQuery } from '../../services/BlogsQuerySlice';
const index = () => {
    const { data: blogs, error, isLoading, refetch, } =useGetBlogsQuery()
    const [deleteOne, { isError, isSuccess }] = useDeleteBlogsMutation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
   <>
    <Slider {...settings} className={Style.blogs}>
   
    { blogs && blogs.blogs.map((blog)=>{
        return(
            <Col  lg={4} md={6} sm={12} className={Style.blog}>
            <div className={Style.blogImg}>
                <img src={blog.src} alt="" />
            </div>
            <div className={Style.info}>
            <div className={Style.time}> <span><FaCalendarAlt />OCT.12, 2020 <IoMdPerson /> ADMIN <AiFillMessage />  3</span></div> <br />
            <div className={Style.blogText}>
                <h5><b>{blog.title}</b></h5>
                <p>{blog.info}</p>
            </div>
            </div>
           
            </Col>
        )
    })}
  
   </Slider>
   
   </>
  )
}

export default index