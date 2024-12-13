import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface ProfileCardProps {
  accountHolderName: string;
  accountNumber: string;
  contactInfo: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ accountHolderName, accountNumber, contactInfo }) => {
  return (
    <Card sx={{ width: '100%', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Account Details
        </Typography>
        <Box>
          <Typography variant="body1"><strong>Account Holder:</strong> {accountHolderName}</Typography>
          <Typography variant="body1"><strong>Account Number:</strong> {accountNumber}</Typography>
          <Typography variant="body1"><strong>Contact Info:</strong> {contactInfo}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
