import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ExerciseItem } from '../../types/ExerciseItem';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			fontWeight: theme.typography.fontWeightRegular,
		},
		subHeading: {
			fontSize: theme.typography.pxToRem(13),
			color: '#333',
			marginLeft: 10,
		},
	}),
);

interface Props {
	exerciseItem: ExerciseItem;
}

const ExerciseItemTitle: React.FC<Props> = ({ exerciseItem }) => {
	const classes = useStyles({});

	return (
		<Grid container justify="space-between" className={classes.root}>
			<Grid item>
				<Typography className={classes.heading}>{exerciseItem.exercise.title}</Typography>
			</Grid>
			<Grid item>
				<Chip label={exerciseItem.sets.join(' | ')} color="primary" size="small" />
			</Grid>
		</Grid>
	);
};

export default ExerciseItemTitle;
