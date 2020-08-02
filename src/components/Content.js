import React from 'react'
import { Grid } from '@material-ui/core'
import MovieCard from './MovieCard'

const Content = ({ moviesData }) => {
	return (
		<Grid container spacing={1}>
			{moviesData.map((movie, i) => (
				<Grid key={i} container item sm={4} md={2}>
					<MovieCard
						title={movie.title}
						subtitle={movie.subtitle}
						description={movie.description}
						imgSrc={movie.imgSrc}
						avatarSrc={movie.avatarSrc}
					/>
				</Grid>
			))}
		</Grid>
	)
}

export default Content
