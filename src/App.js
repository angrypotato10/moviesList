import React, { useState, useEffect } from 'react'

import Movies from './components/Movies'
import Header from './components/Header'
import Content from './components/Content'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import { Container, Typography, Box, Link, Grid } from '@material-ui/core'

import moviesToDO from './constants'
import moviesWatched from './constants'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Movies List App
			</Link>
			{new Date().getFullYear()}
		</Typography>
	)
}

const useStyles = makeStyles({
	buttonStyle: {
		display: 'flex',
		justifyContent: 'space-between',
	},
})

const App = () => {
	const classes = useStyles()
	return (
		<Grid container direction="column">
			<Grid item>
				<Header />
			</Grid>
			<Grid item container>
				<Grid item xs={false} sm={2} />
				<Grid item xs={12} sm={8}>
					<div className={classes.buttonStyle}>
						Movies you want to watch
						<Button size="small">More</Button>
					</div>
					<hr />
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
			<Grid item container>
				<Grid item xs={false} sm={2} />
				<Grid item xs={12} sm={8}>
					<Content moviesData={moviesToDO} />
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
			{/* Movies you wathed section */}
			<Grid item container>
				<Grid item xs={false} sm={2} />
				<Grid item xs={12} sm={8}>
					<div className={classes.buttonStyle}>
						Movies you watched
						<Button size="small">More</Button>
					</div>

					<hr />
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
			<Grid item container>
				<Grid item xs={false} sm={2} />
				<Grid item xs={12} sm={8}>
					<Content moviesData={moviesWatched} />
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
			<Grid item>
				<Box my={4}>
					<Typography variant="h6" component="h1" align="center" gutterBottom>
						Movie List App by NT
					</Typography>
					<Copyright />
				</Box>
			</Grid>
		</Grid>
	)
}

export default App
