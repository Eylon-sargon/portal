import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
		icon: {
			marginRight: theme.spacing(1),
		},
	}),
);

interface Props {
	icon: JSX.Element;
	text: any;
}

const ExerciseItemDetails: React.FC<Props> = ({ icon, text }) => {
	const classes = useStyles({});

	return (
		<Grid container direction="row" alignItems="center" className={classes.root}>
			<Grid item className={classes.icon}>
				{icon}
			</Grid>
			<Grid item>{text}</Grid>
		</Grid>
	);
};

export default ExerciseItemDetails;
