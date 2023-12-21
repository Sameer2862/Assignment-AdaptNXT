import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export default function Buttons() {
  return (
    <Stack  direction="row" spacing={2}>
      <Button variant="outlined" sx={{border:"1px solid	#808080", color:"#141414",fontWeight:"400",textTransform: 'none'}} startIcon={<ExitToAppOutlinedIcon />}>
        Import Orders
      </Button>
      <Button variant="outlined" sx={{border:"1px solid	#D3D3D3", color:"#D3D3D3",textTransform: 'none'}} startIcon={< SendIcon/>}>
        Accept
      </Button>
      <Button variant="outlined" sx={{border:"1px solid	#D3D3D3", color:"#D3D3D3",textTransform: 'none'}} startIcon={<LocalPrintshopRoundedIcon />}>
        Print
      </Button>
      <Button variant="contained" sx={{left:"42rem",textTransform: 'none'}} startIcon={< CachedRoundedIcon/>}>
        Refresh
      </Button>
    </Stack>
  );
}