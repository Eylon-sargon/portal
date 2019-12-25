import React, { Fragment, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { red } from '@material-ui/core/colors';
import ExerciseItemExpansionPanel from './ExerciseItemExpansionPanel';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import { Day } from '../../types/Day';
import { Tooltip } from '@material-ui/core';
import AddExerciseItemDialog from './AddExersiceItemDialog';
import { editDayDescription, editDayTitle } from '../../store/day/day.actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			margin: '20px 10px',
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
		},
		input: { margin: '5px 0' },
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar: {
			backgroundColor: theme.palette.primary.main,
		},
	}),
);

interface Props {
	day: Day;
	index: number;
	editDayTitle: typeof editDayTitle;
	editDayDescription: typeof editDayDescription;
}

const DayCard: React.FC<Props> = ({ day, index, editDayTitle, editDayDescription }) => {
	const classes = useStyles({});
	const [editMode, setEditMode] = useState(false);

	const handleTitleChange = (e: any) => editDayTitle(day, e.target.value);
	const handleDescriptionChange = (e: any) => editDayDescription(day, e.target.value);

	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{index + 1}
					</Avatar>
				}
				action={
					<div style={{ display: 'flex' }}>
						<AddExerciseItemDialog day={day} />
						<Tooltip title={editMode ? 'Back' : 'Edit'}>
							<IconButton aria-label="settings" onClick={() => setEditMode(!editMode)}>
								{editMode ? <ArrowBackIcon /> : <EditIcon />}
							</IconButton>
						</Tooltip>
					</div>
				}
				title={editMode ? <TextField value={day.title} label="Training day tit le" fullWidth onChange={handleTitleChange} className={classes.input} /> : day.title}
				subheader={
					editMode ? (
						<TextField value={day.desctiption} label="Training day description" multiline fullWidth onChange={handleDescriptionChange} className={classes.input} />
					) : (
						day.desctiption
					)
				}
			/>

			<CardContent>
				{day.exerciseItems.map(exerciseItem => (
					<ExerciseItemExpansionPanel key={exerciseItem.id} exerciseItem={exerciseItem} />
				))}
			</CardContent>
		</Card>
	);
};

export default connect(null, { editDayDescription, editDayTitle })(DayCard);
