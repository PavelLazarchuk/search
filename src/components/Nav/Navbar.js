import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import dark from './img/dark.png';
import light from './img/light.png';
import HrLinks from './HrLinks';
import Avatar from '../../shared/UserImg';
import { changeToDark, changeToLight } from '../../store/theme/themeActions';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.backgroundColor,
		color: theme.palette.color,
		boxShadow: 'none',
		padding: '10px 0',
	},
	title: {
		flexGrow: 1,
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: 'none',
		alignItems: 'center',
	},
	ava: {
		alignSelf: 'center',
	},
	themeIcon: {
		width: '50px',
		height: '50px',
	},
}));

function NavBar({ thema, changeToLight, changeToDark }) {
	const classes = useStyles();
	const darkTheme = () => {
		changeToDark();
		localStorage.setItem('theme', 'dark');
	};
	const lightTheme = () => {
		changeToLight();
		localStorage.setItem('theme', 'light');
	};

	return (
		<AppBar position="static" className={classes.root}>
			<Container className={classes.flex}>
				<HrLinks />
				<Box component="div">
					<IconButton
						style={{ marginRight: '10px' }}
						onClick={() => {
							thema === 'light' ? darkTheme() : lightTheme();
						}}
					>
						<img
							src={thema === 'light' ? dark : light}
							className={classes.themeIcon}
							alt="pic"
						/>
					</IconButton>
					<Avatar />
				</Box>
			</Container>
		</AppBar>
	);
}

const mapStateToProps = state => ({
	thema: state.theme.theme,
});

const mapDispatchToProps = {
	changeToLight,
	changeToDark,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
