import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
// import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const Details = ({ title }) => {
  const classes = useStyles();

  const styleCard = title === 'Income' ? classes.income : classes.expense;

  return (
    <Card className={styleCard}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut Data="DATA" /> */}
      </CardContent>
    </Card>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Details;
