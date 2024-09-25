import Navbar from "@/components/Navbar";
import UserProfileBar from "@/components/UserProfileBar";
import UserSiderBar from "@/components/UserSiderBar";
import React from "react";

const Home = () => {
  return (
    <div className="h-svh  overflow-auto">
      <Navbar />

      <div className="bar flex  justify-between ">
        <UserSiderBar />

        <UserProfileBar/>
      </div>
    </div>
  );
};

export default Home;
