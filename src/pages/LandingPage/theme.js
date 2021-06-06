export const ButtonStyle = {
	fontSize: '16px',
	color: 'white',
	bgColor: 'primary',
	border: '1px solid white',
	_hover: {
		borderShadow: 'none',
	},
	_focus: { borderShadow: 'none' },
	_focusWithin: { borderShadow: 'none' },
	_active: {
		boxShadow: 'none',
		border: '3px solid white',
	},
	cursor: 'pointer',
};

export const ButtonContainerStyle = {
	direction: ['column', 'row', 'row'],
	wrap: 'wrap',
};

export const TextStyle = {
	width: '100%',
	textAlign: ['center', 'center', 'left'],
	fontFamily: 'body',
};

export const RightContainerStyle = {
	spacing: 5,
	direction: 'column',
	width: ['100%', '100%', '50%'],
	align: ['center', 'center', 'flex-start'],
	justify: ['center', 'center', 'flex-start'],
};

export const LeftContainerStyle = {
	direction: 'column',
	width: ['100%', '100%', '50%'],
	align: 'center',
	justify: 'center',
};

export const LandingPageStyle = {
	direction: 'row',
	padding: ['2rem', '4rem'],
	width: '100%',
	height: '100%',
	justify: 'center',
	align: 'center',
	wrap: ['wrap', 'wrap', 'nowrap'],
};