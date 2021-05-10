import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as profileAction from '../../store/profile/profile.action'
import {LOGOUT} from '../../store/profile/profile.types'

const Dashboard = () =>{
  const dispatch = useDispatch()  
   const { userInfo } = useSelector(state => state.profileReducer)
   dispatch
    return(
      <div className="App">
        <h1> Dashboard page {userInfo.nickName} </h1>
        <button onClick={()=>{ dispatch({type:LOGOUT})}}>Click to logout</button>
      </div>
    );
  }
 

export default Dashboard;
