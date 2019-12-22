import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import ExerciseItemTitle from './ExerciseItemTitle';
import ExerciseItemDetails from './ExerciseItemDetails';

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

const SimpleExpansionPanel: React.FC<Props> = ({ exerciseItem }) => {
	const classes = useStyles({});
	const Icon = exerciseItem.exercise.icon;
	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Grid container alignItems="center">
						{Icon && (
							<Grid item>
								<div className={classes.icon}>{<Icon />}</div>
							</Grid>
						)}
						<Grid item className={classes.title}>
							<ExerciseItemTitle exerciseItem={exerciseItem} />
						</Grid>
					</Grid>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<ExerciseItemDetails exerciseItem={exerciseItem} />
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
};

export default SimpleExpansionPanel;
