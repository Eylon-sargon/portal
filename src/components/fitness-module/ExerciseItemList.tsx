import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExerciseItemTitle from './ExerciseItemTitle';
import ExerciseItemDetails from './ExerciseItemDetails';
import { colors } from '../../util/theme';
import { getExercise } from '../../util/referenceData';
import DragDropList, { DragDropListData } from '../common/DragDropList';
import { Day } from '../../types/Day';

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
	day: Day;
}

const generateData = (day: Day, classes: any): DragDropListData[] =>
	day.exerciseItems.map(exerciseItem => ({
		id: exerciseItem.id,
		primary: (
			<Grid container alignItems="center">
				<Grid item className={classes.title}>
					<ExerciseItemTitle exercise={getExercise(exerciseItem.exercise)} exerciseItem={exerciseItem} />
				</Grid>
			</Grid>
		),
		secondary: <ExerciseItemDetails exerciseItem={exerciseItem} />,
	}));

const ExerciseItemExpansionPanel: React.FC<Props> = ({ day }) => {
	const classes = useStyles({});
	const data = generateData(day, classes);

	const onDragChange = (items: DragDropListData[]) => console.log(items.map(item => item.id));

	return <DragDropList data={data} onDragChange={onDragChange} />;
};

export default ExerciseItemExpansionPanel;
