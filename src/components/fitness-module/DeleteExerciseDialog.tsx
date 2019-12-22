import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { deleteExercise } from '../../store/exercise/exercise.actions';
import { Exercise } from '../../types/Exercice';

interface Props {
	exercise: Exercise;
	deleteExercise: typeof deleteExercise;
}

const DeleteExerciseDialog: React.FC<Props> = ({ exercise, deleteExercise }) => {
	const [open, setOpen] = useState(false);
	const submit = () => {
		deleteExercise(exercise.id);
		setOpen(false);
	};

	return (
		<div>
			<Tooltip title="Delete">
				<IconButton aria-label="delete-exercise" onClick={() => setOpen(true)}>
					<DeleteIcon />
				</IconButton>
			</Tooltip>
			<Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Delete exercise</DialogTitle>
				<DialogContent>Are you sure you want to delete this exercise?</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}>Cancel</Button>
					<Button onClick={submit} color="primary">
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default connect(null, { deleteExercise })(DeleteExerciseDialog);
