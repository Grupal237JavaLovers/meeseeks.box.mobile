import React from "react";
import {View} from "react-native";
import {BottomButton} from "../domain/button/BottomButton";
import {Colors,} from "../styles/Colors";
import FlexBuilder from "../styles/FlexBuilder";
import Intro from "./Intro";
import {LoginService} from "../service/LoginService";


const AccessButtons = ({navigation}) =>
	<View style={[{width: "100%"}, new FlexBuilder().withColumnFlex().build()]}>
		<BottomButton
			backgroundColor={Colors.WINTER_BLUE} height={70}
			color={Colors.WHITE} fontSize={16} text='Login'
			action={() => navigation.navigate('Login')}/>
		<BottomButton
			backgroundColor={Colors.BLUE} height={70}
			color={Colors.WHITE} fontSize={16} text='Register Consumer'
			action={() => navigation.navigate('RegisterConsumer')}/>
        <BottomButton
            backgroundColor={Colors.BLUE} height={70}
            color={Colors.WHITE} fontSize={16} text='Register Provider'
            action={() => navigation.navigate('RegisterProvider')}/>
	</View>

export default class Welcome extends React.Component {
    async componentWillMount() {
        if (await new LoginService().isLoggedIn()) {
            this.props.navigation.navigate('Jobs');
        }
    }

    static navigationOptions = {header: null};
	render = () => <Intro
		content={<AccessButtons navigation={this.props.navigation}/>}/>
}
