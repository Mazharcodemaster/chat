import React from 'react';
import UserInfoCard from './UserInfoCard';

const UserSiderBar = ({searchuser,setSearchUser}) => {
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
  ];

  return (
    <div className='w-1/6 h-screen overflow-auto bg-gray-900 p-2 flex flex-col gap-2'>
      {userArray.map((user, index) => (
        <div key={index}>
          <UserInfoCard userName={user.userName} imageUrl={user.imageUrl} />
        </div>
      ))}
    </div>
  );
};

export default UserSiderBar;
