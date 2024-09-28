"use client";
import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
import UserProfileBar from "@/components/UserProfileBar";
import UserSiderBar from "@/components/UserSiderBar";
import React, { useState } from "react";

const Home = () => {
  const [searchuser, setSearchUser] = useState("");
  return (
    <div className=" h-dvh overflow-auto ">
      <div className="sticky top-0">
        <Navbar setSearchUser={setSearchUser} searchuser={searchuser} />
      </div>

      <div className="bar flex  justify-between ">
        <UserSiderBar setSearchUser={setSearchUser} searchuser={searchuser} />

        <Chat />

        <UserProfileBar />
      </div>
    </div>
  );
};

export default Home;
