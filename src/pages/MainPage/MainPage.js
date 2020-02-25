import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import HrPage from '../hr';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.backgroundColor,
		position: 'relative',
		minHeight: '100vh',
	},
}));

export default function MainPage() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Navbar />
			<Switch>
				<Route exact path="/">
					HOME PAGE
				</Route>
				<Route path="/hr" component={HrPage} />
			</Switch>
			<Footer />
		</div>
	);
}
