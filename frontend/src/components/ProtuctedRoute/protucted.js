import React, { useEffect, useState } from "react";

const ProtectedRouter = () => {

    const [usertoken, setUserToken] = useState(localStorage.getItem("token"));
    const [role, setRole] = useState(localStorage.getItem("Role"))
    console.log(usertoken);
    const [user, setUser] = useState(false);
    const [admin, setAdmin] = useState(false);

    useEffect(()=>{
        if (usertoken != null) {
            if (role === "6337916637b11ff4da1d5400") {
                setUser(true);
                setAdmin(false);
            } else {
                setUser(false);
                setAdmin(true);
            }
            
        } else {
            setUser(false);
            setAdmin(false);
        }    
    },[]);

    return [usertoken,role,user,admin];

};

export default ProtectedRouter;