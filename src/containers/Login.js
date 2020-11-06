import { Auth } from "aws-amplify";

import LoginForm from './LoginForm';
import { useAppContext } from "../libs/contextLib";


export default function Login() {

    const { userHasAuthenticated } = useAppContext();

    async function login(email, password) {
        try {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
            alert("Logged in");
        } catch (e) {
            alert(e.message);
        }
    }

    return <LoginForm login={login} />;
}