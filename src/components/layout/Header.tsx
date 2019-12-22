import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginBottom: 30,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
	}),
);

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar variant="dense">
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit">
						Fit=nahes
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
