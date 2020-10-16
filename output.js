const styles = {
	'*, *::after, *::before': {
		margin: '0',
		padding: '0',
		boxSizing: 'border-box'
	},
	html: { fontSize: '62.5%' },
	'@media (max-width: 75em)': { html: { fontSize: '56.25%' } },
	'@media (max-width: 56.25em)': { html: { fontSize: '50%' } },
	'@media (min-width: 112.5em)': { html: { fontSize: '75%' } },
	body: { height: '100vh', backgroundColor: '#ece0e8' },
	'.artboard': {
		display: 'flex',
		flexFlow: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '4rem',
		height: '100%',
		position: 'relative'
	},
	'@media (max-width: 37.5em)': { '.artboard': { padding: '1rem' } },
	'.card': {
		flex: 'initial',
		position: 'relative',
		height: '52rem',
		width: '48rem',
		M: '200rem',
		perspective: '200rem',
		margin: '2rem'
	},
	'.card__side': {
		height: '52rem',
		transition: 'all 0.8s ease',
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%',
		W: 'hidden',
		backfaceVisibility: 'hidden',
		borderRadius: '3px',
		overflow: 'hidden',
		boxShadow: '0 2rem 6rem rgba(0, 0, 0, 0.15)'
	},
	'.card__side--front': {
		backgroundImage:
			'linear-gradient(to right bottom, rgba(30, 11, 54, 0.65), rgba(202, 55, 130, 0.7)), url(https://cdn.spacetelescope.org/archives/images/screen/heic0406a.jpg)'
	},
	'.card__side--back': {
		backgroundColor: '#fff',
		transform: 'rotateY(180deg)'
	},
	'.card:hover .card__side--back': { transform: 'rotateY(0)' },
	'.card:hover .card__side--front': { transform: 'rotateY(-180deg)' },
	'.card__theme': {
		position: 'absolute',
		top: '54%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		fallbacks: [{ top: '50%' }],
		width: '90%',
		textAlign: 'center'
	},
	'.card__theme-box': { color: '#fff', marginBottom: '8rem' },
	'.card__subject': {
		fontFamily: '"Inconsolata", monospace',
		letterSpacing: '0.8rem',
		fontSize: '1.6rem',
		textTransform: 'uppercase',
		marginBottom: '1rem'
	},
	'.card__title': {
		fontFamily: '"VT323", monospace',
		textTransform: 'uppercase',
		fontSize: '6rem',
		fontWeight: '100'
	},
	'.card__cover': {
		position: 'relative',
		backgroundSize: 'cover',
		height: '14rem',
		W: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
		clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
		borderTopLeftRadius: '3px',
		borderTopRightRadius: '3px',
		backgroundImage:
			'linear-gradient(to top right, rgba(30, 11, 54, 0.65), rgba(202, 55, 130, 0.65)), url(https://cdn.spacetelescope.org/archives/images/screen/heic0406a.jpg)'
	},
	'.card__heading': {
		textAlign: 'center',
		color: '#fff',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '75%'
	},
	'.card__heading-span': {
		fontFamily: '"VT323", monospace',
		fontSize: '4.2rem',
		fontWeight: '300',
		textTransform: 'uppercase',
		padding: '1rem 1.5rem',
		color: '#fff'
	},
	'.card__details': {
		fontFamily: '"Inconsolata", monospace',
		padding: '4rem 2rem'
	},
	'.card__details ul': { listStyle: 'none', width: '80%', margin: '0 auto' },
	'.card__details ul li': {
		textAlign: 'center',
		fontSize: '1.8rem',
		padding: '1rem'
	},
	'.card__details ul li:not(:last-child)': { borderBottom: '1px solid #eee' },
	'@media only screen and (max-width: 37.5em), only screen and (hover: none)': {
		'.card': {
			height: 'auto',
			borderRadius: '3px',
			backgroundColor: '#fff',
			boxShadow: '0 2rem 6rem rgba(0, 0, 0, 0.15)'
		},
		'.card__side': { height: 'auto', position: 'relative', boxShadow: 'none' },
		'.card__side--front': {
			clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)'
		},
		'.card__side--back': { transform: 'rotateY(0)' },
		'.card:hover .card__side--front': { transform: 'rotateY(0)' },
		'.card__details': { padding: '3rem 2rem' },
		'.card__theme': {
			position: 'relative',
			top: '0',
			left: '0',
			transform: 'translate(0)',
			width: '100%',
			padding: '5rem 4rem 1.5rem 4rem',
			textAlign: 'right'
		},
		'.card__theme-box': { marginBottom: '1.5rem' },
		'.card__title': { fontSize: '4rem' }
	}
};
