import {StyleSheet} from 'react-native'

export const withBackgroundColor = (color) => {
	return {
		backgroundColor: color
	}
}

export const withTextColor = (color) => {
	return {
		color: color
	}
}

export const FullButtonStyle = StyleSheet.create({
	button: {
		height: 70,
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export const BackgroundImageStyle = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute',
	}
})

export const LogoStyle = StyleSheet.create({
	logo: {
		color: 'white',
		fontSize: 35,
	}
});