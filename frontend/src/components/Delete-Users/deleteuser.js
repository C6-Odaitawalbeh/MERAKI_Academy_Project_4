import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../contexts/login";
import axios from "axios";
import { FcDeleteDatabase, FcLeft  } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const HandelUsersAndDelete = () => {
  const loginCompContext = useContext(loginContext);
  const [users, setUsers] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/user", {
        headers: {
          Authorization: `Bearer ${loginCompContext.token}`,
        },
      })
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="back">
        <FcLeft
          className="back-icon-react"
          size={30}
          onClick={() => {
            history(-1);
          }}
        />
        <p className="back-string">Back</p>
      </div>
      <div>
        {users.map((user, index) => {
          console.log(user);
          return (
            <div className="container" key={index}>
              <table>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Contry</th>
                  <th>City</th>
                  <th>Email</th>
                  <th>DELETE</th>
                </tr>
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.country}</td>
                  <td>{user.city}</td>
                  <td>{user.email}</td>
                  <td>
                    <FcDeleteDatabase className="icon-delete" size={28} />
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HandelUsersAndDelete;
