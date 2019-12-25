import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { ExerciseItem } from '../../types/ExerciseItem';
import IconWithText from '../common/IconWithText';
import { getExercise, getExerciseItemSets } from '../../util/referenceData';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'block',
			paddingBottom: theme.spacing(2.5),
			color: '#000',
		},
		heading: {
			fontWeight: theme.typography.fontWeightRegular,
		},
		subHeading: {
			marginLeft: 10,
		},
	}),
);

interface Props {
	exerciseItem: ExerciseItem;
}

const ExerciseItemDetails: React.FC<Props> = ({ exerciseItem }) => {
	const classes = useStyles({});
	const exercise = getExercise(exerciseItem.exercise);
	const sets = getExerciseItemSets(exerciseItem);
	return (
		<div className={classes.root}>
			{sets.length > 0 && (
				<IconWithText
					icon={<FormatListBulletedIcon />}
					text={
						<Typography variant="subtitle2" className={classes.heading}>
							{sets.join(' | ')}
						</Typography>
					}
				/>
			)}

			{!!exerciseItem.rest && (
				<IconWithText
					icon={<WatchLaterIcon />}
					text={
						<Typography variant="subtitle2" className={classes.heading}>
							{exerciseItem.rest ? `${exerciseItem.rest} seconds` : '-'}
						</Typography>
					}
				/>
			)}
			{!!exercise.description && (
				<IconWithText
					icon={<InfoIcon />}
					text={
						<Typography variant="subtitle2" className={classes.heading}>
							{exercise.description ? exercise.description : '-'}
						</Typography>
					}
				/>
			)}

			<Divider />
		</div>
	);
};

export default ExerciseItemDetails;
