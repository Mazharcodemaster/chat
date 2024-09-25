import React from 'react'
import UserInfoCard from './UserInfoCard'

const UserSiderBar = () => {
  return (
    <div className='w-1/6 h-svh overflow-auto bg-gray-900  p-2 flex flex-col gap-2'>

      
        <UserInfoCard/>
        <UserInfoCard/>
        <UserInfoCard/>
    </div>
  )
}

export default UserSiderBar 