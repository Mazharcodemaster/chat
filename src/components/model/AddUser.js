import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Input, Stack, Typography } from '@mui/material';
import React from 'react';

const AddUser = ({ setAddUser, addUser }) => {
  const handleClose = () => {
    setAddUser(false);
  };

  return (
    <Dialog open={addUser} onClose={handleClose}>
      <DialogTitle>Add New Friend</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Input placeholder="Enter your friend's name" type="text" fullWidth />
          <Input placeholder="Enter your friend's email" type="email" fullWidth />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button  color="primary">
          Cancel
        </Button>
        <Button  color="primary" variant="contained">
          Add Friend
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUser;
