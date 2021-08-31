import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../hooks/useTransactions';
import useStyles from './styles';

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  const styleCard = title === 'Income' ? classes.income : classes.expense;

  return (
    <Card className={styleCard}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Details;
