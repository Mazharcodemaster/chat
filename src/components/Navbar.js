'use client';
import React, { useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupUser from "./model/CreateGroup";

const Navbar = () => {
  const [createGroup,setCreateGroup]=useState(false)
  const handleChange = (e) => {
    setSearchUser(e.target.value);
  };

  return (
    <div className="bg-gray-900 px-5 py-2 flex justify-between items-center">
      <span className="text-white">Chat App</span>

      {/* Search Bar */}
      <div className="bg-red-900 rounded-full w-1/3">
        <input
          onChange={handleChange}
          className="rounded-full py-2 px-3 text-black w-full"
          placeholder="Search..."
        />
      </div>

      {/* Button Group */}
      <div className="flex items-center gap-5">
        <button className="" >
          <AddIcon style={{ color: "white" }} />
        </button>
        <button onClick={()=>setCreateGroup(true)} className="">
          <GroupIcon style={{ color: "white" }} />
        </button>
        <button className="">
          <NotificationsIcon style={{ color: "white" }} />
        </button>

        <button className="bg-gray-500 px-5 py-2 rounded-lg self-center">
          LogIn
        </button>
      </div>
      {
        createGroup && <GroupUser createGroup={createGroup} setCreateGroup={setCreateGroup}  />
      }
    </div>
  );
};

export default Navbar;
