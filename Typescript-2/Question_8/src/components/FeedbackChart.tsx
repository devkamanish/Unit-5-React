import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Box } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const FeedbackChart: React.FC = () => {
  const entries = useSelector((state: RootState) => state.feedback.entries);

  const counts = [1, 2, 3, 4, 5].map(r => entries.filter(e => e.rating === r).length);

  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
      label: 'Number of Feedbacks',
      data: counts,
      backgroundColor: 'teal',
    }],
  };

  return (
    <Box maxW="md" mx="auto" mt={6}>
      <Bar data={data} />
    </Box>
  );
};

export default FeedbackChart;
