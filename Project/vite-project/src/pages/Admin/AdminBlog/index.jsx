import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Style from "./index.module.css"
import AdminPanelTable from '../../../conponent/Admin/common/AdminPanelTable';

const index = () => {
  const formik = useFormik({
    initialValues: {
      src: '',
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      src: Yup.string()
        .required('Required'),
        title: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        description: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
   <>
   <h1>Add Teams</h1>

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
    id="description"
    name="description"
    type="text"
    placeholder='Description'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.description}
  />
  {formik.touched.description && formik.errors.description ? (
    <div>{formik.errors.description}</div>
  ) : null}
<br />
<br />
  <button className={Style.button} type="submit"><b>Submit</b></button>
</form>
   
   </>
  )
}

export default index