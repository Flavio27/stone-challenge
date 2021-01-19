import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

function SelectCostumer({client, lead }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <div position="static" color="default" className={classes.appBar}>
        <Tabs
          value={value}
 
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="action tabs example"
        >
          <Tab label="Clients" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="Leads" {...a11yProps(1)} className={classes.tab} />
        </Tabs>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {client}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {lead}
        </TabPanel>
      </SwipeableViews>

    </div>
  );
}

export default SelectCostumer