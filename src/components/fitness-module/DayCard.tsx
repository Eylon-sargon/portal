import React, { Fragment, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpansionPannel from './ExerciseItemExpansionPanel';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { Day } from '../../types/Day';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			margin: '20px 10px',
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
		},
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
			backgroundColor: red[500],
		},
	}),
);

interface Props {
	day: Day;
}

const DayCard: React.FC<Props> = ({ day }) => {
	const classes = useStyles({});

	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{day.index}
					</Avatar>
				}
				action={
					<Fragment>
						<Tooltip title="Add Exercise Item">
							<IconButton aria-label="settings">
								<AddIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Edit">
							<IconButton aria-label="settings">
								<EditIcon />
							</IconButton>
						</Tooltip>
					</Fragment>
				}
				title={day.title}
				subheader={day.desctiption || null}
			/>

			<CardContent>
				{day.exercises.map(exerciseItem => (
					<ExpansionPannel key={exerciseItem.id} exerciseItem={exerciseItem} />
				))}
			</CardContent>
		</Card>
	);
};

export default DayCard;
