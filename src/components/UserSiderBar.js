import React, { useEffect, useState } from 'react';
import UserInfoCard from './UserInfoCard';

const UserSiderBar = ({searchuser,setSearchUser}) => {

  const [selectedUserIndex,setSelectedUserIndex]=useState(0)
  
  const userArray = [
    {
      userName: "azhar",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "mazhar",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
    {
      userName: "ali",
      imageUrl: "/mazhar.jpg",
    },
  ];
  const [filterUser,setFilterUser]=useState(userArray)

  useEffect(()=>{
    
    if(searchuser){
      let filteredUser= userArray.filter((user)=>user.userName.toLowerCase().includes(searchuser.toLowerCase()))
      setFilterUser(filteredUser)

    }
    else{
      setFilterUser(userArray)
    }

  },[searchuser])

  return (
    <div className='min-w-56 h-screen overflow-auto bg-gray-900 p-2 flex flex-col gap-2 pb-5'>
      {filterUser.map((user, index) => (
        <div  onClick={()=>setSelectedUserIndex(index)} className={`hover:cursor-pointer `}  key={index}>
          <UserInfoCard index={index} selectedUserIndex={selectedUserIndex} userName={user.userName} imageUrl={user.imageUrl} />
        </div>
      ))}
    </div>
  );
};

export default UserSiderBar;
