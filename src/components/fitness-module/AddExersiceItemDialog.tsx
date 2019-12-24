import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import WrappedSelect from '../common/WrappedSelect';
import { connect } from 'react-redux';
import { addExercieItem } from '../../store/day/day.actions';
import { AppState } from '../../store';
import { ExerciseState } from '../../store/exercise/exercise.types';
import { Day } from '../../types/Day';

const customWidth = 100 / 6;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		smallInput: {
			width: `${customWidth}%`,
			marginLeft: 4,
			marginRight: 4,
		},
	}),
);

interface Props {
	exercises: ExerciseState;
	day: Day;
	addExercieItem: typeof addExercieItem;
}

const AddExersiceItemDialog: React.FC<Props> = ({ exercises, day, addExercieItem }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [rest, setRest] = useState(0);
	const [sets, setSets] = useState(['', '', '', '', '', '']);
	const [exerciseId, setExerciseId] = useState('');
	const handleExerciseIdChange = (id: string) => setExerciseId(id);
	const handleChangeSets = (setCount: string, setIndex: number) => setSets([...sets.map((oldSetCount, index) => (index === setIndex ? setCount : oldSetCount))]);
	const submit = () => {
		addExercieItem(day, { exercise: exercises.filter(exr => exr.id === exerciseId)[0].id, rest, sets });
		setOpen(false);
	};

	return (
		<div>
			<Tooltip title="Add exercise item">
				<IconButton aria-label="add-exercise-item" onClick={() => setOpen(true)}>
					<AddIcon />
				</IconButton>
			</Tooltip>
			<Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title" fullWidth>
				<DialogTitle id="form-dialog-title">Edit exercise</DialogTitle>
				<DialogContent>
					<WrappedSelect
						label="Select exercise"
						onChange={handleExerciseIdChange}
						data={exercises.map(exr => ({
							dataLabel: exr.title,
							dataValue: exr.id,
						}))}
					/>
					<TextField autoFocus margin="dense" id="name" label="Rest" type="number" required fullWidth value={rest} onChange={(e: any) => setRest(e.target.value)} />
					<div style={{ display: 'flex' }}>
						{[1, 2, 3, 4, 5, 6].map(val => (
							<TextField
								key={val}
								autoFocus
								margin="dense"
								label={`Set ${val}`}
								type="string"
								className={classes.smallInput}
								value={sets[val - 1]}
								onChange={(e: any) => handleChangeSets(e.target.value, val - 1)}
							/>
						))}
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}>Cancel</Button>
					<Button onClick={submit} color="primary">
						Edit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const mapStateToProps = (state: AppState) => ({ exercises: state.exercise });

export default connect(mapStateToProps, { addExercieItem })(AddExersiceItemDialog);
