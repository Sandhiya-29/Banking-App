import React, { useEffect } from 'react';
import { Grid, Box, Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import BarGraph from './BarGraph';
import Table from './Table';
import SummaryCard from './Summarycard';
import Header from './Header';
import ProfileCard from './ProfileCard';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { clearNotifications } from '../store/slices/bankReducer'; 

const Dashboard: React.FC = () => {
  const accounts = useSelector((state: RootState) => state.account.accounts);
  const notifications = useSelector((state: RootState) => state.bank.notifications);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const account = accounts[0]; 

  const graphData = accounts.map((account) => [
    { name: 'Deposits', value: account.deposits },
    { name: 'Withdrawals', value: account.withdrawals },
  ]).flat();

  const pieChartData = [
    { name: 'Total Deposits', value: accounts.reduce((acc, item) => acc + item.deposits, 0) },
    { name: 'Total Withdrawals', value: accounts.reduce((acc, item) => acc + item.withdrawals, 0) },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  const columns = React.useMemo(
    () => [
      { Header: 'Account Number', accessor: 'accountNumber' },
      { Header: 'Balance', accessor: 'balance' },
      { Header: 'Deposits', accessor: 'deposits' },
      { Header: 'Withdrawals', accessor: 'withdrawals' },
    ],
    []
  );

  
  useEffect(() => {
    if (notifications.length > 0) {
      const timeout = setTimeout(() => {
        dispatch(clearNotifications());
      }, 5000); 
      return () => clearTimeout(timeout);
    }
  }, [notifications, dispatch]);

  return (
    <>
      <Header />
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          {/* Profile Section */}
          <Grid item xs={12} md={4}>
            <ProfileCard
              accountHolderName={user.username || "Guest"} // Show username from userSlice
              accountNumber={account.accountNumber}       // Account number from account
              contactInfo={user.email || "Not Provided"}   // Use email as contact info
            />
          </Grid>

          {/* Summary Cards */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <SummaryCard title="Total Balance" value={accounts.reduce((acc, item) => acc + item.balance, 0)} />
              <SummaryCard title="Total Deposits" value={accounts.reduce((acc, item) => acc + item.deposits, 0)} />
              <SummaryCard title="Total Withdrawals" value={accounts.reduce((acc, item) => acc + item.withdrawals, 0)} />
            </Grid>
          </Grid>

          {/* Bar Graph and Pie Chart */}
          <Grid item xs={12} md={6}>
            <BarGraph data={graphData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <PieChart width={300} height={300}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Grid>

          {/* Transactions Table */}
          <Grid item xs={12}>
            <Table columns={columns} data={accounts} />
          </Grid>
        </Grid>

        {/* Notifications Section */}
        {notifications.length > 0 && (
          <Box sx={{ position: 'fixed', top: 0, right: 0, zIndex: 1000 }}>
            <Snackbar
              open={true}
              autoHideDuration={5000}
              onClose={() => dispatch(clearNotifications())}
            >
              <Alert onClose={() => dispatch(clearNotifications())} severity="info">
                {notifications[notifications.length - 1]}
              </Alert>
            </Snackbar>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
