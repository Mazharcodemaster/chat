import Image from 'next/image';
import React from 'react';

const UserInfoCard = ({ imageUrl = "/mazhar.jpg", userName = 'mazhar' }) => {
  return (
    <div className='flex bg-gray-800 p-2 rounded-lg justify-between items-center'>
      <div className='overflow-hidden rounded-full w-12 h-12'> 
        <Image
          className='rounded-full'
          src={imageUrl}
          alt='user image'
          width={48} 
          height={48}
          objectFit='cover'
        />
      </div>
      <h1 className='text-white ml-2'>{userName}</h1>
    </div>
  );
}

export default UserInfoCard;
