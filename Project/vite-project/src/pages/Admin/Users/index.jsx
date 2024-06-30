import React, { useEffect, useState } from 'react'
import { useDeleteUsersMutation, useGetUsersQuery } from '../../../services/UsersQuerySlice';
import AdminPanelTable from '../../../conponent/Admin/common/AdminPanelTable';
import { Link } from 'react-router-dom';
import axios from 'axios';
const index = () => {
  const [userss, setUserss] = useState([])

  useEffect(() => {

    axios.get("http://localhost:5050/api/users").then(res => {
      console.log(res)
      setUserss(res.data.users)
      //  setTeams(res.data)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  let rows = []
  const columns1 = [
    { id: "id", label: "Id", minWidth: 20, maxWidth: 200 },
    { id: "username", label: "Username", minWidth: 20, maxWidth: 200 },
    { id: "email", label: "Email", minWidth: 20, maxWidth: 200 },
    { id: "src", label: "Src", minWidth: 20, maxWidth: 200 },
    { id: "role", label: "Role", minWidth: 20, maxWidth: 200 },
    { id: "buttons", label: "Actions", minWidth: 20, maxWidth: 200 },
  ]

  console.log(userss)
  userss.map((x, i) => {
    rows.push({
      id: i, username: x.username, email: x.email,
      src: x.src,
      role: x.role, buttons: { update: `/admin/adminTeam/update/${x._id}`, delete: `/admin/adminTeam/delete/${x._id}` }
    })
  })
  const { data: users, error, isLoading, refetch, } = useGetUsersQuery()
  const [deleteOne, { isError, isSuccess }] = useDeleteUsersMutation();
  return (
    <>
      <div className='Brands adminList'>
        <div className="listInfo">
          <h2>Teams</h2>
          <div className="add">
            <Link className='btn btn-success' to={"create"}>Create</Link>
          </div>
        </div>
        <ul className='list'>
          <AdminPanelTable Rows={rows} Columns={columns1} />
        </ul>

      </div>

      <br />


    </>
  )
}

export default index