import React from "react";
import {IconType} from "../domain/shape/Icon";
import TopBarNavigation from "../domain/complex/NavigationBar";
import {Colors} from "../styles/Colors";
import {EmptyListDisplayed} from "../domain/list/EmptyListDisplayer";
import {ActionButton} from "../domain/button/ActionButton";
import {Screen} from "../domain/decorators/Screen";
import {LoginService} from "../service/LoginService";
import JobService from "../service/JobService";
import { FlatList, Text, DrawerLayoutAndroid, View } from 'react-native';
import {CenterContainer} from "../domain/container/CenterContainer";


export default class Jobs extends React.Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
		};
	}

	async componentDidMount() {
		const jobs = await JobService.getJobs();
		this.setState({
			jobs: jobs,
		});
	}

	renderJob(obj) {
        return (
			<Text>{obj.item.name}</Text>
		);
	}

	navigationView() {
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
    }

	render = () =>
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.left}
            renderNavigationView={this.navigationView}>
			<Screen backgroundColor={'white'}>
				<TopBarNavigation
					leftIcon={IconType.PROFILE_DARK}
					leftAction={() => new LoginService(this.props.navigation).logout()}
					rightIcon={IconType.SEARCH_DARK}
					text={"Jobs"}/>
				{this.state.jobs.length === 0 ?
					(<EmptyListDisplayed
						cause={'You don\'t have any jobs published.'}
						solution={'Please add a job to get started.'}/>)
					: (
					<Screen>
						<CenterContainer>
							<FlatList data={this.state.jobs}
								renderItem={this.renderJob}
								keyExtractor={(item) => item.id}
							/>
						</CenterContainer>
					</Screen>)}
				<ActionButton icon={IconType.PLUS_LIGHT}
							  color={Colors.BLUE}
							  onPress={() => this.props.navigation.navigate('AddJob')}/>
			</Screen>
		</DrawerLayoutAndroid>
}

