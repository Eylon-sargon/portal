import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import DayCard from '../components/fitness-module/DayCard';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { DayState } from '../store/day/day.types';

interface Props {
	days: DayState;
}
const FitnessProgramPage: React.FC<Props> = ({ days }) => {
	return (
		<Grid container>
			{days.map((day, index) => (
				<Grid item xs={12} md={4} key={day.id}>
					<DayCard day={day} index={index} />
				</Grid>
			))}
		</Grid>
	);
};

const mapStateToProps = (state: AppState) => ({
	days: state.day,
});

export default connect(mapStateToProps)(FitnessProgramPage);
