import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../contexts/login";
import axios from "axios";

const HandelUsersAndDelete = () => {
  const loginCompContext = useContext(loginContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user", {
      headers: {
        Authorization: `Bearer ${loginCompContext.token}`,
      },
    }).then((result)=>{
        // console.log(result.data);
        setUsers(result.data);
    }).catch((err)=>{
        console.log(err);
    })
  },[]);

  return (
    <>
    <div>
        {users.map((user,index)=>{
            console.log(user);
            return (
                <div key={index}>
                    <p>First name: {user.firstName}</p>
                    <p>Last name: {user.lastName}</p>
                    <p>Contry: {user.country}</p>
                    <p>City: {user.city}</p>
                    <p>Email: {user.email}</p>
                </div>
            )
        })}
    </div>
    </>
  )
};

export default HandelUsersAndDelete;
