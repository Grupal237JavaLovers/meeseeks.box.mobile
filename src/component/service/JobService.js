import {Endpoint} from "./Endpoint";
import {Alert, AsyncStorage} from "react-native";
import {LoginService} from "./LoginService";


class JobService {

    async getJobs() {
        const response = await fetch(Endpoint.JOBS_PROVIDER, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': await new LoginService().isLoggedIn(),
            },
        });

        return await response.json();
    }
}

export default new JobService();
