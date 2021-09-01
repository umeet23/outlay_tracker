import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import { OutlayTrackerContext } from '../../context/context';
import Form from './Form/Form';
import InfoCard from '../InfoCard';
import List from './List/List';
import useStyles from './styles';

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(OutlayTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Outlay Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance $ {balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: '1.5rem', marginTop: '20px' }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

// Main.propTypes = {};

export default Main;
