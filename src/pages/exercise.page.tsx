import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import AddExerciseDialog from '../components/fitness-module/AddExerciseDialog';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { ExerciseState } from '../store/exercise/exercise.types';
import ExerciseCard from '../components/fitness-module/ExerciseCard';

interface Props {
	exercises: ExerciseState;
}

const ExercisePage: React.FC<Props> = ({ exercises }) => (
	<div>
		<Grid container>
			{exercises.map(exercise => (
				<Grid item xs={12} md={4} key={exercise.id}>
					<ExerciseCard exercise={exercise} />
				</Grid>
			))}
		</Grid>
		<AddExerciseDialog />
	</div>
);

const mapStateToProps = (state: AppState) => ({
	exercises: state.exercise,
});

export default connect(mapStateToProps)(ExercisePage);
