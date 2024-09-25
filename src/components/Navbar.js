import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
    <div className='bg-gray-900 px-5 py-2  flex justify-between items-center'>
        Chat App


    {/* button */}
    <div className=' flex items-center   gap-16 justify-between ' >
     <div className='flex gap-5 '>
     <button className=''><SearchIcon/></button>
     <button className=''><AddIcon/></button>
     <button className=''><GroupIcon/></button>
     <button className=''><NotificationsIcon/></button>
     </div>
     <button className='bg-gray-500 px-5 py-2 rounded-lg self-center'>LogIn</button>
    </div>
    </div>
  )
}

export default Navbar