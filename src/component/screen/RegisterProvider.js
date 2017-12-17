import React from "react";
import {TextField} from "../domain/complex/TextField";
import {BottomButton} from "../domain/button/BottomButton";
import {KeyboardAvoidingView, View, ScrollView} from "react-native";
import Intro from "./Intro";
import {Colors} from "../styles/Colors";
import FlexBuilder from "../styles/FlexBuilder";
import {IconType} from "../domain/shape/Icon";
import NavigationBar from "../domain/complex/NavigationBar";
import {RegisterService} from "../service/RegisterService";

class RegisterForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {username: '', password: '', confirmPassword: '', email: '', name: '',
			profileImageUrl: '', profileVideoUrl: '', description: ''}
	}

	render = () =>
		<KeyboardAvoidingView
			behavior="padding"
			style={new FlexBuilder().withColumnFlex().withJustifyContent('center').withItemAlignment('center').build()}>
			<NavigationBar
				text={""}
				leftIcon={IconType.BACK_LIGHT}
				leftAction={() => this.props.navigation.goBack()}
				rightIcon={IconType.EMPTY}/>
			<ScrollView contentContainerStyle={{width: '100%'}}>
				<TextField input="Username"
						   onChangeText={(username) => this.state.username = username}
						   image={require('../../../images/profile_icon.png')}/>
				<TextField input="Password"
						   onChangeText={(password) => this.state.password = password}
						   image={require('../../../images/password_icon.png')}
						   password={true}/>
				<TextField input="Confirm Password"
						   onChangeText={(confirmPassword) => this.state.confirmPassword = confirmPassword}
						   image={require('../../../images/password_icon.png')}
						   password={true}/>
				<TextField input="Email"
						   onChangeText={(email) => this.state.email = email}
						   image={require('../../../images/email_icon.png')}/>
				<TextField input="Name"
						   onChangeText={(name) => this.state.name = name}
						   image={IconType.PROFILE_DARK}/>
				<TextField input="Profile Image Url"
						   onChangeText={(profileImageUrl) => this.state.profileImageUrl = profileImageUrl}
						   image={IconType.PLUS_DARK}/>
				<TextField input="Profile Video Url"
						   onChangeText={(profileVideoUrl) => this.state.profileVideoUrl = profileVideoUrl}
						   image={IconType.PLUS_DARK}/>
				<TextField input="Description"
						   onChangeText={(description) => this.state.description = description}
						   image={IconType.PLUS_DARK}/>
			</ScrollView>
			<View style={new FlexBuilder().withRowFlex().build()}>
				<BottomButton
					backgroundColor={Colors.BLUE} height={70}
					color={Colors.WHITE} fontSize={16} text='Register'
					action={() => new RegisterService(this.props.navigation).signUpProvider(this.state.username,
						this.state.password, this.state.confirmPassword, this.state.email, this.state.name, this.state.profileImageUrl,
						this.state.profileVideoUrl, this.state.description)}/>
			</View>
		</KeyboardAvoidingView>;
}

export default class Register extends React.Component {
	static navigationOptions = {header: null};
	render = () => <Intro
		content={<RegisterForm navigation={this.props.navigation}/>}/>
}
