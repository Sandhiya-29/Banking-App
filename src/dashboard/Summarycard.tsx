import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  title: string;
  value: string | number;
}

const SummaryCard: React.FC<Props> = ({ title, value }) => (
  <Card sx={{ minWidth: 200 }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4" color="primary">
        {value}
      </Typography>
    </CardContent>
  </Card>
);

export default SummaryCard;
