import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { connect } from 'react-redux';
import { addExercise } from '../../store/exercise/exercise.actions';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		fab: {
			margin: theme.spacing(2),
		},
		fixed: {
			position: 'fixed',
			bottom: theme.spacing(2),
			right: theme.spacing(3),
		},
	}),
);

interface Props {
	addExercise: typeof addExercise;
}

const AddExerciseDialog: React.FC<Props> = ({ addExercise }) => {
	const classes = useStyles({});
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const submit = () => {
		addExercise({ title, description, image });
		setOpen(false);
	};

	return (
		<div>
			<Tooltip title="Add New Exercise" aria-label="add" arrow className={classes.fixed} onClick={() => setOpen(true)}>
				<Fab color="secondary">
					<FitnessCenterIcon />
				</Fab>
			</Tooltip>
			<Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Add exercise</DialogTitle>
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
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default connect(null, { addExercise })(AddExerciseDialog);
