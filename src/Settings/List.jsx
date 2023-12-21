import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Grid from '../Components/Grid'
import { blue } from '@mui/material/colors';


  
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: '#141414',
      fontWeight:"400",
      '&.Mui-selected': {
        color: '#0000FF',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Lists() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <StyledTab label="Pending" {...a11yProps(0)} />
          <StyledTab label="Accepted" {...a11yProps(1)} />
          <StyledTab label="AWS Created" {...a11yProps(2)} />
          <StyledTab label="Ready to Ship" {...a11yProps(3)} />
          <StyledTab label="Shipped" {...a11yProps(4)} />
          <StyledTab label="Completed" {...a11yProps(5)} />
          <StyledTab label="Cancelled" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Accepted
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        AWB Created
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Ready to Ship
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Shipped
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Completed
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Cancelled
      </CustomTabPanel>
    </Box>
  );
}