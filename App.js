import React from "react";
import Login from "./src/component/screen/Login";
import RegisterConsumer from "./src/component/screen/RegisterConsumer";
import RegisterProvider from "./src/component/screen/RegisterProvider";
import Welcome from "./src/component/screen/Welcome";
import StackNavigator from "react-navigation/lib-rn/navigators/StackNavigator";
import Jobs from "./src/component/screen/Jobs";
import AddJob from "./src/component/screen/AddJob";

const Nav = StackNavigator({
		Welcome: {screen: Welcome},
		Login: {screen: Login},
		RegisterConsumer: {screen: RegisterConsumer},
    	RegisterProvider: {screen: RegisterProvider},
		Jobs: {screen: Jobs},
		AddJob: {screen: AddJob},
    },
    {
        headerMode: 'screen'
    }
);

const prevGetStateForAction = Nav.router.getStateForAction;

Nav.router.getStateForAction = (action, state) => {
    // Do not allow to go back from Jobs
    if (action.type === "Navigation/BACK" && state && state.routes[state.index].routeName === "Jobs") {
        return null;
    }
    // Do not allow to go back to Login
    if (action.type === "Navigation/BACK" && state) {
        const newRoutes = state.routes.filter(r => r.routeName !== "Login");
        const newIndex = newRoutes.length - 1;
        return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
    }
    return prevGetStateForAction(action, state);
};

export default class App extends React.Component {
    render = () => <Nav/>
}

