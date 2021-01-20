import React, { useState } from 'react';
import { useClienteData } from '../../store/Clients'
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Paper';


function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function SelectCostumer() {
  const { clientsData, tendersData } = useClienteData();
  const clientList = [clientsData.map(cliente =>(
   cliente.commercial_name
  ))]
  console.log(clientList)
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = useState(['asdasd','vvvvv','asdasd','ffgsd','fgggg']);
  const [right, setRight] = useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };



  const customList = (items) => (
    <Box className={classes.listItens}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Box>
  );

  return (
    <Grid className={classes.root}>
      <Typography className={classes.title}>
         <h1>Roteiro</h1>
      </Typography>
      <Grid item className={classes.list}>
        {customList(left)}
      </Grid>
      <Grid item className={classes.buttons}>
        <Grid >
          <Button
            size="large"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            <ArrowDownwardIcon />
            COLOCAR
          </Button>
          <Button
            size="large"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            <ArrowUpwardIcon />
            RETIRAR
          </Button>
        </Grid>
      </Grid>
      <Grid item className={classes.list}>
        {customList(right)}
      </Grid>
    </Grid>
  );
}