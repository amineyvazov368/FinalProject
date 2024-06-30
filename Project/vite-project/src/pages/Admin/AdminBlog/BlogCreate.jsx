import React from 'react'
import { useFormik } from 'formik';
import Style from "./index.module.css"
import * as Yup from 'yup';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BlogCreate = () => {
    const history = useNavigate();
    const formik = useFormik({
      initialValues: {
        src: '',
        title: '',
        info: '',
      },
      validationSchema: Yup.object({
        src: Yup.string()
          .required('Required'),
        title: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        info: Yup.string().required('Required'),
      }),
      onSubmit: values => {
        console.log("salam");
          try {
  
            const response = axios.post("http://localhost:5050/api/blogs", values);
            history(-1)
          }
          catch (e) {
            console.log(e.message)
          }
  
      },
    });
  return (
    <>
     <h1>Add Blog</h1>

<form className={Style.form} onSubmit={formik.handleSubmit}>
  <input className={Style.fromInput}
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
  <input className={Style.fromInput}
    id="title"
    name="title"
    type="text"
    placeholder='Title'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.title}
  />
  {formik.touched.title && formik.errors.title ? (
    <div>{formik.errors.title}</div>
  ) : null}
  <br /> <br />
  <input className={Style.fromInput}
    id="info"
    name="info"
    type="text"
    placeholder='Info'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.info}
  />
  {formik.touched.info && formik.errors.info ? (
    <div>{formik.errors.info}</div>
  ) : null}
  <br />
  <br />
  <button className={Style.button} type="submit"><b>Submit</b></button>
</form>
    
    </>
  )
}

export default BlogCreate