import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteExerciseItemButton from './DeleteExerciseItemButton';
import { ExerciseItem } from '../../types/ExerciseItem';
import { Exercise } from '../../types/Exercice';
import { getExerciseItemSets } from '../../util/referenceData';
import { Day } from '../../types/Day';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		heading: {},
		subHeading: {
			color: '#333',
			marginLeft: 10,
		},
	}),
);

interface Props {
	exercise: Exercise;
	exerciseItem: ExerciseItem;
	editMode: boolean;
	day: Day;
}

const ExerciseItemTitle: React.FC<Props> = ({ day, exerciseItem, exercise, editMode }) => {
	const classes = useStyles({});
	const sets = getExerciseItemSets(exerciseItem);

	return (
		<Grid container justify="space-between" className={classes.root}>
			<Grid item>
				<Typography variant="subtitle2" component="h6" color="primary" className={classes.heading}>
					{exercise.title}
				</Typography>
			</Grid>
			<Grid item>
				{editMode ? (
					<DeleteExerciseItemButton day={day} exerciseItemId={exerciseItem.id} />
				) : sets.length ? (
					<Chip label={sets.join(' | ')} color="primary" size="small" />
				) : (
					'no sets'
				)}
			</Grid>
		</Grid>
	);
};

export default ExerciseItemTitle;
