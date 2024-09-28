import Image from 'next/image';
import React from 'react';

const UserInfoCard = ({ imageUrl = "/mazhar.jpg", userName = 'mazhar', selectedUserIndex, index }) => {
  return (
    <div className={`flex p-2 rounded-lg justify-between items-center ${selectedUserIndex === index ? 'bg-gray-700' : 'bg-gray-500'}`}>
      <div className='overflow-hidden rounded-full w-12 h-12'>
        <Image
          src={imageUrl}
          alt='user image'
          width={48}
          height={48}
          className="object-cover rounded-full"
        />
      </div>
      <h1 className='text-white ml-2'>{userName}</h1>
    </div>
  );
};

export default UserInfoCard;
