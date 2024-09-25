'use client'
import Navbar from "@/components/Navbar";
import UserProfileBar from "@/components/UserProfileBar";
import UserSiderBar from "@/components/UserSiderBar";
import React, { useState } from "react";

const Home = () => {
  const [searchuser,setSearchUser]=useState('')
  return (
    <div className="h-svh  overflow-auto">
      <Navbar setSearchUser={setSearchUser} searchuser={searchuser} />

      <div className="bar flex  justify-between ">
        <UserSiderBar setSearchUser={setSearchUser} searchuser={searchuser} />

        <UserProfileBar/>
      </div>
    </div>
  );
};

export default Home;
