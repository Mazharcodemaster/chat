import * as React from 'react';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SimpleDialogDemo({ newUser, setNewUser }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleClose = () => {
    setNewUser(false);  // Close the dialog
  };

  const handleSubmit = () => {
    console.log("Name:", name, "Email:", email);
    setSelectedValue(`Name: ${name}, Email: ${email}`); // Update selected value
    handleClose();  
  };

  return (
    <div>

      <Dialog onClose={handleClose} open={newUser}>
        <div style={{ padding: '20px' }}>
          <Typography variant="h6">Add New User</Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: '16px' }}
          >
            Submit
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
