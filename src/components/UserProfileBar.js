import Image from 'next/image'
import React from 'react'

const UserProfileBar = ({ urlImage = "/User.png", name = "Mazhar", userEmail = "mazhar@gmail.com" }) => {
  return (
    <div className='bg-gray-800  h-dvh min-w-60 flex flex-col items-center p-4'>
      {/* User Image */}
      <div className='w-40 h-40 border-gray-200 border-2 rounded-full overflow-hidden bg-red-200 '>
        <Image className='rounded-full' src={urlImage} width={208} height={208} alt='User image' />
      </div>
      {/* User Info */}
      <div className='text-center text-white'>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='text-sm text-gray-400'>{userEmail}</p>
      </div>
    </div>
  )
}

export default UserProfileBar;
