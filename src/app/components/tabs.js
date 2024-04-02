import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginTop: '100px' }}>
    <Box sx={{ width: isSmallScreen ? '90%' : '50%', backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab sx={{color: '#ff0000', '&.Mui-selected': { color: '#ff0000' }}} icon={<FavoriteIcon />}  value="1" />
          <Tab sx={{color: '#ff0000', '&.Mui-selected': { color: '#ff0000' }}} icon={<ShoppingCartIcon />} value="2" />
          <Tab sx={{color: '#ff0000', '&.Mui-selected': { color: '#ff0000' }}} icon={<FlightTakeoffIcon />} value="3" />
        </TabList>
        </Box>
        <TabPanel value="1">
          <Box p={isSmallScreen ? 1 : 2}>
            <p>1-Welcome to Wikitech.io, your premier destination for all things technical! Whether you're a seasoned developer or a newcomer to the world of coding, our Instagram page is your one-stop shop for invaluable insights, practical tips, and engaging tutorials. From mastering programming languages to staying updated on the latest tech trends, we're here to empower you on your journey towards technological proficiency. At Wikitech.io, we believe in the power of community and collaboration. Join our vibrant online community as we explore the fascinating realms of software development, delve into the intricacies of coding, and inspire each other to reach new heights of innovation. Together, let's unlock the endless possibilities of technology and embark on a journey of continuous learning and growth.we believe in the power of community and collaboration. Welcome to Wikitech.io – where curiosity meets expertise!</p>
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Box p={isSmallScreen ? 1 : 2}>
            <p>2-Welcome to Wikitech.io, your premier destination for all things technical! Whether you're a seasoned developer or a newcomer to the world of coding, our Instagram page is your one-stop shop for invaluable insights, practical tips, and engaging tutorials. From mastering programming languages to staying updated on the latest tech trends, we're here to empower you on your journey towards technological proficiency. At Wikitech.io, we believe in the power of community and collaboration. Join our vibrant online community as we explore the fascinating realms of software development, delve into the intricacies of coding, and inspire each other to reach new heights of innovation. Together, let's unlock the endless possibilities of technology and embark on a journey of continuous learning and growth.we believe in the power of community and collaboration. Welcome to Wikitech.io – where curiosity meets expertise!</p>
          </Box>
        </TabPanel>
        <TabPanel value="3">
          <Box p={isSmallScreen ? 1 : 2}>
            <p>3-Welcome to Wikitech.io, your premier destination for all things technical! Whether you're a seasoned developer or a newcomer to the world of coding, our Instagram page is your one-stop shop for invaluable insights, practical tips, and engaging tutorials. From mastering programming languages to staying updated on the latest tech trends, we're here to empower you on your journey towards technological proficiency. At Wikitech.io, we believe in the power of community and collaboration. Join our vibrant online community as we explore the fascinating realms of software development, delve into the intricacies of coding, and inspire each other to reach new heights of innovation. Together, let's unlock the endless possibilities of technology and embark on a journey of continuous learning and growth.we believe in the power of community and collaboration. Welcome to Wikitech.io – where curiosity meets expertise!</p>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  </Box>
  );
}
