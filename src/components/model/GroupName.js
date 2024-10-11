import { Button, Dialog, Input, Stack } from '@mui/material'
import React from 'react'

const GroupName = ({ confirm, setConfirm }) => {
  return (
    <Dialog onClose={() => setConfirm(false)} open={confirm} fullWidth>
      <Stack
        spacing={2}
        style={{
          padding: "2rem",
          alignItems: "center", // Center content horizontally
        }}
      >
        <Input placeholder="Group Name" fullWidth />
        <Button variant="contained" style={{ width: '200px' }}>
          Create Group
        </Button>
      </Stack>
    </Dialog>
  )
}

export default GroupName;
