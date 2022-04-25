import React, { useEffect } from 'react'
import styles from "./Info.module.css"
import { useSelector } from "react-redux"

function Info() {
    const user = useSelector(state => state.user)
    console.log(user)




    return <div>
        {/* <img src={profile.pic} alt="user pic" />
        <h2>{name}</h2>
        <p>{usernikname}</p>
        <div>
            <p><i class="fa-solid fa-user-group"></i>{followers} followers</p>
            <p><i class="fa-solid fa-user"></i>{following} following</p>
        </div> */}
    </div>
}


export default Info