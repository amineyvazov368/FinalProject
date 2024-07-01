import React, { useContext } from 'react'
import Style from "./index.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import bcrypt from 'bcryptjs'
import { dataContext } from '../../../context/context';
import axios from 'axios';
const index = () => {
  const navigate=useNavigate()
  const { users, setUserToken, setError } = useContext(dataContext)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',

    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: async (values, { setFieldError }) => {
      const target = users.find((user) => user.email === values.email);
      if (target) {
          const match = await bcrypt.compare(values.password, target.password);
          if (match) {

              await axios.post('http://localhost:5050/api/users/login', values).then(res => {
                  localStorage.setItem('token', res.data.token)
                  const token = localStorage.getItem('token')
                  if (token) {
                      const decode = jwtDecode(token)
                      setUserToken(decode)
                  }
                  console.log(res)
                  if (target.role === 'admin') {
                      navigate('/admin');
                  } else {
                      navigate('/')
                  }
              
                  toast.success(` Welcome back, ${target.username} `)


              }).catch(err => {
                  setError(err)
              })
              formik.resetForm();
          } else {
              setFieldError('password', 'Incorrect Password,Please Enter Correct Password')

          }
      } else {
          setFieldError('email', 'Email Not Found,Please Enter Correct Email');

      }

  }
  });
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      </style>
     
      <section className={Style.register}>
        <Container>
          <Row>
            <Col lg={5}>


              <form className={Style.sing} onSubmit={formik.handleSubmit}>
                <h1>Sign up</h1>

                <br /> <br />
                <input className={Style.singup}
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                  <br /> <br />
                <input className={Style.singup}
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null} <br /> <br />
                <Link to={"/register"}>dont have an account?</Link> <br /> <br />
                <button className={Style.buttonn} type="submit"><b>Submit</b></button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>


    </>
  )
}

export default index