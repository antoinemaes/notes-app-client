import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import LoginForm from './LoginForm';
import { useAppContext } from "../libs/contextLib";


export default function Login() {

    const { userHasAuthenticated } = useAppContext();
    const history = useHistory();

    async function login(email, password) {
        try {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            alert(e.message);
        }
    }

    return <LoginForm login={login} />;
}