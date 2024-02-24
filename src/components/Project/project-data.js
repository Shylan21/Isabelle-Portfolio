import uomoshopfront from '../../assets/proj-img/UomoShopFront.jpeg'
import movietracker from '../../assets/proj-img/MovieTracker.jpeg'
import wolframe from '../../assets/proj-img/Wolframe.jpeg'
import spotify from '../../assets/proj-img/Spotify.jpeg'
import weather from '../../assets/proj-img/WeatherApp.jpeg'

import streamlabs from '../../assets/proj-img/Streamlabs.jpeg'
import greengrocers from '../../assets/proj-img/Greengrocers.jpeg'
import brewery from '../../assets/proj-img/Brewery.jpeg'
import calculator from '../../assets/proj-img/Calculator.jpeg'
import pokemoncards from '../../assets/proj-img/PokemonCards.jpeg'

const projects = [
	{
		id: 'uomoshopfront', // Must be unique
		image: uomoshopfront,
		projectName: 'Uomo ShopFront',
		description: 'A deployed React powered full stack shopfront.',
		hideText: false,
	},
	{
		id: 'movietracker',
		image: movietracker,
		projectName: 'Movie Tracker',
		description:
			'This is a full stack application I completed for my graduation. A movie tracker app allowing users to effectively manage lists of their favorite movies. ',
		hideText: false,
	},
	{
		id: 'wolframe',
		image: wolframe,
		projectName: 'Wolframe Web Site',
		description: 'A website for a gamer called Wolframe who live streams on Twitch.',
		hideText: false,
	},
	{
		id: 'spotify',
		image: spotify,
		projectName: 'Spotify',
		description: 'Recreated the UI for Spotify',
		hideText: false,
	},
	{
		id: 'weather',
		image: weather,
		projectName: 'Weather App',
		description: 'Developed and deployed a functional weather app that utilises geolocation for accurate weather updates and has global search capabilities.',
		hideText: false,
	},

	// TODO: Create the rest of me! ✅
]

export { projects }
