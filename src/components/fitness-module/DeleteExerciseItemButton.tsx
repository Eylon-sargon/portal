import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { deleteExercieItem } from '../../store/day/day.actions';
import { Day } from '../../types/Day';

interface Props {
	deleteExercieItem: typeof deleteExercieItem;
	day: Day;
	exerciseItemId: string;
}

const DeleteExerciseItemButton: React.FC<Props> = ({ day, exerciseItemId, deleteExercieItem }) => {
	const submit = () => {
		deleteExercieItem(day, exerciseItemId);
	};

	return (
		<Tooltip title="Delete">
			<IconButton aria-label="delete-exercise-item" onClick={submit}>
				<DeleteIcon />
			</IconButton>
		</Tooltip>
	);
};

export default connect(null, { deleteExercieItem })(DeleteExerciseItemButton);
