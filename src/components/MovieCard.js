import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CardMedia from '@material-ui/core/CardMedia'
import { Collapse } from '@material-ui/core'
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: '1rem',
		flexBasis: 'auto',
	},
	subheader: {
		fontSize: '0.75rem',
	},
	media: {
		height: '150px',
		// paddingTop: '56.25%', // 16:9,
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
	display: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		maxHeight: '30vw',
	},
}))

const MovieCard = (props) => {
	const classes = useStyles()
	const { title, subtitle, description, imgSrc } = props
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Grid item component={Card} xs>
			<CardHeader
				classes={{ title: classes.title, subheader: classes.subheader }}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={title}
				subheader={subtitle}
			/>

			<CardMedia className={classes.media} image={imgSrc} title={title} />
			<CardContent className={classes.display}>
				<Typography variant="body2" color="textSecondary" component="p">
					IMDB rating:
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Remove</Button>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography variant="body2">{description}</Typography>
				</CardContent>
			</Collapse>
		</Grid>
	)
}

export default MovieCard
