import React, { useState } from "react";
import {
  Dialog,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  Avatar,
  Checkbox,
  TextField,
  InputAdornment,
  Alert,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { blue } from "@mui/material/colors";

const GroupUser = ({ createGroup, setCreateGroup }) => {
  const userArray = [
    { userName: "azhar", imageUrl: "/mazhar.jpg" },
    { userName: "mazhar", imageUrl: "/mazhar.jpg" },
    { userName: "ali", imageUrl: "/mazhar.jpg" },
    // Add more users as needed
  ];

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClose = () => {
    setCreateGroup(false);
  };

  // Handles selecting/deselecting users
  const handleListItemClick = (userName) => {

    
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userName)
        ? prevSelected.filter((name) => name !== userName)
        : [...prevSelected, userName]
    );
    console.log(selectedUsers);
    
  };

  // Filters users based on search term
  const filteredUsers = userArray.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={createGroup} onClose={handleClose} fullWidth>
      <Stack spacing={2} padding={2}>
        <Typography variant="h6">Create Group</Typography>

        {/* Search bar */}
        <TextField
          placeholder="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* User list */}
        <List sx={{ pt: 0 }}>
          {filteredUsers.map((user, index) => (
            <ListItem key={index} disableGutters>
              <ListItemButton onClick={() => handleListItemClick(user.userName)}>
                <ListItemAvatar>
                  <Avatar src={user.imageUrl} alt={user.userName}>
                    {!user.imageUrl && <PersonIcon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.userName} />
                
                {/* Checkbox - reflects if user is selected */}
            <input type="checkbox" onClick={()=>handleListItemClick(user.userName)}/>
              </ListItemButton>
            </ListItem>
          ))}

        </List>

        
      </Stack>
    </Dialog>
  );
};

export default GroupUser;
