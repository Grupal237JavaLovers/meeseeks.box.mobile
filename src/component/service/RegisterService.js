import {LoginService} from "./LoginService";
import {Endpoint} from "./Endpoint";
import {Alert} from "react-native";

export class RegisterService {

	constructor(navigation) {
		this.navigation = navigation;
	}

	signUpConsumer = (username, password, confirmPassword, email, name, profileImageUrl) =>
		fetch(Endpoint.REGISTER_CONSUMER, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
				confirmPassword: confirmPassword,
				email: email,
				name: name,
                profileImageUrl: profileImageUrl,
			})
		}).then((response) => response.status === 200 ?
				new LoginService(this.navigation).login(username, password) :
			Alert.alert("Unable to register...", ":("))

    signUpProvider = (username, password, confirmPassword, email, name, profileImageUrl, profileVideoUrl, description) =>
        fetch(Endpoint.REGISTER_PROVIDER, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                email: email,
                name: name,
                profileImageUrl: profileImageUrl,
                profileVideoUrl: profileVideoUrl,
				description: description,
            })
        }).then((response) => response.status === 200 ?
            new LoginService(this.navigation).login(username, password) :
            Alert.alert("Unable to register...", ":("))
}