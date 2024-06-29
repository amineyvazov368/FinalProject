import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import Style from "./index.module.css"
import { FaSearch } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { useDeleteBlogsMutation, useGetBlogsQuery } from '../../../services/BlogsQuerySlice';
const index = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      about: '',
      src: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      about: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      src: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { data: blogs, error, isLoading, refetch, } = useGetBlogsQuery()
  const [deleteOne, { isError, isSuccess }] = useDeleteBlogsMutation();
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      </style>
      <section className={Style.intro}>
        <Container>
          <Row>
            <Col lg={3}>
              <h4>Home <b><GoChevronRight /></b> Blog <b><GoChevronRight /></b> </h4>
              <h1>Blog</h1>
            </Col>

          </Row>
        </Container>
      </section>
      <section className={Style.allBlogs}>
        <Container>
          <Row className={Style.big}>
            <Col lg={7}>
              <Row className={Style.small} >
                {blogs && blogs.blogs.map((blog) => {
                  return (
                    <Col lg={6} md={6} sm={12} className={Style.blog}>
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
              </Row>

            </Col>
            <Col lg={5}>
              <form className={Style.add} onSubmit={formik.handleSubmit}>
                <h4>Add ABOUT  BARBER</h4> <br />
                <input className={Style.singup}
                  id="name"
                  name="name"
                  type="text"
                  placeholder='Name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
                <br /> <br />


                <input className={Style.singup}
                  id="about"
                  name="about"
                  type="text"
                  placeholder='About'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.about}
                />
                {formik.touched.about && formik.errors.about ? (
                  <div>{formik.errors.about}</div>
                ) : null}
                <br /> <br />

                <input className={Style.singup}
                  id="src"
                  name="src"
                  type="url"
                  placeholder='Src'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.src}
                />
                {formik.touched.src && formik.errors.src ? (
                  <div>{formik.errors.src}</div>
                ) : null}
                <br /> <br />
                <button className={Style.buttonn} type="submit">Submit</button>
              </form>

              <div className={Style.parag}>
                <h5>PARAGRAPH</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default index