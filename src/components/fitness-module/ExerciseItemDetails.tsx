import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { ExerciseItem } from '../../types/ExerciseItem';
import IconWithText from '../common/IconWithText';
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'block',
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

const ExerciseItemDetails: React.FC<Props> = ({ exerciseItem }) => {
	const classes = useStyles({});

	return (
		<div className={classes.root}>
			<IconWithText icon={<FormatListBulletedIcon />} text={<Typography className={classes.heading}>{exerciseItem.sets.join(' | ')}</Typography>} />

			<IconWithText icon={<WatchLaterIcon />} text={<Typography className={classes.heading}> {exerciseItem.rest} seconds</Typography>} />

			<IconWithText icon={<InfoIcon />} text={<Typography className={classes.heading}>{exerciseItem.exercise.description}</Typography>} />
		</div>
	);
};

export default ExerciseItemDetails;
