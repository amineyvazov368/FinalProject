import React from 'react'
import Style from "./index.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GoChevronRight } from "react-icons/go";
const index = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      src: '',
      role: '',
    },
    validationSchema: Yup.object({
      src: Yup.string()
        .required('Required'),
        username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        email: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        password: Yup.number()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        role: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      </style>
      <section className={Style.intro}>
        <Container>
          <Row>
            <Col lg={3}>
              <h4>Home <b><GoChevronRight /></b> Register <b><GoChevronRight /></b> </h4>
              <h1>Register</h1>
            </Col>

          </Row>
        </Container>
      </section>
      <section className={Style.register}>
        <Container>
          <Row>
            <Col lg={5}>
           

<form className={Style.sing} onSubmit={formik.handleSubmit}>
<h1>Sing up</h1>
  <input className={Style.singup}
    id="username"
    name="username"
    type="text"
    placeholder='Username'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.username}
  />
  {formik.touched.username && formik.errors.username ? (
    <div>{formik.errors.username}</div>
  ) : null}
<br /> <br />
  <input className={Style.singup}
    id="email"
    name="email"
    type="text"
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
    type="number"
    placeholder='Password'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.password}
  />
  {formik.touched.password && formik.errors.password ? (
    <div>{formik.errors.password}</div>
  ) : null}
<br />
<br />
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
<br />
<br />

<input className={Style.singup}
    id="role"
    name="role"
    type="text"
    placeholder='Role'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.role}
  />
  {formik.touched.role && formik.errors.role ? (
    <div>{formik.errors.role}</div>
  ) : null}
<br />
<br />
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