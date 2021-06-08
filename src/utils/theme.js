import { extendTheme } from '@chakra-ui/react';

// import bg1 from 'assets/images/undraw_slider_5bgj.svg';

const theme = extendTheme({
	styles: {
		global: {
			'html, body, #root': {
				bg: 'gray.200',
				height: '100%',
			},
		},
	},
	components: {},
	fonts: {
		body: 'system-ui, sans-serif',
		heading_1: 'Proxima Nova, sans-serif',
		heading_2: 'Noto Sans JP, sans-serif',
		mono: 'Menlo, monospace',
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '3.75rem',
		'7xl': '4.5rem',
		'8xl': '6rem',
		'9xl': '8rem',
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
	lineHeights: {
		normal: 'normal',
		none: 1,
		shorter: 1.25,
		short: 1.375,
		base: 1.5,
		tall: 1.625,
		taller: '2',
		3: '.75rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		7: '1.75rem',
		8: '2rem',
		9: '2.25rem',
		10: '2.5rem',
	},
	letterSpacings: {
		tighter: '-0.05em',
		tight: '-0.025em',
		normal: '0',
		wide: '0.025em',
		wider: '0.05em',
		widest: '0.1em',
	},
	colors: {
		primary: '#0099FF',
		secondary: '#3BA6ED',
		cyan: {
			50: '#e0f8fc',
			100: '#c6e2e8',
			200: '#a8ced4',
			300: '#88b9c2',
			400: '#69a5b0',
			500: '#4f8b96',
			600: '#3c6c76',
			700: '#274e54',
			800: '#112f34',
			900: '#001117',
		},
		cyan2: {
			50: '#e3f7fd',
			100: '#c6e3e9',
			200: '#a6cfd7',
			300: '#85bcc6',
			400: '#66a9b5',
			500: '#4c909b',
			600: '#39707a',
			700: '#275058',
			800: '#113136',
			900: '#001215',
		},
		cyan3: {
			50: '#e3f8fb',
			100: '#cae3e5',
			200: '#adced1',
			300: '#8fbbbd',
			400: '#71a7aa',
			500: '#578d90',
			600: '#426e70',
			700: '#2d4f50',
			800: '#163031',
			900: '#001313',
		},
		orange: {
			50: '#fff1e5',
			100: '#f2d8c0',
			200: '#e7be98',
			300: '#dea66f',
			400: '#d58c46',
			500: '#bc722e',
			600: '#925923',
			700: '#683f18',
			800: '#3f260d',
			900: '#180c00',
		},
	},
});

export default theme;
