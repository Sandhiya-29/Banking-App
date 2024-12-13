import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { clearNotifications } from '../store/slices/bankReducer'; 
import Snackbar from '@mui/material/Snackbar';

const Notifications: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.bank.notifications);

  const handleClose = () => {
    dispatch(clearNotifications());
  };

  return (
    <div>
      {notifications.map((notification, index) => (
        <Snackbar
          key={index}
          open={true}
          autoHideDuration={6000}
          onClose={handleClose}
          message={notification}
        />
      ))}
    </div>
  );
};

export default Notifications;
