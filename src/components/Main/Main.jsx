import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';
import useStyles from './styles';

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Outlay Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance $200
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: '1.5rem', marginTop: '20px' }}
        >
          Try saying: Add income for $100 in Category Salary for Monday...
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
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
