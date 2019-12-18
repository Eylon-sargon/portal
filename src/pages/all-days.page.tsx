import React from 'react';
import DayCard from '../components/DayCard';
import Grid from '@material-ui/core/Grid/Grid';

const AllDaysPage = () => {
	return (
		<div>
			<Grid container>
				<Grid item xs={12} md={4}>
					<DayCard />
				</Grid>
				<Grid item xs={12} md={4}>
					<DayCard />
				</Grid>
				<Grid item xs={12} md={4}>
					<DayCard />
				</Grid>
				<Grid item xs={12} md={4}>
					<DayCard />
				</Grid>
				<Grid item xs={12} md={4}>
					<DayCard />
				</Grid>
				<Grid item xs={12} md={4}>
					<DayCard />
				</Grid>
			</Grid>
		</div>
	);
};

export default AllDaysPage;
