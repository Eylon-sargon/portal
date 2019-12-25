import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import ExerciseItemTitle from './ExerciseItemTitle';
import ExerciseItemDetails from './ExerciseItemDetails';
import { colors } from '../../util/theme';
import { ExerciseItem } from '../../types/ExerciseItem';
import { getExercise } from '../../util/referenceData';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			margin: '10px 0',
			background: colors.grey[4],
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			fontWeight: theme.typography.fontWeightRegular,
		},
		icon: {
			marginLeft: -10,
			marginRight: 15,
		},
		title: {
			flexGrow: 1,
		},
	}),
);

interface Props {
	exerciseItem: ExerciseItem;
	customTitle?: JSX.Element;
}

const ExerciseItemExpansionPanel: React.FC<Props> = ({ exerciseItem }) => {
	const classes = useStyles({});
	const exercise = getExercise(exerciseItem.exercise);

	return (
		<ExpansionPanel className={classes.root}>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
				<Grid container alignItems="center">
					<Grid item>
						<div className={classes.icon}>{<DragIndicatorIcon />}</div>
					</Grid>

					<Grid item className={classes.title}>
						<ExerciseItemTitle exercise={exercise} exerciseItem={exerciseItem} />
					</Grid>
				</Grid>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<ExerciseItemDetails exerciseItem={exerciseItem} />
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

export default ExerciseItemExpansionPanel;
