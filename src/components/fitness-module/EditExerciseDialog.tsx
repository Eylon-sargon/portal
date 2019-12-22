import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import { editExercise } from '../../store/exercise/exercise.actions';
import { Exercise } from '../../types/Exercice';

interface Props {
	exercise: Exercise;
	editExercise: typeof editExercise;
}

const EditExerciseDialog: React.FC<Props> = ({ exercise, editExercise }) => {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState(exercise.title);
	const [description, setDescription] = useState(exercise.description);
	const [image, setImage] = useState(exercise.image);
	const submit = () => {
		editExercise({ ...exercise, title, description, image });
		setOpen(false);
	};

	return (
		<div>
			<Tooltip title="Edit">
				<IconButton aria-label="edit-exercise" onClick={() => setOpen(true)}>
					<EditIcon />
				</IconButton>
			</Tooltip>
			<Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Edit exercise</DialogTitle>
				<DialogContent>
					<TextField autoFocus margin="dense" id="name" label="Exercise Name" type="text" required fullWidth value={title} onChange={(e: any) => setTitle(e.target.value)} />
					<TextField
						autoFocus
						margin="dense"
						id="description"
						label="Exercise Description"
						multiline
						rows={3}
						type="text"
						fullWidth
						value={description}
						onChange={(e: any) => setDescription(e.target.value)}
					/>

					<TextField autoFocus margin="dense" id="image" label="Exercise Image url" type="text" fullWidth value={image} onChange={(e: any) => setImage(e.target.value)} />
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

export default connect(null, { editExercise })(EditExerciseDialog);
