import { createContext, useEffect, useState } from "react"
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
const dataContext = createContext(null)


const DataContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userToken, setUserToken] = useState(null)    
    const getAllUsers = async () => {
        setLoading(true)
        await axios.get(`http://localhost:5050/api/users`).then(res => {
            setUsers(res.data.data)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            setError(err)
        })
    }
    const getOneUser = async (id) => {
        await axios.get(`http://localhost:5050/api/users/${id}`).then(res => {
            setUser(res.data.data)
        }).catch(err => {
            setError(err)
        })
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5050/api/users/${id}`).then(res => {
            const updateUsers = users.filter(user => user._id !== id)
            setUsers(updateUsers)
        }).catch(err => {
            setError(err)
        })
    }



    const getMeFunction = async () => {
        const token = localStorage.getItem('token')
        await axios.get(`http://localhost:5050/api/users/getMe`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (token) {
                const decode = jwtDecode(token)
                setUserToken(decode)
            }
        }).catch(err => {
            setError(err)
        })
    }
    useEffect(() => {
        getAllUsers()


    }, [])
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            getMeFunction()
        }
    }, [])

    console.log(userToken)
    const values = {
        getAllUsers, getOneUser, deleteUser, users, setUsers, user, setUser, loading, setLoading, error, setError, userToken,setUserToken
    }

    return (
        <dataContext.Provider value={values}>
            {children}
        </dataContext.Provider>
    )
}

export { dataContext, DataContextProvider }