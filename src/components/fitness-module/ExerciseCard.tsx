import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { Exercise } from '../../types/Exercice';
import EditExerciseDialog from './EditExerciseDialog';
import DeleteExerciseDialog from './DeleteExerciseDialog';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			margin: '20px 10px',
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar: {
			backgroundColor: theme.palette.primary.main,
		},
	}),
);

interface Props {
	exercise: Exercise;
}

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
	const classes = useStyles({});
	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{exercise.title.length > 1 ? exercise.title[0] + exercise.title[1] : 'X'}
					</Avatar>
				}
				action={
					<div style={{ display: 'flex' }}>
						<DeleteExerciseDialog exercise={exercise} />
						<EditExerciseDialog exercise={exercise} />
					</div>
				}
				title={exercise.title}
			/>

			<CardContent>
				<Typography variant="body1">{exercise.description}</Typography>
			</CardContent>
		</Card>
	);
};

export default ExerciseCard;
