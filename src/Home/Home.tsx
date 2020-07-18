import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import LoadDialog from './LoadDialog';
import logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    maxWidth: "100%",
    flexBasis: "100%"
  },
  button: {
    width: "200px"
  }
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid alignItems="center" container className={classes.root} direction="column" spacing={2}>
      <Grid item>
        <img src={logo} className="App-logo" alt="logo" />
      </Grid>
      <Grid item>
        <Link to="/new">
          <Button variant="contained" className={classes.button} >Setup New Battle</Button>
        </Link>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.button} onClick={handleClickOpen}>Load Battle</Button>
        <LoadDialog open={open} handleClose={handleClose}></LoadDialog>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.button} >Quick Calc</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.button} >Advanced Calc</Button>
      </Grid>
    </Grid>
  );
}

export default Home;