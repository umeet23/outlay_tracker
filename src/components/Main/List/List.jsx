import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import { OutlayTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {
  const classes = useStyles();
  const { deleteTransaction } = useContext(OutlayTrackerContext);
  const transactions = [
    {
      id: 1,
      type: 'Income',
      category: 'Salary',
      amount: 100,
      date: 'Mon Aug 30 2021',
    },
    {
      id: 2,
      type: 'Income',
      category: 'Pets',
      amount: 50,
      date: 'Mon Aug 30 2021',
    },
    {
      id: 3,
      type: 'Expense',
      category: 'Food',
      amount: 80,
      date: 'Mon Aug 31 2021',
    },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

// List.propTypes = {};
export default List;
