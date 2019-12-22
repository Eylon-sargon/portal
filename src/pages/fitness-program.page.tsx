import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { dayStateSeedData } from '../store/day/day.seed-data';
import DayCard from '../components/fitness-module/DayCard';

const FitnessProgramPage = () => {
	return (
		<Grid container>
			{dayStateSeedData.map(day => (
				<Grid item xs={12} md={4} key={day.index}>
					<DayCard day={day} />
				</Grid>
			))}
		</Grid>
	);
};

export default FitnessProgramPage;
