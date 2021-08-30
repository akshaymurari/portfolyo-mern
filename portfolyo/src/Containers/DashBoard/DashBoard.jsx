import React, { useState,useEffect } from "react";
import "./DashBoard.scss";
import dashboardBackgroundVideo from "../../assets/dashboardBackground.mp4";
import { NavLink } from "reactstrap";
import NavBar from "../../Components/Navbar/Navbar";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Baseurl} from '../../App';
import {useSelector} from "react-redux";

const DashBoard = () => {
  const H = useHistory();
  const data = useSelector(state=>state);
  const [userName, setuserName] = useState("");
  useEffect(async ()=>{
    try{
      const result = await axios({
        method:"post",
        url:`${Baseurl}/verifytoken`,
        data:{token:localStorage.getItem("token")}
      });
      console.log(result.data);
      if(localStorage.getItem(`${result.data.username}_data`)===null){
        localStorage.setItem(`${result.data.username}_data`,JSON.stringify(data));
      }
      localStorage.setItem("username",result.data.username);
      setuserName(result.data.username);
    }catch{
      H.push("/error")
    }
  },[]);
  return (
    <>
      <NavBar/>
      <div className="dashboardPage">
        <div className="dashboarddiv1">
          <h1 className="dashboardwelcomeh1" >
            Welcome <br />
            <span style={{overflowX:"scroll"}}>{userName}</span>
          </h1>
          <p className="dashboardwelcomeP">
            You are one step away from creating your beautiful portfolio Click
            below to get started!
          </p>
          <NavLink
            to="/makewebsite"
            className="dashBoardNavLink"
            style={{
              textDecoration: "none",
              width:"max-content",
              
            }}
          >
          <i onClick={()=>{H.push("/makewebsite")}} className="fas text-left fa-arrow-circle-right dashBoardClickHere"></i>
          </NavLink>
        </div>
        <div className="dashboarddiv2">
          <video autoPlay loop muted className="dashboardVideo">
            <source src="https://player.vimeo.com/external/159035843.sd.mp4?s=0d309dd63ee62d4efc5e0e471824ed7fab0f7f85&profile_id=164&oauth2_token_id=57447761"></source>
          </video>
          <div className="videoBlender"></div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
